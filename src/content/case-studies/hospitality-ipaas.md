---
title: Making dozens of travel systems work as one
client: Travel platform · Confidential
summary: Dozens of travel companies, each with its own software. I built the layer that makes them all work through one simple connection.
year: '2018 — present'
role: Senior Integration Engineer → Staff Engineer
stack: ['PHP / Symfony', 'MySQL', 'SOAP / REST', 'OpenTravel / OTA', 'Docker']
tags: ['Connecting systems', 'Platform', 'Symfony']
metrics:
  - { value: 'Dozens', label: 'systems connected' }
  - { value: '1', label: 'shared connection' }
  - { value: 'Since 2018', label: 'running live' }
order: 1
---

> Every company in travel speaks a slightly different version of the same language. This platform's job is to make them all sound like one clear voice.

## The problem

The travel business runs on a tangle of booking tools. Each one is built by a different company. Each one works a little differently. Any product that sits on top has to deal with that mess, so its own customers never have to.

When I joined, every connection was built from scratch, one company at a time. The same work got copied again and again. Adding a new partner took weeks. Every quirk leaked into the rest of the app.

## What I built

I led the design of a system with one firm rule. The app never talks to an outside company directly. Everything passes through a layer in the middle. It turns each company's version into one shared format.

- **One translator per company** — each connection is kept on its own, so one company's quirks never spill into the rest.
- **One shared connection** — everything downstream sees the same simple, steady format, no matter what sits behind it.
- **Kept separate and in sync** — each client's work is handled on its own, so one busy partner never slows down another.

## The result

Adding a new partner went from a weeks-long slog to one small translator, written against a format we already knew. The platform has run live since 2018. It now connects dozens of companies through that single connection.
