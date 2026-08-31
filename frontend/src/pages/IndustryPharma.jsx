import React from 'react';
import { Pill, ShieldCheck, Users, Compass, FileText, TrendingUp } from 'lucide-react';
import ServicePage from './ServicePage';

const data = {
  service: 'Pharma',
  hero: {
    kicker: 'Industry · Pharma',
    headline: [
      { text: 'Pharma marketing is' },
      { text: 'a regulated craft.', italic: true },
      { text: 'And a trust category.', accent: true },
    ],
    sub: (
      <>
        Digital growth for pharma manufacturers, PCD franchise brands and healthcare marketers , 
        compliant, credible and conversion-driven. No shortcuts. No hype.
      </>
    ),
  },
  reality: {
    headline:
      'Pharma buyers <span class="text-white/40">research silently.</span><br /><span class="text-[#F43F5E]">Own that silence.</span>',
    body:
      'Distributors, retailers and prescribers do weeks of quiet research before the first call. Cold outreach is expensive; category authority is durable. We build the surfaces buyers actually use during that silent evaluation window.',
  },
  pillars: {
    kicker: 'How we operate',
    title: 'Six disciplines.<br /><span class="text-white/40">Built for pharma.</span>',
    subtitle: 'A senior operator experienced in pharma marketing compliance owns every engagement.',
    pillars: [
      { title: 'Category Positioning', desc: 'A defensible thesis for the brand, therapeutic focus, franchise model, distribution moat.', Icon: Compass },
      { title: 'Distributor Trust', desc: 'Content and social systems built specifically for the franchise or distributor decision.', Icon: Users },
      { title: 'Compliance-First Creative', desc: 'Ad creative that respects regulatory boundaries without becoming sterile.', Icon: ShieldCheck },
      { title: 'Product Storytelling', desc: 'Therapeutic areas and molecule stories, told with editorial care, not brochureware.', Icon: Pill },
      { title: 'Content & SEO', desc: 'Long-form pieces that rank for the queries distributors and retailers actually search.', Icon: FileText },
      { title: 'Performance & Nurture', desc: 'Meta, Google and LinkedIn stitched into a nurture funnel with sales, not around them.', Icon: TrendingUp },
    ],
  },
  stories: {
    title: 'Stories first.<br /><span class="text-white/40">Numbers second.</span>',
    subtitle: 'Recent pharma and healthcare engagements.',
    stories: [
      { href: '/case-studies/skylarr', client: 'Skylarr Labs', industry: 'PCD Pharma Franchise', challenge: 'Distributors research franchise partners quietly for weeks before the first call, Skylarr owned none of that surface.', approach: 'Category-education content across LinkedIn and Meta, tuned to the questions distributors actually ask.', outcome: 'Became the brand distributors mention first when franchise partners ask who they should call.', metrics: [ { v: '40%', l: 'Cheaper distributor CAC' }, { v: '3x', l: 'Inbound calls' }, { v: '90d', l: 'To first close' } ] },
      { href: '/case-studies/prochem', client: 'Prochem Turnkey Projects', industry: 'B2B · Engineering', challenge: 'Deep-expertise engineering house selling into industrial plants, a comparable long-cycle B2B category.', approach: 'Founder-led LinkedIn + long-form category content, the same playbook translates to pharma B2B.', outcome: 'Became the feed every plant head in India quietly follows. Inbound became the default.', metrics: [ { v: '13k+', l: 'Followers' }, { v: '128k', l: 'Impressions' }, { v: '0', l: 'Rupees on ads' } ] },
      { href: '/case-studies/profotech', client: 'Profotech', industry: 'B2B · Enterprise', challenge: 'Selling into enterprise buyers who scope by application and cite peer sources, much like pharma prescribing behavior.', approach: 'Positioned as the category\'s reference source with editorial content and enterprise-grade collateral.', outcome: 'Became the brand cited in RFPs and scoping calls.', metrics: [ { v: '5x', l: 'Organic pipeline' }, { v: '#1', l: 'Share of voice' }, { v: '40%', l: 'Cheaper qualified lead' } ] },
    ],
  },
  framework: {
    kicker: 'The Adcom Method · Pharma',
    title: 'A four-phase<br /><span class="text-white/40">pharma engine.</span>',
    subtitle: 'Every pharma engagement runs through the same regulated, compliant discipline.',
    phases: [
      { n: '01', tag: 'Phase 01', title: 'Diagnose', desc: 'Category audit, therapeutic focus review, distributor conversations, compliance baseline. The reality check.' },
      { n: '02', tag: 'Phase 02', title: 'Position', desc: 'Category thesis, franchise story, ICP, messaging architecture, compliance-vetted from day one.' },
      { n: '03', tag: 'Phase 03', title: 'Publish & Program', desc: 'Editorial content, distributor-focused campaigns, sales enablement, all shipping in parallel.' },
      { n: '04', tag: 'Phase 04', title: 'Compound', desc: 'Monthly distributor pipeline reviews, quarterly category refreshes, ongoing compliant publishing.' },
    ],
  },
  principles: {
    title: 'Pharma rewards <span class="text-[#F43F5E]">patience</span><br /><span class="text-white/40">and category clarity.</span>',
    subtitle: 'Three rules govern every pharma engagement we take on.',
    items: [
      { t: 'Compliance is a design constraint', d: 'Great pharma creative is what happens when compliance becomes part of the brief, not the veto.' },
      { t: 'Distributors are a market, not a channel', d: 'Franchise growth is a B2B category with its own psychology, treat it like one.' },
      { t: 'Category authority > ad spend', d: 'The brands that win pharma long-term win through category education, not campaigns.' },
    ],
  },
  testimonial: { quote: 'Adcom took the time to actually understand our category. That patience showed up in every asset, compliant, credible, and actually persuasive.', name: 'Dr. Rakesh Malhotra', role: 'MD, pharma manufacturer', avatar: 'https://i.pravatar.cc/120?img=51' },
  closing: { headlineHtml: 'Pharma marketing rewards <span class="text-white/40">the credible.</span><br /><span class="text-[#F43F5E]">Not the loudest.</span>', body: 'We open a small number of pharma engagements each year, for brands ready to build category authority the compliant way.' },
};

export default function IndustryPharma() { return <ServicePage data={data} />; }
