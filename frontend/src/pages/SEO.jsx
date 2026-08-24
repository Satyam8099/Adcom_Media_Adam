import React from 'react';
import { Search, FileText, Link2, Code2, Globe, Compass } from 'lucide-react';
import ServicePage from './ServicePage';

const data = {
  service: 'SEO',
  hero: {
    kicker: 'Service · SEO',
    headline: [
      { text: 'Search still' },
      { text: 'rewards the patient.', italic: true },
      { text: 'And the specific.', accent: true },
    ],
    sub: (
      <>
        Technical SEO, content architecture and topical authority for brands that want the
        kind of organic growth that outlasts the retainer — not another audit gathering dust.
      </>
    ),
  },
  reality: {
    headline:
      'Most SEO agencies deliver <span class="text-white/40">reports.</span><br />We deliver <span class="text-[#F43F5E]">rankings that stick.</span>',
    body:
      'Templated audits, generic content briefs, backlink deals — the SEO industry has been coasting for a decade. Meanwhile Google has been quietly rewarding entity clarity, editorial authority and technical excellence. We build for what search actually rewards.',
  },
  pillars: {
    kicker: 'How we operate',
    title: 'Six disciplines.<br /><span class="text-white/40">One search authority.</span>',
    subtitle: 'A senior SEO practitioner and a senior editor on every engagement — not a subcontracted content mill.',
    pillars: [
      { title: 'Technical Foundation', desc: 'Core Web Vitals, crawl budget, indexation, structured data. Nothing else compounds without this.', Icon: Code2 },
      { title: 'Content Architecture', desc: 'Topical clusters, entity hygiene and internal linking that lets Google understand you as a category.', Icon: FileText },
      { title: 'Keyword & Intent', desc: 'Buyer intent mapping across informational, navigational and transactional. No keyword-bloat.', Icon: Search },
      { title: 'Editorial Authority', desc: 'Long-form pieces worth citing — the only backlinks that still matter are the ones you earn.', Icon: Compass },
      { title: 'Digital PR & Links', desc: 'Editor-led outreach with real story angles. No PBN, no directory graveyards.', Icon: Link2 },
      { title: 'International & Local', desc: 'Hreflang, GBP, Maps, category schemas — SEO built for the geography that actually pays.', Icon: Globe },
    ],
  },
  stories: {
    title: 'Stories first.<br /><span class="text-white/40">Numbers second.</span>',
    subtitle: 'Recent SEO engagements. Different verticals, one editorial-first operating model.',
    stories: [
      { href: '/case-studies/sharma-furniture', client: 'Sharma Furniture', industry: 'Furniture Retail', challenge: 'A trusted local furniture house that ranked for nothing worth ranking for.', approach: 'Rebuilt the site\'s topical map, cleaned technical debt and published editorial pages worth linking to.', outcome: '18+ first-page rankings, 100% local intent captured — buyers now find the brand before they visit.', metrics: [ { v: '+26%', l: 'Qualified enquiries' }, { v: '18+', l: 'First-page rankings' }, { v: '100%', l: 'Local intent captured' } ] },
      { href: '/case-studies/profotech', client: 'Profotech', industry: 'Photography Equipment', challenge: 'A niche B2B category with high-consideration buyers who did all the research quietly on Google.', approach: 'Topical authority pages on gear science, use-case guides and buyer comparisons. The category\'s answer engine.', outcome: 'Became the reference source distributors and enterprise buyers cite when scoping projects.', metrics: [ { v: '5x', l: 'Organic traffic' }, { v: '#1', l: 'For category terms' }, { v: '40%', l: 'Cheaper qualified lead' } ] },
      { href: '/case-studies/prochem', client: 'Prochem Turnkey Projects', industry: 'B2B · Engineering', challenge: 'A twenty-year engineering house invisible on the searches that mattered to plant heads and procurement.', approach: 'Long-form category content paired with LinkedIn-led distribution. The two amplify each other.', outcome: 'Ranked for the queries plant heads actually type — and became the feed they quietly follow.', metrics: [ { v: '13k+', l: 'LinkedIn followers' }, { v: '128k', l: 'Impressions' }, { v: '0', l: 'Rupees on ads' } ] },
    ],
  },
  framework: {
    kicker: 'The Adcom Method · SEO',
    title: 'A four-phase<br /><span class="text-white/40">authority system.</span>',
    subtitle: 'SEO compounds. Our system compounds it faster.',
    phases: [
      { n: '01', tag: 'Phase 01', title: 'Diagnose', desc: 'Technical crawl, content audit, entity mapping, competitor SERP teardown. The unforgiving baseline.' },
      { n: '02', tag: 'Phase 02', title: 'Architect', desc: 'Topical clusters, information architecture, redirect maps and a content calendar with priorities, not wish-lists.' },
      { n: '03', tag: 'Phase 03', title: 'Build & Publish', desc: 'Editorial content, structured data, page templates, technical fixes — shipped, not just recommended.' },
      { n: '04', tag: 'Phase 04', title: 'Compound', desc: 'Monthly content velocity, quarterly rankings reviews, ongoing digital PR. The channel that pays back.' },
    ],
  },
  principles: {
    title: 'SEO is a <span class="text-[#F43F5E]">publishing discipline</span><br /><span class="text-white/40">disguised as a technical one.</span>',
    subtitle: 'Three rules govern every SEO engagement.',
    items: [
      { t: 'Editorial before optimisation', d: 'A page that isn\'t worth reading isn\'t worth ranking. We start with the sentence, not the schema.' },
      { t: 'Entities over keywords', d: 'Google understands your brand as a thing, not a string. Every asset feeds that understanding.' },
      { t: 'Patience is the moat', d: 'The reason most SEO fails is that agencies leave before the compounding starts. We don\'t.' },
    ],
  },
  testimonial: { quote: 'Adcom rebuilt our SEO around content people wanted to read. Two years in, that decision is still paying us back — pipeline, hires, credibility.', name: 'Vivek Iyer', role: 'CMO, category brand', avatar: 'https://i.pravatar.cc/120?img=13' },
  closing: { headlineHtml: 'SEO doesn\'t reward <span class="text-white/40">the loudest.</span><br /><span class="text-[#F43F5E]">It rewards the useful.</span>', body: 'We open a small number of long-term SEO engagements each quarter — for brands willing to build authority that outlasts a Google update.' },
};

export default function SEO() { return <ServicePage data={data} />; }
