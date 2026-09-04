# Adcom Media — Product Requirements Doc

## Original Problem Statement
Build a world-class, premium digital marketing agency website for **Adcom Media** with a bold, dark-themed (#000000) Awwwards-level cinematic UI (Framer Motion). Scope now includes:
- Hidden interactive AI easter egg ("ADAM Protocol") — DONE
- Fully functional Admin Panel for CMS (Task 3) — **DONE (Jul 2026)**
- Real AI Growth Intelligence workspace behind ADAM that acts like a CMO (Task 2) — **DONE (Jul 2026)**
- Blog Analytics — **DONE (Jul 2026)**

## Current State (July 2026)
- Polished React SPA + FastAPI + MongoDB
- 5 real case studies wired across homepage & service pages
- ADAM Protocol easter egg: Konami code (desktop), 11-tap footer, mobile "Activate ADAM" button
- ADAM Intelligence Workspace (post-narrative): URL scraper + GPT-5.6-sol strategist streaming chat + 90-day roadmap export + soft lead capture
- Admin CMS at `/adcom-admin` with Emergent-managed Google Auth (whitelist: `hello.adcommedia@gmail.com`)
- Blog posts migrated to MongoDB with view counters + popular-post analytics dashboard

## Recent Changes
- **2026-08-31 late (this run)** — **Pages CMS**: New "Pages" admin tab with 24 editable pages (Home, About, Process, Case Studies index, Blog index, Careers, Contact, all 11 services, all 5 industries, Pune). Editor with SEO title (60-char counter), meta description (160-char counter), OG image URL, canonical URL, no-index toggle, and a live SERP preview card. Public endpoint `GET /api/page-seo/{key}`. New `useSEO` hook applies overrides to `<title>` + full OG/Twitter/canonical/robots meta tags. Wired into Landing/Blog/BlogPost/ServicePage (covers 22+ of the 24 pages).
- **2026-08-31 earlier** — robots.txt, llm.txt, dynamic /api/sitemap.xml, EM-dash cleanup across 28 files, Admin panel Overview + Enquiries + Settings tabs, Blog SEO fields.
- **2026-08 earlier** — 13 new pages, Lead Inbox, secure /login, sessionStorage intro replay, Secret ⓘ button + Konami card, Return Visitor Continuity.

## Backlog (P1)
- **Portfolio CMS** — migrate the 5 hardcoded case studies into MongoDB with admin CRUD
- **Media library** — image + document upload via Emergent object storage
- **Blog category taxonomy** — replace free-text with a category collection
- **Password Rotate** — in-dashboard password change
- **Lead Export** — CSV export from Lead Inbox
- **Site settings → head** — apply `default_seo_title` / `default_og_image` from Settings as global fallbacks

## Site Map
- `/` · `/about` · `/process` · `/case-studies` · `/case-studies/{slug}` · `/careers` · `/contact` · `/blog` · `/blog/{slug}`
- **Services** — `/services/growth-marketing`, `/services/performance-marketing`, `/services/google-ads`, `/services/meta-ads`, `/services/seo`, `/services/ai-seo`, `/services/social-media-marketing`, `/services/brand-strategy`, `/services/website-development`, `/services/linkedin-marketing`, `/services/b2b-marketing`
- **Industries** — `/industries/furniture`, `/industries/pharma`, `/industries/manufacturing`, `/industries/b2b`, `/industries/ecommerce`
- **Locations** — `/locations/pune`
- **Admin** — `/login`, `/adcom-admin` (Essays + Lead inbox tabs)

## Architecture
- `/app/frontend/src/pages/Login.jsx` — internal password login (with Google as secondary)
- `/app/frontend/src/pages/admin/AdminPanel.jsx` — protected, redirects to `/login`
- `/app/frontend/src/components/SecretInfoButton.jsx` — 60s desktop reveal + Konami discovery card
- `/app/frontend/src/components/adam/AdamProtocol.jsx` — sessionStorage intro-replay counter + Skip button
- `/app/frontend/src/components/adam/AdamWorkspace.jsx` — Return Visitor Continuity banner + resume flow
- `/app/backend/auth.py` — password login (bcrypt) + seed_admin + brute-force
- `/app/backend/adam_leads.py` — full lead lifecycle + by-email lookup + Resend handover email
- `/app/backend/adam_intel.py` — scraper + streaming chat + roadmap
- `/app/backend/blogs.py` — CMS CRUD + view analytics
- `/app/backend/server.py` — router wiring + seeds + indexes

## DB Schema
- `contacts`: `{name, email, company, website, message, source, ...}` (source='adam-workspace' for ADAM leads mirrored on handover)
- `adam_leads` **(new)**: `{lead_id, session_id, profile:{name,company,industry,business_type,location,market,goal,audience,marketing_channels,pain_points,budget,timeline,website,email,phone,preferred_contact}, transcript:[{role,text}], status:DRAFT|QUALIFIED|ANALYSIS_STARTED|ANALYSIS_COMPLETED|CONTACT_REQUESTED|CONVERTED, lead_score, business_summary, website_summary, roadmap_markdown, created_at, updated_at}`
- `blogs`: `{id, slug, title, excerpt, category, read_time, date, cover, author:{name,role,avatar}, body:[str], views, published, created_at, updated_at}`
- `users`: `{user_id, email, name, picture, role, created_at, last_login}` (role: 'chief' | 'admin')
- `user_sessions`: `{user_id, session_token, expires_at, created_at}`

## Key API Endpoints
- **Auth**: `POST /api/auth/session`, `GET /api/auth/me`, `POST /api/auth/logout`
- **Blogs (public)**: `GET /api/blogs`, `GET /api/blogs/{slug}` (increments views)
- **Blogs (admin)**: `POST /api/admin/blogs`, `PATCH /api/admin/blogs/{id}`, `DELETE /api/admin/blogs/{id}`, `GET /api/admin/analytics`
- **ADAM Intel**: `GET /api/adam/status`, `POST /api/adam/scrape`, `POST /api/adam/chat` (SSE), `POST /api/adam/roadmap`, `POST /api/adam/voice` (ElevenLabs TTS)
- **ADAM Conversational (new)**: `POST /api/adam/discover`, `POST /api/adam/lead/upsert`, `GET /api/adam/lead/{session_id}`, `POST /api/adam/summary`, `POST /api/adam/handover`
- **Contact**: `POST /api/contact` (Resend email → `hello.adcommedia@gmail.com`)

## Integrations
- **Resend** (emails) — user API key configured
- **ElevenLabs** (TTS) — user API key configured
- **Emergent-managed Google Auth** — no API keys required, uses `auth.emergentagent.com`
- **OpenAI GPT-5.6-sol** — via Emergent LLM key (`EMERGENT_LLM_KEY`) — universal key

## Testing
- Backend: 18/18 pytest tests pass — `/app/backend/tests/test_admin_and_adam.py`, `/app/backend/tests/test_contact_api.py`
- Frontend: Playwright covering blog rendering, admin CRUD, ADAM easter egg → workspace flow, lead capture
- Test report: `/app/test_reports/iteration_3.json`
- Admin testing playbook: `/app/memory/test_credentials.md`

## Prioritized Backlog

### ✅ DONE
- Task 3 — Admin Panel
- Task 2 — ADAM Intelligence Layer
- Blog Analytics
- Blog migration to DB

### 🟢 P2 — Backlog / Future
- Rich text (TipTap) editor with image upload for admin
- Public blog RSS feed
- Admin-side lead inbox (view submissions from `/api/contact`)
- Analytics: page views (not just blog reads)
- Persist ADAM chat history per lead-email so the studio can review conversations before calling
- Replace `window.confirm()` with shadcn `AlertDialog` in admin delete flow
