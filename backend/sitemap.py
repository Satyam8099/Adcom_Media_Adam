"""Public sitemap.xml generator for SEO."""
from datetime import datetime, timezone
from typing import List

from fastapi import APIRouter, Response


STATIC_ROUTES = [
    ("/", 1.0, "weekly"),
    ("/about", 0.8, "monthly"),
    ("/process", 0.7, "monthly"),
    ("/case-studies", 0.9, "weekly"),
    ("/careers", 0.6, "monthly"),
    ("/contact", 0.7, "monthly"),
    ("/blog", 0.9, "weekly"),
    # Services
    ("/services/growth-marketing", 0.9, "monthly"),
    ("/services/performance-marketing", 0.9, "monthly"),
    ("/services/google-ads", 0.9, "monthly"),
    ("/services/meta-ads", 0.9, "monthly"),
    ("/services/seo", 0.9, "monthly"),
    ("/services/ai-seo", 0.9, "monthly"),
    ("/services/social-media-marketing", 0.9, "monthly"),
    ("/services/brand-strategy", 0.9, "monthly"),
    ("/services/website-development", 0.9, "monthly"),
    ("/services/linkedin-marketing", 0.9, "monthly"),
    ("/services/b2b-marketing", 0.9, "monthly"),
    # Industries
    ("/industries/furniture", 0.8, "monthly"),
    ("/industries/pharma", 0.8, "monthly"),
    ("/industries/manufacturing", 0.8, "monthly"),
    ("/industries/b2b", 0.8, "monthly"),
    ("/industries/ecommerce", 0.8, "monthly"),
    # Locations
    ("/locations/pune", 0.8, "monthly"),
    # Case studies (static slugs)
    ("/case-studies/sharma-furniture", 0.7, "monthly"),
    ("/case-studies/prochem", 0.7, "monthly"),
    ("/case-studies/profotech", 0.7, "monthly"),
    ("/case-studies/aus-tyre", 0.7, "monthly"),
    ("/case-studies/skylarr", 0.7, "monthly"),
]


def build_sitemap_router(db, base_url: str = "https://www.adcommedia.com") -> APIRouter:
    router = APIRouter(prefix="/api", tags=["seo"])

    @router.get("/sitemap.xml")
    async def sitemap():
        now = datetime.now(timezone.utc).strftime("%Y-%m-%d")
        blogs = await db.blogs.find({"published": True}, {"_id": 0, "slug": 1, "updated_at": 1}).to_list(500)
        urls: List[str] = []
        for path, priority, freq in STATIC_ROUTES:
            urls.append(
                f"  <url><loc>{base_url}{path}</loc><lastmod>{now}</lastmod>"
                f"<changefreq>{freq}</changefreq><priority>{priority}</priority></url>"
            )
        for b in blogs:
            slug = b.get("slug")
            lastmod = (b.get("updated_at") or now)[:10]
            urls.append(
                f"  <url><loc>{base_url}/blog/{slug}</loc><lastmod>{lastmod}</lastmod>"
                f"<changefreq>monthly</changefreq><priority>0.7</priority></url>"
            )
        xml = (
            '<?xml version="1.0" encoding="UTF-8"?>\n'
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
            + "\n".join(urls)
            + "\n</urlset>\n"
        )
        return Response(content=xml, media_type="application/xml")

    return router
