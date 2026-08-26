import React from 'react';
import { UserCheck, MessagesSquare, TrendingUp, Compass, Users, Zap } from 'lucide-react';
import ServicePage from './ServicePage';

const data = {
  service: 'LinkedIn Marketing',
  hero: {
    kicker: 'Service · LinkedIn Marketing',
    headline: [
      { text: 'Your buyer' },
      { text: 'is already here.', italic: true },
      { text: 'Be worth following.', accent: true },
    ],
    sub: (
      <>
        Founder-led and brand-led LinkedIn engagements built on editorial depth, category authority
        and honest thought leadership — for B2B teams that would rather be the answer than the ad.
      </>
    ),
  },
  reality: {
    headline:
      'Most B2B LinkedIn is <span class="text-white/40">tone-deaf.</span><br />The winning brands sound <span class="text-[#F43F5E]">human.</span>',
    body:
      'The LinkedIn feed rewards specificity, expertise and honesty. Corporate templates, motivational quotes and ghostwritten fluff sink. We help operators, founders and brands sound like themselves — at the level their category respects.',
  },
  pillars: {
    kicker: 'How we operate',
    title: 'Six disciplines.<br /><span class="text-white/40">One authority engine.</span>',
    subtitle: 'A senior strategist and a senior editor pair with your operators — no ghost-mill.',
    pillars: [
      { title: 'Voice Development', desc: 'The founder\'s or brand\'s actual voice on the page — sharpened, structured, ready to publish.', Icon: UserCheck },
      { title: 'Editorial Rhythm', desc: 'A weekly cadence of long-form posts, carousels and thought pieces built around one category thesis.', Icon: Compass },
      { title: 'Category Positioning', desc: 'A defensible point of view that separates you from every other founder posting about growth.', Icon: TrendingUp },
      { title: 'Comment & Reply', desc: 'Comments as content. Real conversations under other creators\' posts, not automation.', Icon: MessagesSquare },
      { title: 'Community Building', desc: 'The right kind of follower — buyers, peers, hires — not vanity growth.', Icon: Users },
      { title: 'Ad Amplification', desc: 'Thought-leader ads and CTR-tested boosted posts, layered only where they multiply reach.', Icon: Zap },
    ],
  },
  stories: {
    title: 'Stories first.<br /><span class="text-white/40">Numbers second.</span>',
    subtitle: 'Recent LinkedIn engagements. Different founders, one editorial standard.',
    stories: [
      { href: '/case-studies/prochem', client: 'Prochem Turnkey Projects', industry: 'B2B · Engineering', challenge: 'A twenty-year engineering house with deep expertise and no digital presence in front of the buyers who mattered.', approach: 'Built a founder-led LinkedIn engine publishing category expertise that plant heads and procurement actually follow.', outcome: 'Became the feed every plant head in India quietly follows, generating inbound conversations no cold outreach could buy.', metrics: [ { v: '13k+', l: 'Followers (from 4k)' }, { v: '128k', l: 'Impressions · 12 mo' }, { v: '0', l: 'Rupees on ads' } ] },
      { href: '/case-studies/profotech', client: 'Profotech', industry: 'Photography Equipment', challenge: 'A niche B2B category with high-consideration enterprise buyers who rely on peer signals.', approach: 'Founder-led LinkedIn pieces on gear science, use-cases, and category economics, sharpened weekly.', outcome: 'Became the reference source enterprise buyers cite in scoping conversations.', metrics: [ { v: '5x', l: 'Organic pipeline' }, { v: '#1', l: 'Category share of voice' }, { v: '40%', l: 'Cheaper qualified lead' } ] },
      { href: '/case-studies/skylarr', client: 'Skylarr Labs', industry: 'PCD Pharma Franchise', challenge: 'Distributors research franchise partners quietly for weeks — LinkedIn is where that research quietly happens.', approach: 'A category-education editorial calendar published weekly by the founder — franchise selection made transparent.', outcome: 'Became the brand distributors mention first when franchise partners ask who they should call.', metrics: [ { v: '40%', l: 'Cheaper CAC' }, { v: '3x', l: 'Inbound calls' }, { v: '90d', l: 'To first close' } ] },
    ],
  },
  framework: {
    kicker: 'The Adcom Method · LinkedIn',
    title: 'A four-phase<br /><span class="text-white/40">authority engine.</span>',
    subtitle: 'Every LinkedIn engagement runs on the same weekly rhythm — no ghost-content queue.',
    phases: [
      { n: '01', tag: 'Phase 01', title: 'Diagnose', desc: 'Founder interviews, category listening, competitor teardown. What can only you say that\'s worth saying.' },
      { n: '02', tag: 'Phase 02', title: 'Position', desc: 'One thesis, one voice, one editorial arc for the quarter — with a real content backlog behind it.' },
      { n: '03', tag: 'Phase 03', title: 'Publish', desc: 'Weekly long-form pieces, comment strategy, community rhythm. Every post shipped with intent.' },
      { n: '04', tag: 'Phase 04', title: 'Compound', desc: 'Monthly readouts against inbound and pipeline — not vanity metrics. The feed that pays back.' },
    ],
  },
  principles: {
    title: 'The feed rewards <span class="text-[#F43F5E]">specificity.</span><br /><span class="text-white/40">Not motivation.</span>',
    subtitle: 'Three rules run every LinkedIn engagement.',
    items: [
      { t: 'Founders don\'t need ghostwriters. They need editors.', d: 'The best posts come out of a founder\'s head, not a copy-paste template.' },
      { t: 'One thesis, not ten hot takes', d: 'A quarter of consistent point of view outperforms a year of scattered posting.' },
      { t: 'Comments are compounding', d: 'The best LinkedIn accounts spend more time in other people\'s comments than in their own posts.' },
    ],
  },
  testimonial: { quote: 'Adcom didn\'t hand us ghost-written posts. They gave us a system to think in public — clearly, weekly. That changed our inbound and, honestly, our hiring.', name: 'Kunal Deshmukh', role: 'Founder, B2B category', avatar: 'https://i.pravatar.cc/120?img=8' },
  closing: { headlineHtml: 'The best LinkedIn feed <span class="text-white/40">isn\'t written.</span><br /><span class="text-[#F43F5E]">It\'s edited.</span>', body: 'We open a small number of LinkedIn engagements each quarter — for founders and brands willing to think in public.' },
};

export default function LinkedInMarketing() { return <ServicePage data={data} />; }
