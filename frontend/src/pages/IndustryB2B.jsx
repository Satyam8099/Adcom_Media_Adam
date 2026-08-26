import React from 'react';
import { Building2, Users, Compass, LineChart, MessagesSquare, TrendingUp } from 'lucide-react';
import ServicePage from './ServicePage';

const data = {
  service: 'B2B',
  hero: {
    kicker: 'Industry · B2B',
    headline: [
      { text: 'B2B has' },
      { text: 'its own physics.', italic: true },
      { text: "We built our practice on it.", accent: true },
    ],
    sub: (
      <>
        End-to-end B2B growth — positioning, category design, demand generation, ABM,
        thought leadership and sales enablement — for teams selling into buying committees.
      </>
    ),
  },
  reality: {
    headline:
      'Most B2B marketing is <span class="text-white/40">demand harvesting</span><br />pretending to be <span class="text-[#F43F5E]">demand creation.</span>',
    body:
      'The real leverage in B2B is changing what the buyer believes months before they raise a hand. That\'s not a channel problem or an ad problem — it\'s a category problem. We operate at that layer.',
  },
  pillars: {
    kicker: 'How we operate',
    title: 'Six disciplines.<br /><span class="text-white/40">Built for B2B.</span>',
    subtitle: 'A senior B2B strategist runs every account. No junior playbook clones.',
    pillars: [
      { title: 'Category Design', desc: 'Position the company as a category, not a feature. The most defensible moat in B2B.', Icon: Compass },
      { title: 'ICP & Segmentation', desc: 'Sharp Ideal Customer Profile work — job titles, buying triggers, disqualification rules.', Icon: Building2 },
      { title: 'Demand Creation', desc: 'Editorial content and thought leadership that shapes buyer belief months before the RFP.', Icon: TrendingUp },
      { title: 'Demand Capture', desc: 'Search, LinkedIn, review sites, comparison pages — the evaluation-stage surfaces.', Icon: LineChart },
      { title: 'ABM Programs', desc: 'Named-account programs orchestrated with sales — not fake, not automated spray.', Icon: Users },
      { title: 'Sales Enablement', desc: 'Content, decks, one-pagers that make your best AE\'s work replicable.', Icon: MessagesSquare },
    ],
  },
  stories: {
    title: 'Stories first.<br /><span class="text-white/40">Numbers second.</span>',
    subtitle: 'Recent B2B engagements. Different categories, one operating model.',
    stories: [
      { href: '/case-studies/prochem', client: 'Prochem Turnkey Projects', industry: 'B2B · Engineering', challenge: 'A twenty-year engineering house with deep expertise and no digital presence in front of the buyers who mattered.', approach: 'Founder-led LinkedIn thought leadership + long-form SEO — category authority, not ad spend.', outcome: 'Became the feed every plant head in India quietly follows. Inbound became the default source.', metrics: [ { v: '13k+', l: 'Followers' }, { v: '128k', l: 'Impressions' }, { v: '0', l: 'Rupees on ads' } ] },
      { href: '/case-studies/profotech', client: 'Profotech', industry: 'B2B · Enterprise Equipment', challenge: 'Selling into enterprise buyers who research quietly across peer networks and industry publications.', approach: 'Positioned as the category\'s reference source with editorial content and enterprise-grade collateral.', outcome: 'Became the brand cited in RFPs and scoping calls. Pipeline economics improved measurably.', metrics: [ { v: '5x', l: 'Organic pipeline' }, { v: '#1', l: 'Category share of voice' }, { v: '40%', l: 'Cheaper qualified lead' } ] },
      { href: '/case-studies/skylarr', client: 'Skylarr Labs', industry: 'PCD Pharma · B2B', challenge: 'A quiet B2B where distributors research franchise partners silently for months before the first call.', approach: 'Category-education content paired with a nurture-first inbound funnel.', outcome: 'Became the brand distributors mention first when franchise partners ask who they should call.', metrics: [ { v: '40%', l: 'Cheaper CAC' }, { v: '3x', l: 'Inbound calls' }, { v: '90d', l: 'To first close' } ] },
    ],
  },
  framework: {
    kicker: 'The Adcom Method · B2B',
    title: 'A four-phase<br /><span class="text-white/40">B2B system.</span>',
    subtitle: 'Every B2B engagement runs the same operating rhythm — no consumer-playbook retrofits.',
    phases: [
      { n: '01', tag: 'Phase 01', title: 'Diagnose', desc: 'ICP work, category listening, sales interviews. The truth from both sides of the pipeline.' },
      { n: '02', tag: 'Phase 02', title: 'Position', desc: 'Category thesis, ICP refinement, messaging architecture. The single source of truth.' },
      { n: '03', tag: 'Phase 03', title: 'Publish & Program', desc: 'Editorial demand engine + named-account ABM + sales enablement — in parallel from day one.' },
      { n: '04', tag: 'Phase 04', title: 'Compound', desc: 'Monthly pipeline reviews with sales, quarterly category updates, ongoing publishing.' },
    ],
  },
  principles: {
    title: 'B2B is a <span class="text-[#F43F5E]">belief-shaping</span><br /><span class="text-white/40">business.</span>',
    subtitle: 'Three rules govern every B2B engagement.',
    items: [
      { t: 'Category before creative', d: 'If the category is undefined, the creative is decoration. Position first.' },
      { t: 'Sales is a co-owner', d: 'B2B marketing that doesn\'t sit inside the pipeline meeting is marketing that will get cut.' },
      { t: 'Thought leadership is the moat', d: 'Ads can be copied. Category authority cannot.' },
    ],
  },
  testimonial: { quote: 'Adcom made us stop calling ourselves a vendor and start acting like a category. Two years later, we don\'t compete on price anymore.', name: 'Manish Bhalla', role: 'Founder, B2B SaaS', avatar: 'https://i.pravatar.cc/120?img=52' },
  closing: { headlineHtml: 'B2B doesn\'t reward <span class="text-white/40">volume.</span><br /><span class="text-[#F43F5E]">It rewards belief.</span>', body: 'We open a small number of B2B engagements each quarter — for teams selling into buying committees who want to change what those committees believe.' },
};

export default function IndustryB2B() { return <ServicePage data={data} />; }
