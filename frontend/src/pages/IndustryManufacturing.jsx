import React from 'react';
import { Factory, Wrench, Compass, Users, FileText, Zap } from 'lucide-react';
import ServicePage from './ServicePage';

const data = {
  service: 'Manufacturing',
  hero: {
    kicker: 'Industry · Manufacturing',
    headline: [
      { text: 'Plant heads' },
      { text: "don't click ads.", italic: true },
      { text: 'They read.', accent: true },
    ],
    sub: (
      <>
        Digital growth for manufacturers, engineering companies and industrial B2B, LinkedIn-led
        thought leadership, category authority and long-form content that gets read by the people
        who actually sign off.
      </>
    ),
  },
  reality: {
    headline:
      'Industrial buyers evaluate <span class="text-white/40">for months.</span><br />You need to be <span class="text-[#F43F5E]">the feed they follow.</span>',
    body:
      'Cold outreach into manufacturing is expensive and low-yield. What actually works is being the source plant heads, procurement teams and engineers quietly read for six months before they raise a requisition. That\'s the surface we build.',
  },
  pillars: {
    kicker: 'How we operate',
    title: 'Six disciplines.<br /><span class="text-white/40">Built for manufacturing.</span>',
    subtitle: 'A senior operator with industrial-B2B experience owns every engagement.',
    pillars: [
      { title: 'Category Positioning', desc: 'A defensible thesis on your manufacturing capability, process, precision, service or scale.', Icon: Compass },
      { title: 'Founder-Led LinkedIn', desc: 'Editorial rhythms from your MD or plant head that plant heads elsewhere actually follow.', Icon: Users },
      { title: 'Technical Content', desc: 'Application notes, case studies and process pieces that respect the reader\'s expertise.', Icon: FileText },
      { title: 'SEO for Specification', desc: 'Ranking for long-tail spec-driven queries buyers make months before the enquiry.', Icon: Wrench },
      { title: 'Enterprise Nurture', desc: 'CRM, email and account-based programs stitched into sales, not sitting beside them.', Icon: Factory },
      { title: 'Ad Amplification', desc: 'LinkedIn thought-leader ads and search, used sparingly, always on top of an editorial engine.', Icon: Zap },
    ],
  },
  stories: {
    title: 'Stories first.<br /><span class="text-white/40">Numbers second.</span>',
    subtitle: 'Recent manufacturing and industrial engagements.',
    stories: [
      { href: '/case-studies/prochem', client: 'Prochem Turnkey Projects', industry: 'B2B · Engineering', challenge: 'A twenty-year engineering house with deep expertise and no digital presence in front of the buyers who mattered.', approach: 'Built a founder-led LinkedIn engine publishing category expertise that plant heads and procurement actually follow.', outcome: 'Became the feed every plant head in India quietly follows, generating inbound conversations no cold outreach could buy.', metrics: [ { v: '13k+', l: 'Followers (from 4k)' }, { v: '128k', l: 'Impressions · 12 mo' }, { v: '0', l: 'Rupees on ads' } ] },
      { href: '/case-studies/profotech', client: 'Profotech', industry: 'Enterprise Photography Equipment', challenge: 'Selling into enterprise buyers who research capability and reliability quietly across peer networks.', approach: 'Editorial authority + technical SEO + long-form storytelling, the exact stack industrial B2B needs.', outcome: 'Became the brand cited in RFPs and scoping calls.', metrics: [ { v: '5x', l: 'Organic pipeline' }, { v: '#1', l: 'Category share of voice' }, { v: '40%', l: 'Cheaper qualified lead' } ] },
      { href: '/case-studies/skylarr', client: 'Skylarr Labs', industry: 'PCD Pharma Franchise', challenge: 'A B2B category with quiet, months-long buyer evaluation, the same physics as industrial procurement.', approach: 'Category-education content built for the exact questions the buyer asks silently in month two of research.', outcome: 'Became the brand distributors mention first when franchise partners ask who to call.', metrics: [ { v: '40%', l: 'Cheaper CAC' }, { v: '3x', l: 'Inbound calls' }, { v: '90d', l: 'To first close' } ] },
    ],
  },
  framework: {
    kicker: 'The Adcom Method · Manufacturing',
    title: 'A four-phase<br /><span class="text-white/40">industrial engine.</span>',
    subtitle: 'Every manufacturing engagement runs on the same long-cycle, category-authority rhythm.',
    phases: [
      { n: '01', tag: 'Phase 01', title: 'Diagnose', desc: 'Plant-head interviews, category listening, competitor SoV teardown, technical asset audit.' },
      { n: '02', tag: 'Phase 02', title: 'Position', desc: 'Category thesis, capability story, ICP by industry vertical, editorial calendar.' },
      { n: '03', tag: 'Phase 03', title: 'Publish & Program', desc: 'Founder LinkedIn, long-form SEO, technical case studies, ABM programs, all in parallel.' },
      { n: '04', tag: 'Phase 04', title: 'Compound', desc: 'Monthly pipeline reads with sales, quarterly category refreshes. The engine that pays back.' },
    ],
  },
  principles: {
    title: 'Manufacturing rewards <span class="text-[#F43F5E]">substance.</span><br /><span class="text-white/40">Not slogans.</span>',
    subtitle: 'Three rules govern every manufacturing engagement.',
    items: [
      { t: 'Respect the reader\'s expertise', d: 'Plant heads know their category. Content that dumbs it down gets skipped.' },
      { t: 'Category authority > channel arbitrage', d: 'The compounding is in becoming the reference source, not in a clever bid strategy.' },
      { t: 'Sales sits inside marketing', d: 'Any manufacturing engagement disconnected from the sales team is theatre.' },
    ],
  },
  testimonial: { quote: 'Adcom didn\'t come with an ad plan. They came with a content plan built for how our buyers actually make decisions. That\'s why our pipeline stopped depending on cold outreach.', name: 'Suresh Nair', role: 'MD, industrial manufacturer', avatar: 'https://i.pravatar.cc/120?img=12' },
  closing: { headlineHtml: 'The best manufacturing brands<br /><span class="text-[#F43F5E]">are read before they\'re called.</span>', body: 'We open a small number of manufacturing engagements each year, for teams ready to build category authority the compounding way.' },
};

export default function IndustryManufacturing() { return <ServicePage data={data} />; }
