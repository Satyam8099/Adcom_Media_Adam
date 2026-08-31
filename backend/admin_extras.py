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

    return router
