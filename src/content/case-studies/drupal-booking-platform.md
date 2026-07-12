---
title: A luxury hotel brand's site, built to scale across properties
client: Luxury hospitality brand · Confidential
summary: A multi-location luxury hotel brand on one Drupal platform. Each property runs its own site over shared parts, with room availability pulled live from the booking system. I set the architecture, drove the plan, and led the team.
year: '2015 to 2018'
role: Senior Developer · Team Lead / Architect
stack: ['Drupal', 'PHP', 'Synxis', 'SOAP / REST', 'MySQL']
tags: ['Websites', 'Booking', 'Architecture', 'Team Lead']
metrics:
  - { value: 'Multi-property', label: 'every location on one platform' }
  - { value: 'Live', label: 'rates & rooms via a custom Synxis integration' }
  - { value: 'Modular', label: 'pages marketing can build themselves' }
  - { value: '3 years', label: 'leading the build and the team' }
order: 3
---

## The problem

A luxury hotel brand's site has to do two hard things at once, across many properties. Marketing needs to shape every page: the photos, the words, the feel, per location. At the same time, room rates and openings have to be exact. They come live from the booking system the moment a guest looks. Most platforms are good at one and fight you on the other. Doing it across a whole brand makes it harder.

## What I built, and led

I set the architecture and drove the plan for the build. Then I led the team that grew around it. I set the standards, ran the reviews, and mentored the developers who came on to build and maintain it.

- **One platform, every property.** Each location got its own controls and settings over a shared set of parts. The brand stayed consistent, and we never rebuilt a site from scratch.
- **Pages marketing could build themselves.** They used modular blocks (Drupal Paragraphs) to assemble and reshape pages fast, with no code and no risk to the live numbers.
- **Live rooms, always current.** I led the custom Synxis work that pulled rates and openings straight from the booking system onto the page. Never stale.

## The result

The brand ran on one platform across its properties. Marketing moved fast. The numbers stayed exact. And the standards I set outlasted me. Developers kept coming on and building on it for years, and the foundation held.

## The sequel

Later, the Synxis work was folded into the central platform I architect (see the platform case study). It was the same move as the ferry engine: a one-off connection became one more system speaking one shared format.

## Under the hood

For the technically minded: Drupal, with the booking layer written as custom modules. They spoke to Synxis over SOAP and REST for live rates and availability, fetched at request time. Caching was tuned so pages stayed fast without the numbers going stale. Each location had its own access control over a shared component library, with modular pages via Paragraphs. Content lived in Drupal; booking data never did. That boundary is what let marketing move fast while the numbers stayed exact.
