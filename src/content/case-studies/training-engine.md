---
title: A training app that always knows what's next
client: Personal product · Private beta
summary: A strength-training app that builds your program, then tracks every set so you always know what to lift next — and keeps working with no signal at the gym.
year: '2025 — present'
role: Founder · Full-stack
stack: ['React 19', 'TypeScript', 'Symfony', 'API Platform', 'MySQL']
tags: ['Web apps', 'PWA', 'AI']
metrics:
  - { value: 'Offline', label: 'works with no signal at the gym' }
  - { value: 'PWA', label: 'installs on your phone, no app store' }
  - { value: 'AI', label: 'log sets by typing in plain language' }
order: 4
---

## The problem

Anyone training seriously hits the same wall: knowing what to do next. A good program changes every week — the sets, the reps, the weight, which lift comes first. Track it in a notebook or a spreadsheet and you spend half the session flipping back to figure out what you did last time and what you're supposed to do today. And the gym is the one place your phone signal tends to die.

## What I built

A strength-training app that builds your program, then tracks every set so the question "what do I lift next?" always has an answer in front of you.

- **Always knows what's next** — the program is the source of truth. Open it mid-session and it shows the exact lift, set, and target weight, then moves you along as you go.
- **Works with no signal** — it installs on your phone like a real app and keeps working offline, so a gym basement doesn't stop it. Your sessions sync back up the moment you're on wifi again.
- **Log by talking, not tapping** — an AI coach reads plain language ("did 3×8 at 185, last set was rough") and turns it into logged sets, and handles swaps when the equipment you need is taken.

Under the hood it's a React 19 progressive web app talking to a Symfony API — built so the phone stays useful whether or not it can reach the server.

## The result

It's in private beta now, in real use every training day — including mine. The build is the proof: an offline-first app, a clean API behind it, and an AI coach that turns how lifters actually talk into clean, structured data.
