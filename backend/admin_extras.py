"""Admin extras: enquiries inbox + site settings."""
from datetime import datetime, timezone
from typing import Optional, Dict, Any, List

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, Field


class SiteSettings(BaseModel):
    company_name: Optional[str] = None
    tagline: Optional[str] = None
    email: Optional[str] = None
    phone: Optional[str] = None
    address: Optional[str] = None
    linkedin: Optional[str] = None
    instagram: Optional[str] = None
    twitter: Optional[str] = None
    youtube: Optional[str] = None
    facebook: Optional[str] = None
    default_seo_title: Optional[str] = None
    default_meta_description: Optional[str] = None
    default_og_image: Optional[str] = None


class PageSEO(BaseModel):
    seo_title: Optional[str] = None
    meta_description: Optional[str] = None
    og_image: Optional[str] = None
    canonical: Optional[str] = None
    no_index: Optional[bool] = False


# Curated list of static pages the studio can edit SEO for.
PAGE_CATALOG = [
    {"key": "home", "label": "Home", "path": "/"},
    {"key": "about", "label": "About", "path": "/about"},
    {"key": "process", "label": "Process", "path": "/process"},
    {"key": "case-studies", "label": "Portfolio / Case Studies", "path": "/case-studies"},
    {"key": "blog", "label": "Blog (index)", "path": "/blog"},
    {"key": "careers", "label": "Careers", "path": "/careers"},
    {"key": "contact", "label": "Contact", "path": "/contact"},
    {"key": "services-growth-marketing", "label": "Service · Growth Marketing", "path": "/services/growth-marketing"},
    {"key": "services-performance-marketing", "label": "Service · Performance Marketing", "path": "/services/performance-marketing"},
    {"key": "services-google-ads", "label": "Service · Google Ads", "path": "/services/google-ads"},
    {"key": "services-meta-ads", "label": "Service · Meta Ads", "path": "/services/meta-ads"},
    {"key": "services-seo", "label": "Service · SEO", "path": "/services/seo"},
    {"key": "services-ai-seo", "label": "Service · AI SEO", "path": "/services/ai-seo"},
    {"key": "services-social-media-marketing", "label": "Service · Social Media", "path": "/services/social-media-marketing"},
    {"key": "services-brand-strategy", "label": "Service · Branding", "path": "/services/brand-strategy"},
    {"key": "services-website-development", "label": "Service · Website Development", "path": "/services/website-development"},
    {"key": "services-linkedin-marketing", "label": "Service · LinkedIn Marketing", "path": "/services/linkedin-marketing"},
    {"key": "services-b2b-marketing", "label": "Service · B2B Marketing", "path": "/services/b2b-marketing"},
    {"key": "industries-furniture", "label": "Industry · Furniture", "path": "/industries/furniture"},
    {"key": "industries-pharma", "label": "Industry · Pharma", "path": "/industries/pharma"},
    {"key": "industries-manufacturing", "label": "Industry · Manufacturing", "path": "/industries/manufacturing"},
    {"key": "industries-b2b", "label": "Industry · B2B", "path": "/industries/b2b"},
    {"key": "industries-ecommerce", "label": "Industry · E-commerce", "path": "/industries/ecommerce"},
    {"key": "locations-pune", "label": "Location · Pune", "path": "/locations/pune"},
]


def build_admin_extras_router(db, require_admin) -> APIRouter:
    router = APIRouter(prefix="/api/admin", tags=["admin-extras"])

    # ---------- Enquiries ---------- #
    @router.get("/enquiries")
    async def list_enquiries(source: Optional[str] = None, limit: int = 200, user=Depends(require_admin)):
        query = {}
        if source:
            query["source"] = source
        docs = await db.contacts.find(query, {"_id": 0}).sort("created_at", -1).to_list(limit)
        return docs

    @router.get("/enquiries/stats")
    async def enquiry_stats(user=Depends(require_admin)):
        pipeline = [{"$group": {"_id": "$source", "count": {"$sum": 1}}}]
        by_source: Dict[str, int] = {}
        async for doc in db.contacts.aggregate(pipeline):
            by_source[doc["_id"] or "unknown"] = doc["count"]
        total = sum(by_source.values())
        return {"total": total, "by_source": by_source}

    @router.delete("/enquiries/{enquiry_id}")
    async def delete_enquiry(enquiry_id: str, user=Depends(require_admin)):
        result = await db.contacts.delete_one({"id": enquiry_id})
        if not result.deleted_count:
            raise HTTPException(status_code=404, detail="Enquiry not found")
        return {"ok": True}

    # ---------- Settings ---------- #
    @router.get("/settings")
    async def get_settings(user=Depends(require_admin)):
        doc = await db.site_settings.find_one({"_id": "singleton"}, {"_id": 0})
        return doc or {}

    @router.put("/settings")
    async def put_settings(payload: SiteSettings, user=Depends(require_admin)):
        data = {k: v for k, v in payload.model_dump().items() if v is not None}
        data["updated_at"] = datetime.now(timezone.utc).isoformat()
        await db.site_settings.update_one({"_id": "singleton"}, {"$set": data}, upsert=True)
        doc = await db.site_settings.find_one({"_id": "singleton"}, {"_id": 0})
        return doc or {}

    # ---------- Dashboard overview ---------- #
    @router.get("/overview")
    async def overview(user=Depends(require_admin)):
        blogs_count = await db.blogs.count_documents({"published": True})
        blog_views_pipeline = [{"$group": {"_id": None, "total": {"$sum": "$views"}}}]
        blog_views = 0
        async for d in db.blogs.aggregate(blog_views_pipeline):
            blog_views = d.get("total", 0)
        leads_count = await db.adam_leads.count_documents({})
        converted_count = await db.adam_leads.count_documents({"status": "CONVERTED"})
        contact_count = await db.adam_leads.count_documents({"status": "CONTACT_REQUESTED"})
        enquiries_count = await db.contacts.count_documents({})
        recent_leads = await db.adam_leads.find({}, {"_id": 0, "lead_id": 1, "profile.name": 1, "profile.company": 1, "status": 1, "lead_score": 1, "updated_at": 1}).sort("updated_at", -1).to_list(5)
        recent_enquiries = await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(5)
        return {
            "blogs": {"total": blogs_count, "views": blog_views},
            "leads": {"total": leads_count, "converted": converted_count, "contact_requested": contact_count},
            "enquiries": {"total": enquiries_count},
            "recent_leads": recent_leads,
            "recent_enquiries": recent_enquiries,
        }

    # ---------- Pages CMS (SEO overrides) ---------- #
    @router.get("/pages")
    async def list_pages(user=Depends(require_admin)):
        stored = {}
        async for d in db.page_seo.find({}, {"_id": 0}):
            stored[d.get("key")] = d
        return [
            {
                **p,
                "seo_title": (stored.get(p["key"]) or {}).get("seo_title"),
                "meta_description": (stored.get(p["key"]) or {}).get("meta_description"),
                "og_image": (stored.get(p["key"]) or {}).get("og_image"),
                "canonical": (stored.get(p["key"]) or {}).get("canonical"),
                "no_index": (stored.get(p["key"]) or {}).get("no_index", False),
                "updated_at": (stored.get(p["key"]) or {}).get("updated_at"),
            }
            for p in PAGE_CATALOG
        ]

    @router.put("/pages/{key}")
    async def upsert_page_seo(key: str, payload: PageSEO, user=Depends(require_admin)):
        catalog_keys = {p["key"] for p in PAGE_CATALOG}
        if key not in catalog_keys:
            raise HTTPException(status_code=404, detail="Unknown page")
        data = {k: v for k, v in payload.model_dump().items() if v is not None}
        data["key"] = key
        data["updated_at"] = datetime.now(timezone.utc).isoformat()
        await db.page_seo.update_one({"key": key}, {"$set": data}, upsert=True)
        return await db.page_seo.find_one({"key": key}, {"_id": 0})

    return router


def build_public_seo_router(db) -> APIRouter:
    """Unauthenticated read endpoint for the frontend head renderer."""
    router = APIRouter(prefix="/api", tags=["public-seo"])

    @router.get("/page-seo/{key}")
    async def get_page_seo(key: str):
        doc = await db.page_seo.find_one({"key": key}, {"_id": 0})
        return doc or {}

    return router
