// Single source of truth for site-wide content that isn't a case study.
// Edit these arrays to change copy — the markup just maps over them.

export const site = {
  name: 'Ryan Moore',
  role: 'Senior Software Engineer',
  location: 'Halifax, NS',
  since: '2005',
  email: 'ryan@rockitdevelopment.com',
  linkedin: 'https://www.linkedin.com/in/ryantmoore4',
  url: 'https://www.ryantmoore.ca',
};

// Default <head> copy. Skill + place keywords live here on purpose — "Symfony",
// "Drupal", and "Halifax" appear nowhere else in machine-readable text, and this
// is what search engines and link previews read first.
export const seo = {
  title: 'Ryan Moore — AI agents & integrations · Senior software engineer',
  description:
    'AI agents and integrations that keep your business moving. Senior software engineer in Halifax, NS with 25 years building automation, connected systems, and high-stakes web platforms. Symfony, Drupal, and practical AI. Open for contract work.',
  ogImageAlt:
    'Diagram of business tools (HubSpot, Stripe, Drupal, Twilio and more) all connected through one core system',
};

// What the connected system in the hero diagram actually gets a business owner —
// plain-language outcomes, rendered as the caption row under the graphic.
export const outcomes = [
  'Reads what comes in and figures out what to do',
  'Deals with the odd ones, flags you only when it matters',
  'Sees a job through start to finish',
  "Double-checks its own work before it reaches a customer",
];

export const services = [
  {
    title: 'Work that keeps repeating',
    body: 'Sorting, scheduling, replying, following up. I build agents that carry routine work forward and bring you in when judgment matters.',
  },
  {
    title: 'Tools that don\'t talk to each other',
    body: 'I connect the systems your business already uses so information moves automatically, without copying, pasting, or missed steps.',
  },
  {
    title: 'Websites that are slow or hard to change',
    body: 'I build fast websites and applications your team can update without calling a developer every time something changes.',
  },
  {
    title: 'Systems that have become messy',
    body: 'I find what is broken, duplicated, or needlessly manual, then give you a practical fix list, or handle the fixes myself.',
  },
];

// Smaller, notable builds shown in the denser projects grid.
// `status` is optional — adds a small pill (e.g. private beta) to a card's top row.
// The fixed-price entry offer. Designed to be an easy first "yes" for buyers who
// can't scope a project yet — the report naturally proposes the bigger work.
// Edit price/steps here; the section markup just renders this.
export const audit = {
  price: '$997',
  priceNote: 'CAD, flat fee',
  duration: 'one week',
  steps: [
    {
      title: 'We talk for an hour',
      body: 'You walk me through how the business really runs. The tools, the spreadsheets, the stuff someone retypes every day, the jobs that slip through the cracks.',
    },
    {
      title: 'I map your systems',
      body: 'I trace how information really moves between your tools, and where it stops. Every gap is a place you lose hours, leads, or money.',
    },
    {
      title: 'You get the fix list',
      body: 'A short, plain-language report: what to fix first, what each fix gets you, and roughly what it costs. No jargon, no padding.',
    },
  ],
  perks: [
    'Fixed price, no estimate dance',
    'The report is yours, use it with any developer',
    'Fee credited to your first project if we go ahead',
  ],
};

export const projects = [
  {
    name: 'A website that scores a perfect 100',
    kind: 'Performance',
    desc: 'My own company\'s site (rockitdevelopment.com) gets a perfect 100 on Google\'s PageSpeed test. All four scores, on phone and desktop. It loads in under a second.',
    foot: 'Astro · Cloudflare · 100 / 100 / 100 / 100',
  },
  {
    name: 'A phone line that runs itself',
    kind: 'Automation',
    desc: 'A phone and text system that books jobs, sends reminders, and follows up with customers. It runs on its own, with no one tied to the phones.',
    foot: 'Twilio · Make.com · n8n',
  },
  {
    name: 'From messy files to clean data',
    kind: 'AI',
    desc: 'Messy emails and PDFs go in; clean, organized records come out. AI reads each document and pulls out just what matters, so no one has to retype it.',
    foot: 'Claude API · Node.js',
  },
  {
    name: 'A tool to catch frailty early',
    kind: 'Healthcare',
    desc: 'A web tool for family doctors to screen older patients for frailty and build a care plan on the spot. Built with Nova Scotia Health and Dalhousie, and piloted with family doctors in community clinics.',
    foot: 'ASP.NET MVC',
  },
];

export const background = [
  { period: '2005 to present', role: 'Founder, Rockit Development', link: 'https://www.rockitdevelopment.com', detail: 'My own company. Consulting and products, now focused on AI agents and systems integration for growing businesses.' },
  { period: '2022 to present', role: 'Staff Engineer', detail: 'Lead the team on a platform that ties hotel and travel software together. I own the hardest integration work and mentor other developers.' },
  { period: '2018 to 2022', role: 'Senior Integration Engineer', detail: 'Built the core system that links many travel services through one common connection.' },
  { period: '2015 to 2018', role: 'Senior Developer / Team Lead', detail: 'Led the design and the team on large booking sites, and set the standards the team built by.' },
  { period: '2007 to 2015', role: 'Senior Systems Analyst', detail: 'Tech lead at a provincial health authority. Built websites, medical software, and the data links between hospital systems.' },
];

// Technology section renders as monochrome logos (keyed into TECH_GLYPHS in tech-glyphs.ts).
// Logo-only: items without a brand mark (protocols/standards like SOAP, OpenTravel) are
// omitted entirely. The name is still exposed on hover and to screen readers.
export const stack: { name: string; logo: string }[] = [
  { name: 'PHP / Symfony',    logo: 'php' },
  { name: 'React',            logo: 'react' },
  { name: 'TypeScript',       logo: 'typescript' },
  { name: 'Astro',            logo: 'astro' },
  { name: 'Node.js',          logo: 'nodedotjs' },
  { name: 'MySQL',            logo: 'mysql' },
  { name: 'Drupal',           logo: 'drupal' },
  { name: 'Make.com',         logo: 'make' },
  { name: 'n8n',              logo: 'n8n' },
  { name: 'Twilio',           logo: 'twilio' },
  { name: 'Cloudflare Pages', logo: 'cloudflare' },
  { name: 'Docker',           logo: 'docker' },
  { name: 'Claude API',       logo: 'claude' },
  { name: 'ASP.NET MVC',      logo: 'dotnet' },
];

// Client testimonials. The "What clients say" section only appears when at least one
// entry has draft: false — so nothing renders until you have a real, approved quote.
// IMPORTANT: replace the placeholder text and fill in name/detail BEFORE flipping draft.
export const testimonials = [
  {
    quote: 'Ryan automated our phones and we stopped losing jobs to missed calls. It just runs, and we never think about it.',
    name: 'Client name',
    detail: 'Owner, business name',
    draft: true, // ← set to false once this is a real quote you have permission to use
  },
];
