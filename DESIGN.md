---
# DESIGN.md — ryantmoore.ca design system (token source of truth)
# Format: Google Labs DESIGN.md style — YAML tokens (the WHAT) + markdown rationale (the WHY).
# Agents/builders: build against these tokens. Do not hardcode values that exist here.
name: ryantmoore.ca
updated: 2026-07-28
vibe: >
  Watching a live agent runtime do real work. Engineered, alive, quietly confident.
  Built by an engineer who ships. Restraint + negative space + a single hot accent.
  Reference family: Inngest / Temporal / Linear. Never a chatbot, never AI-slop gradients.

color:
  # Dark surfaces (hero + dark sections)
  ink-black:      "#0A0A0A"   # hero base
  ink-black-2:    "#070912"   # hero gradient deep
  # Light surfaces (content sections)
  paper:          "#F7F5F0"   # light section bg
  paper-2:        "#FFFEFB"
  paper-3:        "#EFECE4"
  # Text
  text-dark:      "#14140F"   # text on light
  text-dark-dim:  "#51504A"
  text-dark-faint:"#6D6B60"   # min that passes WCAG AA (4.9:1) on paper
  text-on-dark:   "#FFFFFF"   # text on dark
  # Single accent — electric orange (the ONLY accent color)
  accent:         "#F54D26"
  accent-hover:   "#D94120"
  accent-hi:      "#FF7A55"   # highlights / glow / active state
  accent-ink:     "#FFFFFF"   # text on accent
  glow:           "color-mix(in srgb, #F54D26 36%, transparent)"
  line:           "rgba(20,20,15,0.10)"
  line-2:         "rgba(20,20,15,0.16)"

type:
  display: '"Hanken Grotesk", -apple-system, BlinkMacSystemFont, sans-serif'  # headings + body
  mono:    "ui-monospace, 'SF Mono', Menlo, Consolas, monospace"              # telemetry/labels ONLY
  scale-ratio: 1.25   # modular scale, anchored 1rem/16px
  sizes:
    2xs: 0.64rem      # diagram sublabels
    xs:  0.80rem      # kickers, tags, meta (often mono, tracked, uppercase)
    sm:  0.875rem
    base:1rem
    lg:  1.25rem
    xl:  1.5625rem
    2xl: 1.953rem     # section h2
    3xl: 2.441rem
    4xl: 3.052rem     # hero headline (min)
    5xl: 3.815rem     # hero headline (mid)
    6xl: 4.768rem     # hero headline (max)
  headline: { weight: 800, leading: 0.98, tracking: "-0.02em", align: left }
  body:     { weight: 400, leading: 1.5 }
  label:    { family: mono, transform: uppercase, tracking: "0.08em" }

layout:
  container-max: 1180px      # nav + hero + every section share this (edges MUST align)
  gutter: "clamp(1.25rem, 4vw, 3rem)"
  grid: 12-col conceptual; hero = 2-col (copy left / live-card right) desktop, stack < 900px
  radius: { sm: 8px, md: 12px, lg: 16px, pill: 999px }
  space-scale: "4px base (4/8/12/16/24/32/48/64/96)"
  principle: "Negative space is a feature. When unsure, add space, not elements."

motion:
  starfield: "near-black field, ~300 stars (140 mobile), ~20% accent-orange, slow drift + twinkle + bloom on bright"
  hero-loop: "compact observe->reason->act->verify signal, subtle"
  rules: "honor prefers-reduced-motion (freeze to static); cheap on mobile; motion is ambient, never a spinner"

accent-usage: "ONE accent. Orange on: primary CTA, the LIVE indicator, the active loop step, ~20% of stars. Nothing else colored."

# Rationale + rules (the WHY)

## The feel
Near-black, oversized flush-left type, a single electric-orange accent, and a small live "agent runtime" element floating in space. Energy comes from **contrast + glow + motion + the starfield**, never from a loud fill or a gradient wash. This is the Inngest family: restraint is the point.

## Color
- One accent, full stop. Orange (`accent`) carries the primary CTA, the LIVE dot, the active loop step, and ~20% of the starfield. If a second color shows up, it's a bug.
- Dark hero / light content sections alternate for rhythm. Text must clear WCAG AA — `text-dark-faint` is the floor on light; use `text-on-dark` at >=70% opacity on dark.

## Type
- One family (Hanken Grotesk) for display + body; **mono is reserved for telemetry/labels** (CYCLE, CONFIDENCE, node labels) — it reads "console/engineer." Never set body copy in mono.
- Headline: heavy (800), tight leading (~0.98), slightly negative tracking, flush-left, oversized.
- No em dashes in copy (operator rule). Plain, grade-7, no fluff.

## Layout
- **One container (1180px). Nav, hero, and every section share the same left/right edges.** A section that bleeds wider or indents differently is a defect (this caused real bugs — verify edge alignment).
- Two-column hero on desktop (copy left / live-card right); single-column stack below 900px. The live-card is ONE self-contained scale-locked unit — never absolutely positioned over the hero, never a dense multi-card dashboard.
- Restraint: one idea per section, generous whitespace.

## Anti-slop (banned)
- No blue->purple / rainbow gradients. No gradient-filled headline text. No default Inter/Geist-with-no-intent. No emoji-as-icons. No fake logos / invented stats. No dense busy dashboards. No dead empty voids (fill or remove).

## Verify (every change)
- Breakpoints 360/390/768/1024/1440/1920/2560: no clip, no overlap, no void, edges aligned.
- Rendered-composition check (screenshot), not source. prefers-reduced-motion works. WCAG AA.

## Note
This DESIGN.md is the spec of record. Full token pipeline (DESIGN.md -> Tailwind/CSS vars) is not yet wired — CSS currently mirrors these values in `src/styles/global.css` :root. Keep the two in sync until wired.
