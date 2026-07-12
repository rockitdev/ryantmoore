---
title: A multi-agent system that runs a business
client: Rockit / self-built · Production
summary: A team of AI agents — an orchestrator plus specialists for research, building, and review — that runs real business operations day to day, coordinated over a chat interface I run from my phone. I designed and built the whole system.
year: '2026 — present'
role: Founder · Architect
stack: ['Claude (Opus / Sonnet / Haiku)', 'Codex', 'Python', 'tmux', 'Discord', 'SQLite', 'systemd']
tags: ['AI agents', 'Orchestration', 'Automation', 'Architecture']
metrics:
  - { value: '5 agents', label: 'orchestrator + research, build, review, utility' }
  - { value: 'Daily', label: 'runs autonomously, mostly unattended' }
  - { value: 'Right model', label: 'per role — judgment vs throughput vs code vs review' }
  - { value: 'Human-in-loop', label: 'it proposes; I approve what matters' }
---

## The problem

A solo operator has more work than hours. The tasks that actually move a business — research, drafts, outreach prep, quality review, keeping a backlog honest — are endless and mostly repetitive. You can't hire a team for it, and a single AI chat window doesn't run a business. It forgets, it drifts, and it does one thing at a time.

## What I built

A multi-agent system: an orchestrator that makes the judgment calls, plus specialized agents for research, building, and review, coordinated over a chat interface I talk to from my phone.

- **The right model for each job** — a top model orchestrates and decides; cheaper, faster models do high-volume research; a code model builds; a review model checks the work. Expensive judgment where it counts, cheap throughput everywhere else.
- **A real task system** — a queue with atomic dispatch, completion tracking, timeouts, and self-healing, so agents don't collide, stall silently, or drop work.
- **Human-in-the-loop by design** — it researches, drafts, and proposes; I approve the calls that matter. It never sends anything outward on its own.
- **It runs the actual business** — competitive research, content drafts, quality gates, a groomed backlog, daily operating digests. (This very case study and the project backlog behind it were produced by the system.)

## The engineering — and why it matters to you

The hard parts are exactly the ones that make agents safe in production: dispatch that surfaces failures instead of hiding them, keeping agents from stepping on each other, cost and rate discipline, and knowing which decisions to escalate to a human instead of guessing.

That's the whole point. Before I put agents on your revenue workflows, I built a system that runs my own operation on them, and lived with everything that has to be true for that to be trustworthy. This is the offer, proven on myself first.

## The result

It runs every day, largely unattended, producing work I'd otherwise pay a small team for: research briefs, drafts, reviews, and a backlog that stays current. I build it in public — you can watch it work.
