// Single source of truth for site-wide content that isn't a case study.
// Edit these arrays to change copy — the markup just maps over them.

export const site = {
  name: 'Ryan Moore',
  role: 'Software Engineer',
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
  title: 'Ryan Moore, Software Engineer · Symfony, Drupal & Integrations',
  description:
    'Software engineer in Halifax, NS. Twenty years building websites, web apps, and the links between business systems. Symfony, Drupal, and practical automation. Open for contract projects.',
  ogImageAlt:
    'Diagram of business tools (HubSpot, Stripe, Drupal, Twilio and more) all connected through one core system',
};

// What the connected system in the hero diagram actually gets a business owner —
// plain-language outcomes, rendered as the caption row under the graphic.
export const outcomes = [
  'Bookings land in your calendar',
  'Orders flow straight to your books',
  'Nothing typed in twice',
];

export const services = [
  {
    title: 'Websites & web apps',
    body: 'Fast is a feature. The sites I build score 100 on Google\'s PageSpeed test, on phones and desktops alike. They load in under a second, hold up under heavy use, and stay easy to change later.',
  },
  {
    title: 'Getting your tools to talk',
    body: 'Two tools that were never built to work together? That is my favourite kind of job. I get your tools talking, so information moves between them on its own. No copy-and-paste, no missed steps.',
  },
  {
    title: 'A website you can run yourself',
    body: 'A site you update yourself. Change a price, post an update, swap a photo. No calling a developer every time. I have built this for teams running large, busy sites, and for owners who just want to stop waiting on someone else.',
  },
  {
    title: 'Automation & AI',
    body: 'Most businesses repeat the same small tasks all day. I build tools that handle that work for you: sorting, scheduling, replying, following up. That frees your team to spend its time where it counts. This is where I put AI to practical, down-to-earth use.',
  },
];

// Smaller, notable builds shown in the denser projects grid.
// `status` is optional — adds a small pill (e.g. private beta) to a card's top row.
// The fixed-price entry offer. Designed to be an easy first "yes" for buyers who
// can't scope a project yet — the report naturally proposes the bigger work.
// Edit price/steps here; the section markup just renders this.
export const audit = {
  price: '$1,500',
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
];

export const background = [
  { period: '2005 to present', role: 'Founder, Rockit Development', link: 'https://www.rockitdevelopment.com', detail: 'My own company. I take on consulting work and build products. Right now my focus is automation for heating and cooling service businesses.' },
  { period: '2022 to present', role: 'Staff Engineer', detail: 'I lead the team building a platform that ties hotel and travel software together. I take on the hardest connection work, and I help other developers grow.' },
  { period: '2018 to 2022', role: 'Senior Integration Engineer', detail: 'I built the core system that links many travel services. It lets them share data through one common connection.' },
  { period: '2015 to 2018', role: 'Senior Developer / Team Lead', detail: 'I led the design and the team on large booking sites, and set the standards the whole team built by.' },
  { period: '2007 to 2015', role: 'Senior Systems Analyst', detail: 'Tech lead at a health authority for the province. I built websites and medical software, and I built the data links between big hospital systems.' },
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
