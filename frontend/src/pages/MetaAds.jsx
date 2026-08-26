import React from 'react';
import { Sparkles, Palette, Video, Users, RefreshCw, LineChart } from 'lucide-react';
import ServicePage from './ServicePage';

const data = {
  service: 'Meta Ads',
  hero: {
    kicker: 'Service · Meta Ads',
    headline: [
      { text: 'Attention is' },
      { text: "the actual auction.", italic: true },
      { text: "Creative wins it.", accent: true },
    ],
    sub: (
      <>
        Meta Ads engagements built around creative iteration, audience discovery and honest
        incrementality — for brands that treat feed placement like a growth asset, not a slot machine.
      </>
    ),
  },
  reality: {
    headline:
      'Most Meta accounts don\'t have <span class="text-white/40">a targeting problem.</span><br />They have a <span class="text-[#F43F5E]">creative problem.</span>',
    body:
      'Advantage+ has quietly commoditised audiences. What separates a 1x ROAS from a 4x now is concept quality, message-market fit and how quickly you can replace a fatiguing hook. We built our Meta practice around that reality.',
  },
  pillars: {
    kicker: 'How we operate',
    title: 'Six disciplines.<br /><span class="text-white/40">One creative machine.</span>',
    subtitle: 'A senior media buyer and a senior creative operator on every account — never a delivery-team handoff.',
    pillars: [
      { title: 'Concept Development', desc: 'Hooks, angles and stories rooted in real customer language — not swiped from ad libraries.', Icon: Sparkles },
      { title: 'Creative Production', desc: 'Modular UGC, motion and static built to be tested, evolved and refreshed weekly.', Icon: Palette },
      { title: 'Video-First Assets', desc: 'Reels, in-feed and Stories built for the surface they run on — not landscape retrofits.', Icon: Video },
      { title: 'Audience Discovery', desc: 'Broad, interest and lookalike layered intelligently — Advantage+ with a plan behind it.', Icon: Users },
      { title: 'Creative Refresh Cadence', desc: 'A weekly kill/scale rhythm that stops fatigue before it kills your account.', Icon: RefreshCw },
      { title: 'Incrementality', desc: 'Holdouts, geo tests and MMM triangulation. We measure what Meta actually adds.', Icon: LineChart },
    ],
  },
  stories: {
    title: 'Stories first.<br /><span class="text-white/40">Numbers second.</span>',
    subtitle: 'Recent Meta engagements. Different categories, one creative-first operating model.',
    stories: [
      { href: '/case-studies/aus-tyre', client: 'Australian Tyre Brand', industry: 'E-commerce · Automotive', challenge: 'Meta was thin, spend was breaking even and creative was rotating out weekly with no replacement.', approach: 'Rebuilt the creative concept pipeline — UGC-first, hook-tested, refreshed weekly against a real backlog.', outcome: 'Blended ROAS lifted, creative fatigue stopped compounding and Meta became a repeatable acquisition surface.', metrics: [ { v: '7.5x', l: 'Blended ROAS' }, { v: '150+', l: 'Attributable purchases' }, { v: '100x', l: 'Business growth' } ] },
      { href: '/case-studies/skylarr', client: 'Skylarr Labs', industry: 'PCD Pharma Franchise', challenge: 'A quiet category where distributors research for weeks before the first call — and no one owned that surface.', approach: 'Category-education creative on Meta paired with LinkedIn nurture — a full-funnel content system.', outcome: 'Became the brand distributors mention first when franchise partners ask who they should call.', metrics: [ { v: '40%', l: 'Cheaper distributor CAC' }, { v: '3x', l: 'Inbound calls' }, { v: '90d', l: 'To first close' } ] },
      { href: '/case-studies/sharma-furniture', client: 'Sharma Furniture', industry: 'Furniture Retail', challenge: 'A local furniture house that customers only found in-store — never before the visit.', approach: 'Story-led local Meta campaigns paired with search and GMB. Feed placement met the shortlist stage.', outcome: 'Buyers now walk in already trusting the brand — Meta became the shortlist channel.', metrics: [ { v: '+26%', l: 'Qualified enquiries' }, { v: '18+', l: 'First-page rankings' }, { v: '100%', l: 'Local intent captured' } ] },
    ],
  },
  framework: {
    kicker: 'The Adcom Method · Meta',
    title: 'A four-phase<br /><span class="text-white/40">creative engine.</span>',
    subtitle: 'Every Meta engagement runs the same operating rhythm — no waiting for quarterly reviews.',
    phases: [
      { n: '01', tag: 'Phase 01', title: 'Diagnose', desc: 'Creative teardown, account structure audit, incrementality baseline and category listening. The reality check.' },
      { n: '02', tag: 'Phase 02', title: 'Concept', desc: 'Hooks, angles and message-market fit briefs, informed by real customer conversations, not focus groups.' },
      { n: '03', tag: 'Phase 03', title: 'Launch & Learn', desc: 'A structured creative test matrix — enough concepts, enough spend, honest readouts.' },
      { n: '04', tag: 'Phase 04', title: 'Compound', desc: 'Winning concepts get iterated aggressively. Fatiguing ones die fast. The creative bench never runs dry.' },
    ],
  },
  principles: {
    title: 'Meta rewards <span class="text-white/40">iteration.</span><br />We built our practice for it.',
    subtitle: 'Three principles run every Meta engagement.',
    items: [
      { t: 'One concept per test', d: 'You can\'t learn if every ad set changes three variables at once. Isolation matters.' },
      { t: 'Kill early, scale hard', d: 'A weak concept doesn\'t deserve two weeks. A working one deserves a full backlog behind it.' },
      { t: 'Incrementality over attribution', d: 'Meta\'s reporting is generous. Holdouts and geo tests keep us honest.' },
    ],
  },
  testimonial: { quote: 'We\'ve worked with three agencies on Meta. Adcom is the only one that treated creative as an operating problem, not a monthly deliverable. That shift changed the account.', name: 'Priya Menon', role: 'Founder, DTC brand', avatar: 'https://i.pravatar.cc/120?img=47' },
  closing: { headlineHtml: 'Feed placement <span class="text-white/40">isn\'t a channel.</span><br /><span class="text-[#F43F5E]">It\'s a discipline.</span>', body: 'We take a small number of Meta engagements each quarter — accounts where creative iteration can actually be run at pace.' },
};

export default function MetaAds() { return <ServicePage data={data} />; }
