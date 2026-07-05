import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Case studies are long-form, one markdown file each in src/content/case-studies/.
 * Frontmatter drives the listing rows on the homepage and the article header;
 * the markdown body is the narrative. `order` controls listing position (low = first).
 */
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    summary: z.string(),
    year: z.string(),
    role: z.string(),
    stack: z.array(z.string()),
    tags: z.array(z.string()),
    metrics: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .optional(),
    draft: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

/**
 * Blog posts, one markdown file each in src/content/blog/. Frontmatter drives
 * the /lab/ listing and the article header; the body is the post. Listing is
 * newest-first by `date`. `draft: true` hides a post everywhere.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { caseStudies, blog };
