import React from 'react';
import { Sofa, MapPin, Palette, Camera, Users, TrendingUp } from 'lucide-react';
import ServicePage from './ServicePage';

const data = {
  service: 'Furniture',
  hero: {
    kicker: 'Industry · Furniture',
    headline: [
      { text: 'Buyers walk in' },
      { text: "already trusting you,", italic: true },
      { text: "or they don't walk in at all.", accent: true },
    ],
    sub: (
      <>
        Digital growth for furniture brands, retailers and studios — local search,
        showroom traffic, e-commerce and shortlist psychology, engineered end to end.
      </>
    ),
  },
  reality: {
    headline:
      'A furniture buyer decides <span class="text-white/40">weeks before</span> they visit.<br />You have to <span class="text-[#F43F5E]">already be in the shortlist.</span>',
    body:
      'Nobody buys a sofa on the second Google search. Furniture buying is a slow, image-driven, trust-heavy category — and the brand that wins the shortlist stage almost always wins the sale. That\'s the surface we operate on.',
  },
  pillars: {
    kicker: 'How we operate',
    title: 'Six disciplines.<br /><span class="text-white/40">Built for furniture.</span>',
    subtitle: 'A senior strategist experienced in furniture buyer behaviour owns every engagement.',
    pillars: [
      { title: 'Local Search', desc: 'GBP, Maps, LSA and hyperlocal SEO — the surface where 60% of shortlisting actually happens.', Icon: MapPin },
      { title: 'Editorial Content', desc: 'Homes, materials, craftsmanship — content that treats furniture as story, not catalog.', Icon: Palette },
      { title: 'Showroom Imagery', desc: 'Photography and reels that show the piece in a life, not on a white background.', Icon: Camera },
      { title: 'Shortlist Marketing', desc: 'The retargeting and lifecycle strategy for the 4-8 weeks between first search and showroom visit.', Icon: Sofa },
      { title: 'Community & Reviews', desc: 'Social proof turned into a real asset — reviews, UGC and referrals as a system.', Icon: Users },
      { title: 'E-commerce Growth', desc: 'For catalogues that sell online — feed, funnel, delivery UX and lifecycle.', Icon: TrendingUp },
    ],
  },
  stories: {
    title: 'Stories first.<br /><span class="text-white/40">Numbers second.</span>',
    subtitle: 'Recent furniture engagements.',
    stories: [
      { href: '/case-studies/sharma-furniture', client: 'Sharma Furniture', industry: 'Furniture Retail', challenge: 'A trusted local furniture house that was invisible online, chosen in-store but never found before the visit.', approach: 'Rebuilt local discovery, search visibility and the on-site experience so customers arrive already trusting the brand.', outcome: 'Qualified enquiries climbed and the brand now gets discovered, trusted and shortlisted weeks before a customer walks in.', metrics: [ { v: '+26%', l: 'Qualified enquiries' }, { v: '18+', l: 'First-page rankings' }, { v: '100%', l: 'Local intent captured' } ] },
      { href: '/case-studies/aus-tyre', client: 'Australian Tyre Brand', industry: 'E-commerce · Automotive', challenge: 'A related-adjacent story — spec-driven category, high-consideration, thin margins.', approach: 'Feed hygiene, search-term discipline and full-funnel Meta creative. The playbook translates.', outcome: 'Blended ROAS climbed, spend held flat, paid became the most predictable acquisition channel.', metrics: [ { v: '7.5x', l: 'Blended ROAS' }, { v: '150+', l: 'Attributable purchases' }, { v: '100x', l: 'Business growth' } ] },
      { href: '/case-studies/profotech', client: 'Profotech', industry: 'B2B · Category leader', challenge: 'A category where buyers research quietly for weeks before scoping a purchase.', approach: 'Editorial authority + technical SEO + long-form storytelling — the exact stack furniture leaders need.', outcome: 'Became the reference source enterprise buyers cite in RFPs.', metrics: [ { v: '5x', l: 'Organic pipeline' }, { v: '#1', l: 'Category share of voice' }, { v: '40%', l: 'Cheaper qualified lead' } ] },
    ],
  },
  framework: {
    kicker: 'The Adcom Method · Furniture',
    title: 'A four-phase<br /><span class="text-white/40">retail engine.</span>',
    subtitle: 'Every furniture engagement runs on the same shortlist-to-showroom rhythm.',
    phases: [
      { n: '01', tag: 'Phase 01', title: 'Diagnose', desc: 'Local search audit, category listening, showroom foot traffic mapping, GBP teardown. The reality on the ground.' },
      { n: '02', tag: 'Phase 02', title: 'Design', desc: 'Positioning, editorial content system, local search infrastructure, showroom-content marriage.' },
      { n: '03', tag: 'Phase 03', title: 'Build', desc: 'Site rebuild if needed, editorial content, GBP hygiene, review pipeline, shortlist-stage remarketing.' },
      { n: '04', tag: 'Phase 04', title: 'Compound', desc: 'Monthly local search reviews, quarterly editorial refresh, ongoing review generation.' },
    ],
  },
  principles: {
    title: 'Furniture is <span class="text-[#F43F5E]">a trust category.</span><br /><span class="text-white/40">Everything else is a tactic.</span>',
    subtitle: 'Three rules govern every furniture engagement.',
    items: [
      { t: 'Local first, everything else after', d: 'For most furniture brands, local search is the biggest growth lever hiding in plain sight.' },
      { t: 'Story over specification', d: 'A room, a home, a moment — buyers connect to a story before they connect to a spec sheet.' },
      { t: 'Shortlist is where you win', d: 'The 4-8 weeks between first search and visit is where every sale is quietly decided.' },
    ],
  },
  testimonial: { quote: 'Adcom understood our category in the first meeting. They didn\'t come with a channel plan — they came with a shortlist plan. That difference changed our showroom.', name: 'Vinay Sharma', role: 'Founder, furniture retailer', avatar: 'https://i.pravatar.cc/120?img=68' },
  closing: { headlineHtml: 'A shortlist you can\'t see<br /><span class="text-[#F43F5E]">is a shortlist you can\'t win.</span>', body: 'We take a handful of furniture engagements each year — for brands ready to own the surface where shortlists get built.' },
};

export default function IndustryFurniture() { return <ServicePage data={data} />; }
