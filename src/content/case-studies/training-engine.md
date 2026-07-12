---
title: A training app that always knows what's next
client: Personal product · Private beta
summary: A strength-training app that builds your program and tracks every set, so you always know what to lift next. It works with no signal at the gym, and a Claude-based coach answers from your real training data.
year: '2025 to present'
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

Anyone training hard hits the same wall: knowing what to do next. A good program changes every week. The sets, the reps, the weight, the order. Track it in a notebook or a spreadsheet and you spend half the session flipping back. And the gym is the one place your phone signal tends to die.

## What I built

A strength-training app where "what do I lift next?" always has an answer in front of you.

- **Always knows what's next.** The program is the source of truth. Open it mid-session and it shows the exact lift, set, and target weight. It moves you along as you go.
- **Works with no signal.** It installs like a real app and keeps working offline. A service worker, local storage, and a sync queue replay your sets the moment you are back on wifi. A gym basement does not stop it.
- **Logging you can trust.** The part that has to be right is deterministic. A fast parser turns your sets into clean records, with no model in the loop where correctness matters.
- **A coach that knows your training.** A Claude-based coach answers questions from your real history, sets, and records. It is built to answer from your data or say it does not have enough. No filler, no made-up advice.

## The engineering call

The interesting choice was not "add AI." It was deciding where not to. Logging stays deterministic because it has to be right. The model runs only where judgment and conversation help, and always on real data so it cannot bluff. Knowing when to trust a model and when not to is the same thing that makes an agent safe on a business's real work.

## The result

It is in private beta, in real use every training day, mine included. The build is the proof: an app that works offline, a clean API behind it, and a coach that answers from your real numbers instead of guessing.

## Under the hood

For the technically minded: a React 19 PWA (service worker, offline storage, a replay-on-reconnect sync queue) talking to a Symfony and API Platform backend on MySQL. The coach calls Claude with the user's real training data assembled server-side. The system prompt forces specific, data-grounded answers, kept short.
