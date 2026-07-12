---
title: A luxury hotel brand's site, built to scale across properties
client: Luxury hospitality brand · Confidential
summary: A multi-location luxury hotel brand on one Drupal platform — each property with its own controls over a shared component system, live room availability pulled straight from the reservation system. I set the architecture, drove the implementation strategy, and led the team.
year: '2015 — 2018'
role: Senior Developer · Team Lead / Architect
stack: ['Drupal', 'PHP', 'Synxis', 'SOAP / REST', 'MySQL']
tags: ['Websites', 'Booking', 'Architecture', 'Team Lead']
metrics:
  - { value: 'Multi-property', label: 'every location on one platform' }
  - { value: 'Live', label: 'rates & rooms via a custom Synxis integration' }
  - { value: 'Modular', label: 'pages (Drupal Paragraphs) — marketing moves fast' }
  - { value: '3 years', label: 'leading the build and mentoring the team' }
order: 3
---

## The problem

A luxury hotel brand's site has to do two hard things at once, across many properties. Marketing needs to shape every page — the photos, the words, the feel — per location. At the same time, room rates and openings have to be exact, pulled live from the reservation system the moment a guest looks. Most platforms are good at one and fight you on the other, and doing it across a whole brand multiplies the problem.

## What I built — and led

I set the architecture and drove the implementation strategy for the build, then led the team that grew around it: setting the standards, running the reviews, and mentoring the developers who came on to build and maintain it.

- **One platform, every property** — each location got its own access control and settings on top of a shared component system, so the brand stayed consistent without rebuilding every site from scratch.
- **Modular pages via Drupal Paragraphs** — marketing could assemble and reshape pages themselves, fast, without touching code or breaking the live numbers.
- **Live rooms, always current** — I led the custom Synxis module development that pulled rates and openings straight from the reservation system onto the page. Never stale.

## The result

The brand ran on one platform across its properties. Marketing moved fast; the numbers stayed exact. And the standards and architecture I set outlasted me — developers kept coming on board and extending it for years without the foundation cracking.

## The sequel

The Synxis integration work was later folded into the central iPaaS platform I architect (see the platform case study) — the same move as the ferry engine: a bespoke connection becoming one more system speaking one shared format.

## Under the hood

For the technically minded: Drupal with the booking layer written as custom modules speaking to Synxis over SOAP/REST for live rates and availability, fetched at request time with caching tuned so pages stayed fast without the numbers going stale. Per-location access control over a shared component library; modular pages via Paragraphs. Content lived in Drupal; booking data never did — that boundary is what let marketing move fast while the numbers stayed exact.
