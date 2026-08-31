import React from 'react';
import { ShoppingBag, LineChart, RefreshCw, Rocket, Package, MousePointer2 } from 'lucide-react';
import ServicePage from './ServicePage';

const data = {
  service: 'E-commerce',
  hero: {
    kicker: 'Industry · E-commerce',
    headline: [
      { text: 'E-commerce is' },
      { text: 'a compounding game.', italic: true },
      { text: 'Play the model.', accent: true },
    ],
    sub: (
      <>
        Full-funnel growth for D2C brands and online retailers, acquisition, retention, creative,
        performance and CRO, operated as one system, not as a stack of specialist retainers.
      </>
    ),
  },
  reality: {
    headline:
      'Most e-commerce brands optimise <span class="text-white/40">acquisition in isolation.</span><br />The winners <span class="text-[#F43F5E]">operate the whole model.</span>',
    body:
      'CAC isn\'t a marketing metric, it\'s a business one. Great e-commerce operators run acquisition, retention, creative, price and inventory as one operating model. That\'s how they compound. That\'s the game we play.',
  },
  pillars: {
    kicker: 'How we operate',
    title: 'Six disciplines.<br /><span class="text-white/40">One D2C engine.</span>',
    subtitle: 'A senior D2C operator runs the whole model, acquisition, retention, creative, CRO.',
    pillars: [
      { title: 'Paid Acquisition', desc: 'Meta, Google and emerging surfaces, run for incrementality, not ROAS theatre.', Icon: Rocket },
      { title: 'Creative Engine', desc: 'A weekly hook-test rhythm and a refresh cadence that stops fatigue killing the account.', Icon: MousePointer2 },
      { title: 'Lifecycle & Retention', desc: 'Email, SMS, WhatsApp, loyalty, turning first purchases into a compounding LTV curve.', Icon: RefreshCw },
      { title: 'CRO & Funnel', desc: 'PDP, cart, checkout and post-purchase optimised by real behaviour, not vibes.', Icon: LineChart },
      { title: 'Catalogue & Feed', desc: 'Product data hygiene, Shopping and PMax optimisation, dynamic creative.', Icon: Package },
      { title: 'Brand & Content', desc: 'Editorial storytelling that makes the brand worth choosing at any price.', Icon: ShoppingBag },
    ],
  },
  stories: {
    title: 'Stories first.<br /><span class="text-white/40">Numbers second.</span>',
    subtitle: 'Recent e-commerce engagements.',
    stories: [
      { href: '/case-studies/aus-tyre', client: 'Australian Tyre Brand', industry: 'E-commerce · Automotive', challenge: '$6K a month of paid spend that wasn\'t paying. Thin margins, brutal competition, buyers searching by exact spec.', approach: 'Rebuilt acquisition around feed quality and intent, restructured Search and Shopping, rebuilt the funnel end-to-end.', outcome: 'Spend held flat while everything compounded. Paid became the most predictable source of new customers.', metrics: [ { v: '7.5x', l: 'Blended ROAS' }, { v: '100x', l: 'Business growth' }, { v: '150+', l: 'Attributable purchases' } ] },
      { href: '/case-studies/sharma-furniture', client: 'Sharma Furniture', industry: 'Furniture · Local + Online', challenge: 'A traditional local furniture house extending into online, with no e-commerce operating model.', approach: 'Rebuilt local discovery + on-site experience + shortlist-stage marketing to bridge the local-to-online gap.', outcome: 'Qualified enquiries climbed and the brand now gets discovered, trusted and shortlisted online first.', metrics: [ { v: '+26%', l: 'Qualified enquiries' }, { v: '18+', l: 'First-page rankings' }, { v: '100%', l: 'Local intent captured' } ] },
      { href: '/case-studies/skylarr', client: 'Skylarr Labs', industry: 'B2B distribution', challenge: 'A B2B category where lead quality mattered more than volume, the same discipline great e-commerce needs.', approach: 'Category-education content paired with a nurture-first funnel, the exact stack that lifts D2C LTV too.', outcome: 'Became the brand distributors mention first when franchise partners ask who they should call.', metrics: [ { v: '40%', l: 'Cheaper CAC' }, { v: '3x', l: 'Inbound calls' }, { v: '90d', l: 'To first close' } ] },
    ],
  },
  framework: {
    kicker: 'The Adcom Method · E-commerce',
    title: 'A four-phase<br /><span class="text-white/40">D2C engine.</span>',
    subtitle: 'Every e-commerce engagement runs the same weekly rhythm, no quarterly review theatre.',
    phases: [
      { n: '01', tag: 'Phase 01', title: 'Diagnose', desc: 'Unit economics teardown, creative audit, funnel analytics, lifecycle mapping. The unforgiving baseline.' },
      { n: '02', tag: 'Phase 02', title: 'Design', desc: 'Growth model, creative brief, lifecycle architecture, CRO priority list, a build-ready plan.' },
      { n: '03', tag: 'Phase 03', title: 'Build & Launch', desc: 'Campaigns, flows, PDP work, creative production, shipped in weeks, not quarters.' },
      { n: '04', tag: 'Phase 04', title: 'Compound', desc: 'Weekly experimentation, monthly business reviews, quarterly model updates. The compounding engine.' },
    ],
  },
  principles: {
    title: 'CAC is a <span class="text-[#F43F5E]">business metric</span><br /><span class="text-white/40">not a marketing one.</span>',
    subtitle: 'Three rules govern every e-commerce engagement.',
    items: [
      { t: 'Model before money', d: 'No budget moves until we can explain, in your numbers, why it will compound.' },
      { t: 'LTV is created before the ad clicks', d: 'The brand, the product, the post-purchase, those create LTV. Media just harvests it.' },
      { t: 'Weekly iteration or die', d: 'E-commerce reward cadence. Monthly cycles are a growth ceiling in disguise.' },
    ],
  },
  testimonial: { quote: 'We stopped thinking about paid, retention and creative as separate lines. Adcom made them one operating model. That\'s the shift that unlocked our next stage.', name: 'Kavya Iyer', role: 'Founder, D2C brand', avatar: 'https://i.pravatar.cc/120?img=42' },
  closing: { headlineHtml: 'E-commerce doesn\'t reward <span class="text-white/40">the biggest budgets.</span><br /><span class="text-[#F43F5E]">It rewards the tightest models.</span>', body: 'We take a small number of D2C engagements each quarter, for brands where the operating model can actually be run at pace.' },
};

export default function IndustryEcommerce() { return <ServicePage data={data} />; }
