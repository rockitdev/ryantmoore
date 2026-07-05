---
title: A luxury hotel site with live availability
client: Travel & hospitality client
summary: I led the build of a luxury hotel booking site. I wrote the part that pulled live room openings onto the page, always up to date.
year: '2015 — 2018'
role: Senior Developer · Team Lead
stack: ['Drupal', 'PHP', 'SOAP / REST', 'MySQL']
tags: ['Websites', 'Booking', 'Team Lead']
metrics:
  - { value: 'Real-time', label: 'rates & openings, straight from the booking system' }
  - { value: 'Custom', label: 'Drupal booking modules, written from scratch' }
  - { value: '3 years', label: 'leading the build and the team' }
order: 2
---

## The problem

A luxury hotel site has to do two things at once. The marketing team needs to shape every page: the photos, the words, the feel of the brand. At the same time, room rates and openings have to be exact. They get pulled live from the booking system the moment a guest looks. Most sites are good at one and fight you on the other.

## What I built

I led the build of the site on Drupal. I wrote the booking modules myself. They treat live room data as seriously as the marketing.

- **Live rooms, always current** — rates and openings came straight from the booking system and showed right on the page. Never stale.
- **A clean split** — brand content and live booking data each stayed in their own lane. The marketing team could move fast and never break the numbers.
- **Built to be handed off** — the standards I set let the team keep building on it long after launch.

## The result

The site launched and held up. Brand content and live data each stayed in their own lane. Just as important, it left behind clean code and a way of working the team carried into the next build.

## Under the hood

For the technically minded: the site was Drupal, with the booking layer written as custom modules that spoke SOAP and REST to the hotel's central reservation system. Rates and availability were fetched live at request time rather than synced on a schedule, with caching tuned so pages stayed fast without the numbers going stale. Content stayed in Drupal's hands; booking data never did — that boundary is what let the marketing team move fast while the numbers stayed exact.
