import React from 'react';
import { Search, MousePointer2, Target, BarChart3, Layers, Zap } from 'lucide-react';
import ServicePage from './ServicePage';

const data = {
  service: 'Google Ads',
  hero: {
    kicker: 'Service · Google Ads',
    headline: [
      { text: 'Buyers are' },
      { text: 'already searching.', italic: true },
      { text: 'Be the answer.', accent: true },
    ],
    sub: (
      <>
        Google Ads engagements engineered for high-intent capture, Search, Shopping,
        YouTube and Performance Max, run for incrementality, not vanity impressions.
      </>
    ),
  },
  reality: {
    headline:
      'Most Google Ads accounts leak <span class="text-white/40">not because of bids.</span><br />They leak because of <span class="text-[#F43F5E]">structure.</span>',
    body:
      'Poor account architecture, weak feeds, over-broad match and blind reliance on smart bidding hides where the money actually goes. We rebuild accounts from the search term up so every rupee has a job.',
  },
  pillars: {
    kicker: 'How we operate',
    title: 'Six disciplines.<br /><span class="text-white/40">One search engine.</span>',
    subtitle: 'A senior operator owns your account end to end, no juniors, no black boxes.',
    pillars: [
      { title: 'Account Architecture', desc: 'Campaigns, ad groups and match types rebuilt around buyer intent, not agency habit.', Icon: Layers },
      { title: 'Feed & Shopping', desc: 'Product data, titles and priority tiers optimised so Shopping does its own work.', Icon: Search },
      { title: 'Search Term Discipline', desc: 'A weekly negatives ritual that stops waste before it compounds.', Icon: Target },
      { title: 'Bid Strategy', desc: 'The right bid model per campaign, tROAS, Max Conversions, manual, chosen by data, not defaults.', Icon: MousePointer2 },
      { title: 'Creative & LP', desc: 'Ad copy, extensions and landing pages that actually improve Quality Score.', Icon: Zap },
      { title: 'Measurement', desc: 'Enhanced conversions, offline uploads and a model your CFO can defend.', Icon: BarChart3 },
    ],
  },
  stories: {
    title: 'Stories first.<br /><span class="text-white/40">Numbers second.</span>',
    subtitle: 'Recent Google Ads engagements. The playbook changes; the discipline does not.',
    stories: [
      { href: '/case-studies/aus-tyre', client: 'Australian Tyre Brand', industry: 'E-commerce · Automotive', challenge: '$6K a month of paid spend that wasn\'t paying. Thin margins, brutal competition, buyers searching by exact spec.', approach: 'Rebuilt Search + Shopping around feed quality and search-term hygiene, then layered PMax for coverage.', outcome: 'Blended ROAS climbed, spend held flat, paid became the most predictable channel in the business.', metrics: [ { v: '7.5x', l: 'Blended ROAS' }, { v: '150+', l: 'Attributable purchases' }, { v: '100x', l: 'Business growth' } ] },
      { href: '/case-studies/sharma-furniture', client: 'Sharma Furniture', industry: 'Furniture Retail', challenge: 'A local furniture house invisible on high-intent local searches customers were already making.', approach: 'Local search campaigns, LSA groundwork and Shopping for the online catalogue, layered on real GMB fundamentals.', outcome: 'Enquiries climbed and buyers now arrive already researching the brand before they walk into the showroom.', metrics: [ { v: '+26%', l: 'Qualified enquiries' }, { v: '18+', l: 'First-page rankings' }, { v: '100%', l: 'Local intent captured' } ] },
      { href: '/case-studies/prochem', client: 'Prochem Turnkey Projects', industry: 'B2B · Engineering', challenge: 'A twenty-year engineering house whose ideal buyer never saw them on the SERPs that mattered.', approach: 'Long-tail intent search paired with LinkedIn nurture, not a broad campaign, a scalpel.', outcome: 'Became the feed every plant head in India quietly follows, generating inbound no cold outreach could buy.', metrics: [ { v: '13k+', l: 'Followers' }, { v: '128k', l: 'Impressions' }, { v: '0', l: 'Rupees wasted' } ] },
    ],
  },
  framework: {
    kicker: 'The Adcom Method · Google Ads',
    title: 'A four-phase<br /><span class="text-white/40">search engine.</span>',
    subtitle: 'Every account runs through the same system, no cookie-cutter, no auto-pilot.',
    phases: [
      { n: '01', tag: 'Phase 01', title: 'Diagnose', desc: 'Search term audit, wasted-spend teardown, competitor Quality Score gaps, feed hygiene. The truth before the rebuild.' },
      { n: '02', tag: 'Phase 02', title: 'Rebuild', desc: 'Architecture, keywords, match types, negatives, feed, conversion tracking. New foundations.' },
      { n: '03', tag: 'Phase 03', title: 'Launch', desc: 'Campaigns go live under a controlled learning phase with hard guardrails on spend.' },
      { n: '04', tag: 'Phase 04', title: 'Compound', desc: 'Weekly negatives, monthly readouts, quarterly account reviews. The account that pays back.' },
    ],
  },
  principles: {
    title: 'Bids are a tactic.<br /><span class="text-white/40">Structure is a system.</span>',
    subtitle: 'Three rules run every Google Ads engagement we take on.',
    items: [
      { t: 'Intent over impressions', d: 'We measure paid buyers, not clicks. If a search doesn\'t signal buying intent, we don\'t bid on it.' },
      { t: 'Feed before firepower', d: 'A cleaned feed and a proper conversion signal outperform any bid strategy hack.' },
      { t: 'Negatives compound', d: 'Every wasted term you catch this week protects next month\'s ROAS.' },
    ],
  },
  testimonial: { quote: 'Adcom didn\'t just improve our Google Ads. They rebuilt how our team thinks about paid search, feed, negatives, structure, tracking. The account has run itself for a year.', name: 'Rahul Sethi', role: 'Head of Digital, national retailer', avatar: 'https://i.pravatar.cc/120?img=15' },
  closing: { headlineHtml: 'Search doesn\'t reward the loudest.<br /><span class="text-[#F43F5E]">It rewards the sharpest.</span>', body: 'We take a small number of Google Ads engagements each quarter, accounts where we can move the model, not just the CPC.' },
};

export default function GoogleAds() { return <ServicePage data={data} />; }
