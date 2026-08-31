import React from 'react';
import { Box, Video, Layers, Compass, ScanLine, Zap } from 'lucide-react';
import ServicePage from './ServicePage';

const data = {
  service: 'Industrial 3D & Digital Showroom',
  hero: {
    kicker: 'Service · Industrial 3D · Digital Showroom',
    headline: [
      { text: 'Your product,' },
      { text: 'seen before shipped.', italic: true },
      { text: 'Sold before quoted.', accent: true },
    ],
    sub: (
      <>
        3D models from your GA drawings, cinematic workflow animation videos, and a
        branded Digital Showroom that lets prospects explore, spec and enquire on any
        product, from anywhere. Built exclusively for industrial and manufacturing brands.
      </>
    ),
  },
  reality: {
    headline:
      'A datasheet closes <span class="text-white/40">one buyer in twenty.</span><br />A <span class="text-[#F43F5E]">3D experience</span> closes one in three.',
    body:
      'Industrial buying committees now expect to see how your machine looks, moves and integrates before an on-site visit. If your website ships PDFs while your competitor ships an interactive 3D showroom, the deal is decided before your salesperson gets on the flight.',
  },
  pillars: {
    kicker: 'What we deliver',
    title: 'Three products.<br /><span class="text-white/40">One sales unlock.</span>',
    subtitle: 'Every deliverable is production-grade, sales-ready, and built to be used in real deals from day one.',
    pillars: [
      { title: 'GA-to-3D Models', desc: 'Photoreal 3D models built directly from your General Arrangement drawings, engineering exports or CAD files. Assembly-accurate.', Icon: Box },
      { title: 'Workflow Animation Videos', desc: 'Cinematic 60-to-120 second product films showing your machine in operation, integration flow or line design. Ready for sales decks, LinkedIn and RFPs.', Icon: Video },
      { title: 'Digital Showroom', desc: 'A branded 3D showroom on your domain, buyers rotate models, view specs, drop enquiries. Every session tracked as a warm lead.', Icon: ScanLine },
      { title: 'Configurator', desc: 'Optional buyer-facing configurator, variants, options, capacity, colour, ready to feed your sales pipeline with pre-scoped enquiries.', Icon: Layers },
      { title: 'Salesperson Portal', desc: 'Reps carry the entire product line on a tablet. No printouts, no crates. Every demo becomes a follow-up asset.', Icon: Compass },
      { title: 'RFP Integration', desc: 'Drop 3D embeds and animation stills directly into RFPs and tender documents, higher win rates, cleaner scoping.', Icon: Zap },
    ],
  },
  stories: {
    title: 'Where this works.<br /><span class="text-white/40">Sample use-cases.</span>',
    subtitle: 'A partial view of industrial engagements. Full case studies available on request under NDA.',
    stories: [
      { href: '/case-studies/prochem', client: 'Prochem Turnkey Projects', industry: 'B2B · Turnkey Engineering', challenge: 'Plant heads and procurement teams evaluating turnkey projects across cities, unable to visualise scale, footprint and integration from static PDFs.', approach: '3D plant flow animation + branded Digital Showroom hosted on the Prochem domain, walk-throughs, integration renders, spec overlays.', outcome: 'RFPs began citing the 3D walk-throughs directly. Sales cycles shortened, technical clarifications dropped.', metrics: [ { v: '13k+', l: 'LinkedIn followers' }, { v: '128k', l: 'Impressions · 12 mo' }, { v: 'Shorter', l: 'Sales cycle' } ] },
      { href: '/case-studies/profotech', client: 'Profotech', industry: 'Specialist Equipment · B2B', challenge: 'Enterprise buyers scoping equipment across use-cases had no way to see the product in context before an on-site demo.', approach: 'Product-level 3D models, application-specific workflow animations, use-case landing pages powered by embedded 3D scenes.', outcome: 'Became the reference source enterprise buyers cite in scoping calls. 40% cheaper qualified lead cost.', metrics: [ { v: '5x', l: 'Organic pipeline' }, { v: '#1', l: 'Category share of voice' }, { v: '40%', l: 'Cheaper qualified lead' } ] },
      { href: '/industries/manufacturing', client: 'Industrial manufacturers', industry: 'Manufacturing · Multiple lines', challenge: 'International buyers unable to fly in, on-ground demos not scalable across geographies.', approach: 'End-to-end Digital Showroom, remote buyers explore the full product line, request quotes and shortlist without a plant visit.', outcome: 'Sales team stopped chasing demos. Prospects arrived pre-qualified, spec-ready and shortlist-ready.', metrics: [ { v: '3x', l: 'Qualified enquiries' }, { v: '−60%', l: 'Time to first demo' }, { v: '24/7', l: 'Showroom uptime' } ] },
    ],
  },
  framework: {
    kicker: 'The Adcom Method · Industrial 3D',
    title: 'A four-phase<br /><span class="text-white/40">production pipeline.</span>',
    subtitle: 'Every 3D engagement runs on a fixed-scope, fixed-timeline production system. No open-ended studio hours.',
    phases: [
      { n: '01', tag: 'Phase 01', title: 'Onboard', desc: 'Share GA drawings, CAD files or reference photos. Kickoff call to freeze scope, variants and voice. Fixed deliverable list agreed in writing.' },
      { n: '02', tag: 'Phase 02', title: 'Model', desc: 'Photoreal 3D built from your engineering source. Two revision rounds included. Assembly-accurate, texture-correct.' },
      { n: '03', tag: 'Phase 03', title: 'Animate & Publish', desc: 'Workflow animation film scripted with your sales team. Digital Showroom deployed to your domain. Salesperson portal handed off.' },
      { n: '04', tag: 'Phase 04', title: 'Compound', desc: 'Ongoing model additions as new SKUs launch. Quarterly sales-team feedback loops. Analytics on which models close.' },
    ],
  },
  principles: {
    title: '3D is not a <span class="text-white/40">marketing asset.</span><br />It is a <span class="text-[#F43F5E]">sales asset.</span>',
    subtitle: 'Three principles govern every industrial 3D engagement we take on.',
    items: [
      { t: 'Built from your engineering, not our imagination', d: 'Every model starts from your GA or CAD source. Assembly-accurate is non-negotiable, buyers can smell a marketing render.' },
      { t: 'Deliver what sales will actually use', d: 'Every asset is scoped with your sales team. If the AE will not use it in the next deal, we do not ship it.' },
      { t: 'Own the showroom, not the vendor', d: 'The Digital Showroom deploys to your domain, files exported to your team. No captive contract, no vendor lock.' },
    ],
  },
  testimonial: { quote: 'Adcom turned our GA drawings into a Digital Showroom our sales team now uses on every international enquiry. We are closing deals with buyers who have never seen the plant.', name: 'Anand Deshpande', role: 'MD, industrial manufacturer', avatar: 'https://i.pravatar.cc/120?img=68' },
  closing: { headlineHtml: 'Industrial buyers now scope <span class="text-white/40">before they call.</span><br /><span class="text-[#F43F5E]">Meet them there.</span>', body: 'We take on a limited number of industrial 3D engagements each quarter, exclusively for manufacturers and engineering companies with a real product line to show. Bring your GA drawings, we will show you the future.' },
};

export default function Industrial3D() { return <ServicePage data={data} />; }
