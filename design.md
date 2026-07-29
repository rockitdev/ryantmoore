# Design System — Ryan Moore (ryantmoore.ca)

**Style:** Swiss / International Typographic Style  
**Principle:** One typeface, expressed through weight and size only. Flush-left grid. Generous whitespace. Restrained brand-blue accent.

---

## Typeface

**Archivo Variable** (`/public/fonts/archivo-variable-latin.woff2`)  
Self-hosted. Latin subset. Weight axis: 100–900. Loaded via `@font-face` in `global.css`, preloaded in `Base.astro`.

One family across the entire site — display, body, labels, UI. No secondary typefaces.

```css
--display: "Archivo", -apple-system, BlinkMacSystemFont, sans-serif;
--sans:    "Archivo", -apple-system, BlinkMacSystemFont, sans-serif;
--label:   "Archivo", -apple-system, BlinkMacSystemFont, sans-serif;
```

---

## Type Scale

1.25 ratio (Major Third), anchored at 1rem / 16px.  
`size = 1rem × 1.25ⁿ`

| Token         | Value        | Pixels  | Usage                                    |
|---------------|-------------|---------|------------------------------------------|
| `--text-2xs`  | 0.64rem      | 10.24px | Diagram sub-labels, micro tags           |
| `--text-xs`   | 0.8rem       | 12.8px  | Kickers, nav links, meta labels, tags    |
| `--text-sm`   | 0.875rem     | 14px    | Secondary body, button text              |
| `--text-base` | 1rem         | 16px    | Primary body copy, form inputs           |
| `--text-lg`   | 1.25rem      | 20px    | Card headings, service titles, timeline  |
| `--text-xl`   | 1.5625rem    | 25px    | Sub-headings, pull-quote minimum         |
| `--text-2xl`  | 1.953rem     | 31.25px | Section h2 minimum, post titles         |
| `--text-3xl`  | 2.441rem     | 39px    | Section h2 maximum, case study headings  |
| `--text-4xl`  | 3.052rem     | 48.8px  | Hero baseline, h1 minimum               |
| `--text-5xl`  | 3.815rem     | 61px    — Hero mid, case study title max |
| `--text-6xl`  | 4.768rem     | 76.3px  | Hero headline maximum                    |

**Rule:** Never hardcode a `font-size`. Use a scale token or `clamp(token, vw, token)`.

---

## Weights

Restrained set — four stops only:

| Weight | Use                                                        |
|--------|------------------------------------------------------------|
| 400    | Body copy, prose paragraphs                                |
| 500    | Nav links, kicker labels, button text                      |
| 700    | Headings (h1–h3), section titles, card headings            |
| 800    | Hero headline, large display numerics (price, metrics)     |

---

## Leading & Tracking

| Context             | `line-height` | `letter-spacing`        |
|---------------------|---------------|-------------------------|
| Body copy           | 1.6           | default (0)             |
| Prose paragraphs    | 1.75          | default (0)             |
| Display headings    | 0.96–1.02     | −0.025em to −0.04em     |
| Kickers / labels    | default       | +0.22em (tracked caps)  |
| Nav / UI labels     | default       | +0.03–0.05em            |

---

## Grid & Layout

- **Max width:** `--wrap: 1180px`, centered with `margin-inline: auto`
- **Narrow column:** `820px` for prose, lab posts, case study body
- **Gutter:** `--gut: clamp(1.25rem, 4vw, 3rem)` — both sides
- **Default alignment:** flush-left / ragged-right everywhere
- **Center alignment:** only for pull-quotes (`.quotes`) — deliberate typographic pause

---

## Colour

One accent, always `--accent: #1f4fff`.

| Token           | Value      | Role                               |
|-----------------|------------|------------------------------------|
| `--ink`         | `#f7f5f0`  | Page background                    |
| `--ink-2`       | `#fffefb`  | Raised panels, cards               |
| `--ink-3`       | `#efece4`  | Hover / alt fill                   |
| `--paper`       | `#14140f`  | Primary text                       |
| `--paper-dim`   | `#51504a`  | Secondary text                     |
| `--paper-faint` | `#6d6b60`  | Tertiary text (min WCAG AA on ink) |
| `--accent`      | `#1f4fff`  | Brand blue — the one signal colour |
| `--accent-2`    | `#1a3fd6`  | Accent hover / pressed             |
| `--accent-hi`   | `#5a86ff`  | Accent on dark hero                |

---

## Pages Covered

Every page and component in the site inherits from `global.css` via `Base.astro`. The type system applies to:

- **Home (`/`)** — hero, work rows, projects grid, services, timeline, audit section, contact form
- **Case studies (`/work/[slug]`)** — hero, meta table, metrics, prose body, next-study footer
- **Lab index (`/lab/`)** — header, post list rows
- **Lab posts (`/lab/[slug]`)** — prose body, post meta
- **404** — error page
- **Nav** — brand mark, name, links, CTA
- **Footer** — meta, links
- **Schematic** (`Schematic.astro`) — SVG labels inherit `--label` / `--display` tokens; px sizes intentionally kept for SVG coordinate space
