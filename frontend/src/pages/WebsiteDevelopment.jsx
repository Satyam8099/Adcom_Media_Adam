import React from 'react';
import { Code2, Layout, Rocket, Zap, ShieldCheck, MousePointer2 } from 'lucide-react';
import ServicePage from './ServicePage';

const data = {
  service: 'Website Development',
  hero: {
    kicker: 'Service · Website Development',
    headline: [
      { text: 'A website is' },
      { text: 'not a brochure.', italic: true },
      { text: 'It\'s the product.', accent: true },
    ],
    sub: (
      <>
        Websites engineered as the highest-leverage surface your brand owns, design, build, performance
        and conversion, for teams that treat their site as a compounding asset, not a marketing chore.
      </>
    ),
  },
  reality: {
    headline:
      'A brand\'s website is the <span class="text-white/40">most-visited surface</span><br />and usually the <span class="text-[#F43F5E]">worst-run one.</span>',
    body:
      'Templated builds, plugin sprawl, page-speed catastrophes, lifeless copy. Yet the site is the one place every ad, every social post, every referral eventually lands. We build sites where every element earns its place.',
  },
  pillars: {
    kicker: 'How we operate',
    title: 'Six disciplines.<br /><span class="text-white/40">One production website.</span>',
    subtitle: 'Design, engineering and copy run as one team, never handoffs.',
    pillars: [
      { title: 'Strategy & IA', desc: 'Sitemap, information architecture and navigation designed around real user journeys, not org charts.', Icon: Layout },
      { title: 'Editorial Copy', desc: 'Copy that says something, written by people who could publish a magazine, not just a landing page.', Icon: MousePointer2 },
      { title: 'Design System', desc: 'A cohesive visual system built as a design language, not a Figma export.', Icon: Layout },
      { title: 'Engineering', desc: 'React, Next, headless CMS, production-grade code, tested, versioned, deployable.', Icon: Code2 },
      { title: 'Performance', desc: 'Sub-second first paint, honest Core Web Vitals, no ‘we\'ll optimise later’.', Icon: Zap },
      { title: 'Conversion', desc: 'CTAs, forms, checkouts and micro-copy tuned by real behaviour, not vibes.', Icon: Rocket },
    ],
  },
  stories: {
    title: 'Stories first.<br /><span class="text-white/40">Numbers second.</span>',
    subtitle: 'Recent website engagements. Different categories, one production standard.',
    stories: [
      { href: '/case-studies/sharma-furniture', client: 'Sharma Furniture', industry: 'Furniture Retail', challenge: 'A local retailer with a legacy website that hid the craftsmanship the showroom was known for.', approach: 'Rebuilt the site as a story, homes, materials, showrooms, not a catalog. Fast, editorial, local.', outcome: 'Buyers now shortlist the brand before they visit, the site became the entry point, not the afterthought.', metrics: [ { v: '+26%', l: 'Qualified enquiries' }, { v: '<1s', l: 'First paint' }, { v: '100%', l: 'CWV pass' } ] },
      { href: '/case-studies/aus-tyre', client: 'Australian Tyre Brand', industry: 'E-commerce · Automotive', challenge: 'A tyre e-commerce site where every step of the funnel leaked. Add-to-cart to purchase was single digits.', approach: 'Rebuilt product templates, size selectors, cart flows and speed, every element pulled its weight.', outcome: 'Conversion rate lifted, ROAS followed. Site became the moat, not the bottleneck.', metrics: [ { v: '7.5x', l: 'Blended ROAS' }, { v: '150+', l: 'Attributable purchases' }, { v: '100x', l: 'Business growth' } ] },
      { href: '/case-studies/profotech', client: 'Profotech', industry: 'Photography Equipment', challenge: 'A niche B2B site with the wrong information architecture for buyers who scope by use-case, not SKU.', approach: 'Rebuilt IA around applications, layered gear science content, integrated a proper enquiry funnel.', outcome: 'Enquiries climbed, and the site became the reference source enterprise buyers cite in RFPs.', metrics: [ { v: '5x', l: 'Organic traffic' }, { v: '#1', l: 'For category terms' }, { v: '40%', l: 'Cheaper qualified lead' } ] },
    ],
  },
  framework: {
    kicker: 'The Adcom Method · Web',
    title: 'A four-phase<br /><span class="text-white/40">production system.</span>',
    subtitle: 'Every website engagement ships on a real timeline, no ‘phase two’ vaporware.',
    phases: [
      { n: '01', tag: 'Phase 01', title: 'Diagnose', desc: 'Analytics, heatmaps, funnel audit, page-speed teardown, content gaps. The unvarnished baseline.' },
      { n: '02', tag: 'Phase 02', title: 'Design', desc: 'IA, wireframes, design system, editorial copy, a build-ready blueprint, not a mood board.' },
      { n: '03', tag: 'Phase 03', title: 'Build', desc: 'Engineered in React/Next with a headless CMS your team can operate. Tested, staged, versioned.' },
      { n: '04', tag: 'Phase 04', title: 'Optimise', desc: 'Monthly CRO cycles, monthly speed audits, content additions. The site that compounds.' },
    ],
  },
  principles: {
    title: 'A site is <span class="text-[#F43F5E]">infrastructure.</span><br /><span class="text-white/40">Treat it like one.</span>',
    subtitle: 'Three rules run every website engagement.',
    items: [
      { t: 'Copy is design', d: 'The words carry more weight than any visual. If the copy is generic, the design is decoration.' },
      { t: 'Performance is UX', d: 'A slow page is a hostile page. Speed is the first design principle, not the last.' },
      { t: 'Ownership over lock-in', d: 'Your team should be able to run the site without us. Anything less is a captive contract.' },
    ],
  },
  testimonial: { quote: 'Adcom rebuilt our site in eight weeks. Two years later it\'s still the fastest, sharpest surface in the category. We haven\'t needed a redesign.', name: 'Neel Kapadia', role: 'Founder, category brand', avatar: 'https://i.pravatar.cc/120?img=22' },
  closing: { headlineHtml: 'The best websites <span class="text-white/40">don\'t age.</span><br /><span class="text-[#F43F5E]">They compound.</span>', body: 'We take a small number of website engagements each quarter, for teams that treat their site as the product, not the afterthought.' },
};

export default function WebsiteDevelopment() { return <ServicePage data={data} />; }
