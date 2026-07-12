# ryantmoore.ca

Personal portfolio and freelance landing site for Ryan Moore — software engineer in Halifax, NS. Live at [www.ryantmoore.ca](https://www.ryantmoore.ca).

Built with [Astro 6](https://astro.build) (fully static output), Tailwind v4 (preflight only — the design system is hand-rolled in `src/styles/global.css`), and deployed to Cloudflare Workers static assets (`wrangler.jsonc`).

## Commands

Requires Node ≥ 22.12.

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `docker compose -f docker-compose.dev.yml up -d` | Dockerized dev server at `localhost:4322` |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Serve the built site locally |
| `npm run astro check` | Type-check `.astro` files |

## Editing content

- **Case studies** — one markdown file each in `src/content/case-studies/` (schema in `src/content.config.ts`). Add a file, it appears everywhere; `draft: true` hides it.
- **Everything else** — homepage copy, services, projects, background, SEO strings — lives in `src/data/site.ts`.

See `CLAUDE.md` for architecture notes and the design-system rules.
