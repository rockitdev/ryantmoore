import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site, services } from '../data/site';

export const GET: APIRoute = async () => {
  const u = (p: string) => new URL(p, site.url).href;

  const posts = (await getCollection('blog'))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  const cases = (await getCollection('caseStudies'))
    .filter((c) => !c.data.draft)
    .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));

  const lines: string[] = [
    '# Ryan Moore',
    '',
    "> Senior software engineer in Halifax, Nova Scotia. Builds AI agents and systems integration for growing businesses: connecting the tools a business already uses, automating repetitive work, and putting real guardrails on agents that touch money, customers, or live systems.",
    '',
    'Ryan Moore has 25 years of experience building automation, connected systems, and high-stakes web platforms with Symfony, Drupal, and practical AI. He leads the hardest integration work on a hotel and travel booking platform and takes on only a few contract projects at a time, so each gets his full attention. He writes plainly about using AI in a real small business, without the hype.',
    '',
    '## The Lab',
    'Practical, plain-language essays on using AI in a small business.',
    ...posts.map((p) => `- [${p.data.title}](${u(`/lab/${p.id}/`)}): ${p.data.description}`),
    '',
    '## Work',
    'Selected case studies.',
    ...cases.map((c) => `- [${c.data.title}](${u(`/work/${c.id}/`)}): ${c.data.summary}`),
    '',
    '## What Ryan helps with',
    ...services.map((s) => `- ${s.title}: ${s.body}`),
    '',
    '## Contact',
    `- Website: ${site.url}`,
    `- Email: ${site.email}`,
    '- Location: Halifax, Nova Scotia, Canada',
    '- Availability: open for contract work, a few projects at a time',
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
