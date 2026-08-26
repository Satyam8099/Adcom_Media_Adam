import React from 'react';
import { Users, Sparkles, MessageCircle, Palette, Repeat, TrendingUp } from 'lucide-react';
import ServicePage from './ServicePage';

const data = {
  service: 'Social Media Marketing',
  hero: {
    kicker: 'Service · Social Media Marketing',
    headline: [
      { text: 'Social isn\'t' },
      { text: 'a content calendar.', italic: true },
      { text: 'It\'s a compounding asset.', accent: true },
    ],
    sub: (
      <>
        Editorial-led social for brands that want to be talked about, not just posted about —
        organic strategy, content systems and community, run like a newsroom, not a queue.
      </>
    ),
  },
  reality: {
    headline:
      'Most social calendars are <span class="text-white/40">posts about the brand.</span><br />Great social is <span class="text-[#F43F5E]">a point of view.</span>',
    body:
      'The brands winning on social right now have moved from posting to publishing. Consistent editorial voice, sharp opinion, real depth. That\'s the shift — and it\'s the one most agencies still refuse to make.',
  },
  pillars: {
    kicker: 'How we operate',
    title: 'Six disciplines.<br /><span class="text-white/40">One editorial voice.</span>',
    subtitle: 'A senior editor and a senior designer own every account — no junior schedulers.',
    pillars: [
      { title: 'Voice & Positioning', desc: 'A distinct editorial position on the category — the reason people follow you at all.', Icon: Sparkles },
      { title: 'Content Systems', desc: 'Recurring formats, series and rhythms that compound recognition post over post.', Icon: Repeat },
      { title: 'Design Language', desc: 'A visual system that\'s recognised in one scroll — no template packs, no stock overlays.', Icon: Palette },
      { title: 'Community & Reply', desc: 'DMs, comments, mentions — treated as pipeline, not chores. Response as content.', Icon: MessageCircle },
      { title: 'Audience Growth', desc: 'Follower quality over vanity, tracked to the segment that actually buys or hires.', Icon: Users },
      { title: 'Analytics & Iteration', desc: 'Monthly readouts that inform next month\'s editorial calendar — not last month\'s dashboard.', Icon: TrendingUp },
    ],
  },
  stories: {
    title: 'Stories first.<br /><span class="text-white/40">Numbers second.</span>',
    subtitle: 'Recent social engagements. Different platforms, one editorial-first model.',
    stories: [
      { href: '/case-studies/prochem', client: 'Prochem Turnkey Projects', industry: 'B2B · Engineering', challenge: 'A twenty-year engineering house whose ideal buyer never encountered the brand where they actually live: LinkedIn.', approach: 'Founder-led editorial rhythm publishing category depth plant heads and procurement actually follow.', outcome: 'Became the feed every plant head in India quietly follows. Zero paid, all compounding.', metrics: [ { v: '13k+', l: 'Followers (from 4k)' }, { v: '128k', l: 'Impressions · 12 mo' }, { v: '0', l: 'Rupees on ads' } ] },
      { href: '/case-studies/skylarr', client: 'Skylarr Labs', industry: 'PCD Pharma Franchise', challenge: 'Distributors research quietly for months before the first call and Skylarr owned none of that surface.', approach: 'Category-education content across LinkedIn and Meta, tuned to the questions distributors actually ask.', outcome: 'Became the brand distributors mention first when franchise partners ask who they should call.', metrics: [ { v: '40%', l: 'Cheaper CAC' }, { v: '3x', l: 'Inbound calls' }, { v: '90d', l: 'To first close' } ] },
      { href: '/case-studies/sharma-furniture', client: 'Sharma Furniture', industry: 'Furniture Retail', challenge: 'A local furniture house with no consistent social presence and no way to be shortlisted online.', approach: 'A design-forward editorial voice that treats furniture as story — homes, craftsmanship, moments — not catalog.', outcome: 'Buyers now walk in already trusting the brand — social became the shortlist channel.', metrics: [ { v: '+26%', l: 'Qualified enquiries' }, { v: '18+', l: 'First-page rankings' }, { v: '100%', l: 'Local intent captured' } ] },
    ],
  },
  framework: {
    kicker: 'The Adcom Method · Social',
    title: 'A four-phase<br /><span class="text-white/40">editorial engine.</span>',
    subtitle: 'Every social engagement runs on the same newsroom rhythm.',
    phases: [
      { n: '01', tag: 'Phase 01', title: 'Diagnose', desc: 'Audience listening, competitor teardown, voice audit, format inventory. The truth before the calendar.' },
      { n: '02', tag: 'Phase 02', title: 'Position', desc: 'A single editorial position for the account — the reason someone would follow at all.' },
      { n: '03', tag: 'Phase 03', title: 'Publish', desc: 'Weekly editorial cadence with named formats, recurring series and a real backlog.' },
      { n: '04', tag: 'Phase 04', title: 'Compound', desc: 'Monthly reads inform next month. Formats that work get more room. The rest get killed.' },
    ],
  },
  principles: {
    title: 'Content <span class="text-white/40">isn\'t a calendar.</span><br />It\'s an <span class="text-[#F43F5E]">operating rhythm.</span>',
    subtitle: 'Three rules govern every social engagement.',
    items: [
      { t: 'Have an opinion', d: 'A feed with no point of view is a feed nobody remembers. Editorial position first, always.' },
      { t: 'Repeat, don\'t repost', d: 'Recurring formats compound recognition. Randomised feeds don\'t.' },
      { t: 'Reply is content', d: 'How a brand responds to a comment tells the audience more than the post did.' },
    ],
  },
  testimonial: { quote: 'We stopped asking Adcom for posts. We started asking them for angles. That reframe changed our entire social output — and our inbound.', name: 'Anjali Rao', role: 'Head of Marketing, category brand', avatar: 'https://i.pravatar.cc/120?img=32' },
  closing: { headlineHtml: 'Social rewards <span class="text-[#F43F5E]">consistency.</span><br /><span class="text-white/40">And a distinct voice.</span>', body: 'We take a small number of social engagements each quarter — for brands willing to publish, not just post.' },
};

export default function SocialMediaMarketing() { return <ServicePage data={data} />; }
