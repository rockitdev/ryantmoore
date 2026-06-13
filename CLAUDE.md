# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal portfolio / landing site for Ryan Moore, deployed to `https://ryantmoore.dev`. Astro 6, static output (`output: 'static'`), styled with Tailwind v4. Requires Node >= 22.12.0.

## Commands

The dev server normally runs in Docker (port **4322**, hot reload via bind mount — source edits show up live; restart the container only when `package.json` changes). See `/home/moore/CLAUDE.md` for the shared pattern and port registry.

- `docker compose -f docker-compose.dev.yml up -d` — dockerized dev server at `localhost:4322`, `192.168.1.38:4322` (LAN), and `https://moore.tailc24dca.ts.net:4322` (Tailscale)
- `npm run dev` — bare dev server at `localhost:4321`
- `npm run build` — production build to `./dist/`
- `npm run preview` — serve the built site locally
- `npm run astro check` — type-check `.astro` files (tsconfig extends Astro's `strict` config)

There is no test suite, linter, or formatter configured.

## Architecture

Multi-page Astro site. Astro routes by filename in `src/pages/`. Pages:
- `src/pages/index.astro` — the homepage (hero, work, projects, services, background, contact).
- `src/pages/work/[...slug].astro` — one rendered page per case study, generated via `getStaticPaths()` from the content collection.

`src/layouts/Base.astro` wraps every page: `<head>` (fonts, meta/OG), the sticky nav, the footer, and an inline script that drives both `.reveal` scroll animations (`IntersectionObserver`) and the **nav theming**: the nav is transparent white-on-dark (`.nav--ghost`) while over the homepage's dark hero, then turns solid (light bg, dark text) once scrolled past it. Pages without a `.hero` (e.g. case studies) stay solid by default. New pages should render inside `<Base>`.

### The visual concept: signal flow / wiring

The site's identity is **integration made visible** — Ryan connects systems that don't talk to each other, so the hero is a bold, Splunk-style integration graphic. This is deliberate, not decoration; keep new work consistent with it:
- The **hero is a full-bleed dark band** (`.hero`: dark gradient bg, multi-colour radial glows, masked grid `::after`). It pulls up under the nav via negative `margin-top` so the transparent nav sits over it. Headline + lede + CTAs are centred above; the graphic is the centrepiece below.
- `src/components/Schematic.astro` is an **IPaaS-style vertical flow** (`viewBox 0 0 760 800`), modelled on a classic integration-platform diagram: external systems (the `sources` array — REST API, Legacy DB, CRM, Twilio, Files) sit in a row up top and flow **down** through glowing gradient cables (`.wire-base--cable` + marching `.wire-flow--cable`, `url(#flowGrad)`) into the centre **Rockit integration platform**, drawn as a glowing **gear** (`.gear-body` + rotated `.gear-tooth`s + `.gear-core` diamond, `url(#coreGrad)`, `#coreGlow`), then **down** again, diverging out to the client's **website & apps** rendered as device icons (`.device`/`.device-screen` — monitor, tablet, phone) with `<animateMotion>` delivery `.pulse`s. Edit `sources` to change the inputs. Keep the top→platform→devices flow; the devices are the payoff (the deliverable is web & apps). (The page below the hero stays light/editorial; only the hero is dark so far.) All gradients/filters live in the SVG's own `<defs>`. Flow/pulses/rings/halo all stop under `prefers-reduced-motion`.
- Section kickers (`.kicker`) render their leading marker as a glowing **port node** (not a dash); work rows have an input port (`.work__idx::before`) and an output port (`.work__go`) that light up to "complete the circuit" on hover. Reinforce this language rather than introducing unrelated decorative motifs.

### Content model — two sources of truth

- **Case studies are a content collection.** Each is one markdown file in `src/content/case-studies/`, validated by the Zod schema in `src/content.config.ts` (uses the Astro 6 `glob()` loader). Frontmatter (`title`, `client`, `summary`, `year`, `role`, `stack`, `tags`, optional `metrics`, `order`, `draft`) drives both the homepage listing rows and the article header; the markdown body is the narrative. Listing order is the `order` field (low first); `draft: true` hides an entry everywhere. Add a case study = add a `.md` file, nothing else.
- **Everything else lives in `src/data/site.ts`** — the `site` object plus the `services`, `projects`, `background`, and `stack` arrays. Edit these to change homepage copy; the markup just `.map()`s over them. Do not hardcode copy into `index.astro`.

### Styling — the design system in `global.css`

There is a deliberate design system, and its governing principle is **restraint** (benchmark: splunk.com — one type voice, one accent, high contrast, dense deliberate layout). Aesthetic: soft off-white base, near-black ink, blue signal accent, film-grain + blueprint-grid texture. All theme tokens are CSS custom properties in `:root`. Note the role of the surface/text token names is light-themed: **`--ink*` are light surfaces** (page bg → raised cards) and **`--paper*` are dark text** (primary → faint); components reference them by role, so the names read "inverted" but are correct.

**One family, one accent — do not re-add variety.** The whole site runs on a **single typeface, Hanken Grotesk** (`--display`, `--sans`, and `--label` all point to it); weight contrast does the work, and "label voice" is the same family set in caps with letter-spacing — **there is no monospace and no second display face**. Do not reintroduce JetBrains Mono, Bricolage Grotesque, Fraunces, or any third font. There is **one accent colour** — blue `--accent: #1f4fff` (with `--accent-2` for hover and `--accent-hi`, a lighter tint of the *same* hue, only for legibility on the dark hero). Do **not** reintroduce the old per-section/per-row accent rotation or the `--c-ember`/`--c-teal` signals — sections are differentiated by number and spacing, not hue. The schematic is monochrome blue for the same reason. The hero "run on" emphasis is a clean accent underline (not a filled marker). Inline `style` should be avoided entirely now that accent rotation is gone.

All other visual styling is **semantic component classes** (`.hero`, `.work__row`, `.cs-metric`, `.prose`, etc.) in `src/styles/global.css`. Style with these classes and tokens — do **not** reintroduce inline `style` for layout/visuals, and don't add Tailwind utility classes piecemeal (Tailwind is imported for preflight only; the system is hand-rolled). Respect `prefers-reduced-motion` (already handled for `.reveal` and animations).

`astro.config.mjs` sets `vite.server.allowedHosts` for a Tailscale hostname so the dev server is reachable over the tailnet.
