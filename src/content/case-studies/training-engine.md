---
title: A training app that always knows what's next
client: Personal product · Private beta
summary: A strength-training PWA that builds your program and tracks every set, so you always know what to lift next. It works with no signal at the gym, and a Claude-based coach answers from your real training data.
year: '2025 — present'
role: Founder · Full-stack
stack: ['React 19', 'TypeScript', 'Symfony', 'API Platform', 'MySQL', 'Claude']
tags: ['Web apps', 'PWA', 'AI', 'Offline-first']
metrics:
  - { value: 'Offline-first', label: 'logs sets with no signal, syncs on reconnect' }
  - { value: 'PWA', label: 'installs on your phone, no app store' }
  - { value: 'AI coach', label: 'grounded in your real training data' }
  - { value: 'Daily use', label: 'in private beta, mine included' }
order: 5
---

## The problem

Anyone training hard hits the same wall: knowing what to do next. A good program changes every week — the sets, the reps, the weight, which lift comes first. Track it in a notebook or spreadsheet and you spend half the session flipping back. And the gym is the one place your phone signal tends to die.

## What I built

A strength-training app where the question "what do I lift next?" always has an answer in front of you.

- **Always knows what's next** — the program is the source of truth. Open it mid-session and it shows the exact lift, set, and target weight, and moves you along as you go.
- **Works with no signal** — it installs like a real app and keeps working offline: a service worker, local storage, and a sync queue that replays your sets the moment you're back on wifi. A gym basement doesn't stop it.
- **Logging you can trust** — the data-critical path is deterministic. A fast parser turns your sets into clean records, with no model in the loop where correctness matters.
- **A coach that actually knows your training** — a Claude-based coach answers questions grounded in your real history, sets, and PRs. It's built to answer from your data or admit it doesn't have enough — no generic filler, no invented advice.

## The engineering call

The interesting decision wasn't "add AI." It was deciding where *not* to. Logging stays deterministic because correctness matters; the model runs only where judgment and conversation actually help, and always grounded in real data so it can't bluff. That discernment — knowing when to trust a model and when not to — is the same thing that makes an agent safe to put on a business's real workflows.

## The result

It's in private beta, in real use every training day, mine included. The build is the proof: an app that works offline, a clean API behind it, and an AI coach that answers from your actual numbers instead of guessing.

## Under the hood

For the technically minded: a React 19 PWA (service worker, offline storage, a replay-on-reconnect sync queue) talking to a Symfony / API Platform backend on MySQL. The coach calls Claude with the user's real training context assembled server-side; the system prompt forces specific, data-grounded answers kept short.
