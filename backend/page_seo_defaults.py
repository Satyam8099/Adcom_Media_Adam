"""Curated meta title + description for every catalog page."""

PAGE_SEO_DEFAULTS = {
    "home": {
        "seo_title": "AI-First Digital Marketing Agency in India | Adcom Media",
        "meta_description": (
            "Adcom Media is an AI-first digital marketing agency offering SEO, AI SEO, "
            "paid ads, social media, branding and web development for ambitious businesses."
        ),
    },
    "about": {
        "seo_title": "About Adcom Media | AI-First Digital Marketing Agency",
        "meta_description": (
            "Discover Adcom Media, an AI-first digital marketing agency combining strategy, "
            "creativity, technology, SEO and performance marketing to build brands that grow."
        ),
    },
    "process": {
        "seo_title": "Our Digital Marketing Process | Adcom Media",
        "meta_description": (
            "Explore Adcom Media's structured digital marketing process, from research and "
            "strategy to creative execution, technology, performance and continuous optimization."
        ),
    },
    "case-studies": {
        "seo_title": "Digital Marketing Case Studies & Portfolio | Adcom Media",
        "meta_description": (
            "Explore Adcom Media's digital marketing portfolio and case studies across SEO, "
            "paid advertising, branding, social media, websites and B2B growth."
        ),
    },
    "blog": {
        "seo_title": "Digital Marketing, SEO & AI SEO Insights | Adcom Media",
        "meta_description": (
            "Read Adcom Media's insights on digital marketing, SEO, AI SEO, paid advertising, "
            "social media, branding, websites and strategies for modern business growth."
        ),
    },
    "careers": {
        "seo_title": "Careers at Adcom Media | Join Our Digital Team",
        "meta_description": (
            "Explore career opportunities at Adcom Media and join a team working across digital "
            "marketing, SEO, AI SEO, creative, technology, branding and performance."
        ),
    },
    "contact": {
        "seo_title": "Contact Adcom Media | Digital Marketing Agency",
        "meta_description": (
            "Get in touch with Adcom Media for digital marketing, SEO, AI SEO, paid advertising, "
            "social media, branding, website development and B2B growth solutions."
        ),
    },
    "services-growth-marketing": {
        "seo_title": "Growth Marketing Agency | Strategy & Business Growth | Adcom Media",
        "meta_description": (
            "Adcom Media delivers growth marketing strategies that connect acquisition, SEO, "
            "paid media, content, conversion and analytics to create sustainable business growth."
        ),
    },
    "services-performance-marketing": {
        "seo_title": "Performance Marketing Agency | Paid Growth | Adcom Media",
        "meta_description": (
            "Drive measurable growth with Adcom Media's performance marketing services, combining "
            "paid media, audience strategy, conversion optimization, analytics and testing."
        ),
    },
    "services-google-ads": {
        "seo_title": "Google Ads Management & PPC Services | Adcom Media",
        "meta_description": (
            "Grow with targeted Google Ads and PPC campaigns managed by Adcom Media, from keyword "
            "strategy and campaign setup to optimization, conversion tracking and scaling."
        ),
    },
    "services-meta-ads": {
        "seo_title": "Meta Ads Management & Facebook Advertising | Adcom Media",
        "meta_description": (
            "Reach and convert the right audiences with Meta Ads managed by Adcom Media, including "
            "Facebook and Instagram advertising, creative strategy, targeting and optimization."
        ),
    },
    "services-seo": {
        "seo_title": "SEO Services & Search Engine Optimization | Adcom Media",
        "meta_description": (
            "Improve organic visibility with Adcom Media's SEO services covering technical SEO, "
            "content, keyword strategy, on-page optimization, authority and search performance."
        ),
    },
    "services-ai-seo": {
        "seo_title": "AI SEO & Generative Search Optimization | Adcom Media",
        "meta_description": (
            "Prepare your brand for AI search with Adcom Media's AI SEO services focused on entity "
            "visibility, authoritative content, structured information and generative search."
        ),
    },
    "services-social-media-marketing": {
        "seo_title": "Social Media Marketing Agency | Adcom Media",
        "meta_description": (
            "Grow your brand with social media marketing from Adcom Media, combining strategy, "
            "content, creative campaigns and performance insights for measurable growth."
        ),
    },
    "services-brand-strategy": {
        "seo_title": "Branding & Brand Strategy Agency | Adcom Media",
        "meta_description": (
            "Build a distinctive brand with Adcom Media through positioning, brand strategy, "
            "visual identity, messaging and digital experiences designed for growth."
        ),
    },
    "services-website-development": {
        "seo_title": "Website Development Agency | Adcom Media",
        "meta_description": (
            "Build fast, modern and conversion-focused websites with Adcom Media, combining web "
            "development, UX, SEO, performance and business strategy."
        ),
    },
    "services-linkedin-marketing": {
        "seo_title": "LinkedIn Marketing Agency | Adcom Media",
        "meta_description": (
            "Grow your B2B presence with LinkedIn marketing from Adcom Media, combining content, "
            "positioning, targeting, lead generation and performance campaigns."
        ),
    },
    "services-b2b-marketing": {
        "seo_title": "B2B Marketing Agency | Adcom Media",
        "meta_description": (
            "Grow your B2B business with SEO, AI SEO, LinkedIn marketing, paid ads, content, "
            "websites and lead generation strategies from Adcom Media."
        ),
    },
    "industries-furniture": {
        "seo_title": "Digital Marketing for Furniture Brands | Adcom Media",
        "meta_description": (
            "Help your furniture brand grow with SEO, social media, paid ads, websites, branding "
            "and AI SEO strategies from Adcom Media, built for modern buyers."
        ),
    },
    "industries-pharma": {
        "seo_title": "Digital Marketing for Pharma Companies | Adcom Media",
        "meta_description": (
            "Build digital visibility for pharma businesses with SEO, B2B marketing, LinkedIn, "
            "websites, branding and performance marketing from Adcom Media."
        ),
    },
    "industries-manufacturing": {
        "seo_title": "Digital Marketing for Manufacturing | Adcom Media",
        "meta_description": (
            "Help manufacturing companies grow with SEO, AI SEO, websites, LinkedIn, paid media "
            "and digital strategies designed to generate visibility and enquiries."
        ),
    },
    "industries-b2b": {
        "seo_title": "Digital Marketing for B2B Companies | Adcom Media",
        "meta_description": (
            "Grow your B2B business with SEO, AI SEO, LinkedIn marketing, paid ads, content, "
            "websites and lead generation strategies from Adcom Media."
        ),
    },
    "industries-ecommerce": {
        "seo_title": "E-commerce Digital Marketing Agency | Adcom Media",
        "meta_description": (
            "Grow your e-commerce brand with SEO, paid ads, social media, website optimization, "
            "branding and conversion-focused digital marketing from Adcom Media."
        ),
    },
    "locations-pune": {
        "seo_title": "Digital Marketing Agency in Pune | Adcom Media",
        "meta_description": (
            "Adcom Media is a digital marketing agency in Pune offering SEO, AI SEO, Google Ads, "
            "Meta Ads, social media, branding, web development and B2B marketing."
        ),
    },
}


async def seed_page_seo(db) -> int:
    """Upsert curated SEO title + description for every catalog page. Returns upsert count."""
    from datetime import datetime, timezone

    now = datetime.now(timezone.utc).isoformat()
    count = 0
    for key, meta in PAGE_SEO_DEFAULTS.items():
        await db.page_seo.update_one(
            {"key": key},
            {
                "$set": {
                    "key": key,
                    "seo_title": meta["seo_title"],
                    "meta_description": meta["meta_description"],
                    "updated_at": now,
                }
            },
            upsert=True,
        )
        count += 1
    return count
