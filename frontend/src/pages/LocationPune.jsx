import React from 'react';
import { MapPin, Users, Coffee, Sparkles, Building2, TrendingUp } from 'lucide-react';
import ServicePage from './ServicePage';

const data = {
  service: 'Pune',
  hero: {
    kicker: 'Location · Pune',
    headline: [
      { text: 'Built in Pune.' },
      { text: 'Operating for founders', italic: true },
      { text: 'from Kalyani Nagar to Kothrud.', accent: true },
    ],
    sub: (
      <>
        A senior growth studio headquartered in Pune, working with founders and marketing leaders
        across the city, the country and further, brand, growth, performance and AI, run under one roof.
      </>
    ),
  },
  reality: {
    headline:
      'Pune is quietly building <span class="text-white/40">India\'s next generation</span><br />of <span class="text-[#F43F5E]">category-defining brands.</span>',
    body:
      'From D2C to industrial B2B to pharma, some of India\'s most ambitious operators are running out of Pune. We built Adcom here because being close to founders, literally in the same city, makes the work sharper. And because the Pune founder ecosystem deserves an agency built for it.',
  },
  pillars: {
    kicker: 'How we operate in Pune',
    title: 'Six ways we work<br /><span class="text-white/40">with Pune brands.</span>',
    subtitle: 'On-site strategy, deep-work weeks, and always-on operating rhythm, for teams within a coffee walk.',
    pillars: [
      { title: 'On-site Strategy Sprints', desc: 'Full-day working sessions at your office or ours, nothing replaces being in the same room.', Icon: MapPin },
      { title: 'Founder-Led Access', desc: 'Direct access to a partner on every engagement. No account manager layers.', Icon: Users },
      { title: 'Deep-Work Weeks', desc: 'Quarterly deep-work weeks where our team parachutes into yours to ship something meaningful.', Icon: Coffee },
      { title: 'Category-Native Work', desc: 'From furniture to pharma to engineering, we know Pune\'s dominant categories intimately.', Icon: Sparkles },
      { title: 'Local + National Reach', desc: 'Local search and community programs plus national brand and demand, from the same team.', Icon: Building2 },
      { title: 'Founder Community', desc: 'Curated introductions across the Pune founder network when they can move your business forward.', Icon: TrendingUp },
    ],
  },
  stories: {
    title: 'Pune stories first.<br /><span class="text-white/40">National reach second.</span>',
    subtitle: 'A selection of engagements. Not all in Pune, all with founders we work with closely.',
    stories: [
      { href: '/case-studies/sharma-furniture', client: 'Sharma Furniture', industry: 'Furniture Retail', challenge: 'A trusted local furniture house that was invisible online, chosen in-store but never found before the visit.', approach: 'Rebuilt local discovery, search visibility and the on-site experience so customers arrive already trusting the brand.', outcome: 'Qualified enquiries climbed and the brand now gets discovered, trusted and shortlisted weeks before a customer walks in.', metrics: [ { v: '+26%', l: 'Qualified enquiries' }, { v: '18+', l: 'First-page rankings' }, { v: '100%', l: 'Local intent captured' } ] },
      { href: '/case-studies/prochem', client: 'Prochem Turnkey Projects', industry: 'B2B · Engineering', challenge: 'A twenty-year engineering house with deep expertise and no digital presence in front of the buyers who mattered.', approach: 'Built a founder-led LinkedIn engine publishing category expertise that plant heads and procurement actually follow.', outcome: 'Became the feed every plant head in India quietly follows, generating inbound conversations no cold outreach could buy.', metrics: [ { v: '13k+', l: 'Followers' }, { v: '128k', l: 'Impressions' }, { v: '0', l: 'Rupees on ads' } ] },
      { href: '/case-studies/skylarr', client: 'Skylarr Labs', industry: 'PCD Pharma Franchise', challenge: 'Distributors research franchise partners quietly for weeks before the first call.', approach: 'Category-education content across LinkedIn and Meta, tuned to the questions distributors actually ask.', outcome: 'Became the brand distributors mention first when franchise partners ask who they should call.', metrics: [ { v: '40%', l: 'Cheaper CAC' }, { v: '3x', l: 'Inbound calls' }, { v: '90d', l: 'To first close' } ] },
    ],
  },
  framework: {
    kicker: 'How we work with Pune brands',
    title: 'A four-phase<br /><span class="text-white/40">engagement rhythm.</span>',
    subtitle: 'Every Pune engagement runs the same in-person, on-brand operating cadence.',
    phases: [
      { n: '01', tag: 'Phase 01', title: 'Meet', desc: 'A working session at your office or ours. Nothing gets scoped until we\'ve looked each other in the eye.' },
      { n: '02', tag: 'Phase 02', title: 'Diagnose', desc: 'A two-week strategic diagnostic, brand, growth, positioning, category, unit economics. The truth first.' },
      { n: '03', tag: 'Phase 03', title: 'Build', desc: 'Weekly rhythm with a fortnightly on-site working day. Real work, delivered in the room.' },
      { n: '04', tag: 'Phase 04', title: 'Compound', desc: 'Monthly business reviews, quarterly deep-work weeks. The kind of relationship that outlasts a retainer.' },
    ],
  },
  principles: {
    title: 'Proximity is <span class="text-[#F43F5E]">a design principle.</span><br /><span class="text-white/40">Not a nice-to-have.</span>',
    subtitle: 'Three rules govern how we work with Pune brands.',
    items: [
      { t: 'In-person beats async', d: 'Some things are decided in a room. We make sure the room happens.' },
      { t: 'Category knowledge compounds', d: 'The reason we know furniture, pharma, engineering, D2C, because Pune founders taught us.' },
      { t: 'Small circle, deep work', d: 'We take a limited number of Pune engagements each quarter. Depth over volume, always.' },
    ],
  },
  testimonial: { quote: 'The best decision we made was choosing an agency in the same city. Adcom sits in every serious meeting. That\'s the difference between an agency and a partner.', name: 'Aditya Kulkarni', role: 'Founder, Pune D2C brand', avatar: 'https://i.pravatar.cc/120?img=33' },
  closing: { headlineHtml: 'Built in Pune.<br /><span class="text-[#F43F5E]">Made for founders who ship.</span>', body: 'If you are building something serious in Pune, or from Pune, let\'s share a coffee.' },
};

export default function LocationPune() { return <ServicePage data={data} />; }
