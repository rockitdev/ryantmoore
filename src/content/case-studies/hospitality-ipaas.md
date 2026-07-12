---
title: Making 80+ travel systems behave as one
client: Travel platform · Confidential
summary: Dozens of hospitality and travel brands, each running on different software — 80+ systems in all. I've owned the architecture of the layer that makes them all work through one clean connection, since day one.
year: '2018 — present'
role: Senior Integration Engineer → Staff Engineer
stack: ['PHP / Symfony', 'MySQL', 'SOAP / REST', 'OpenTravel / OTA', 'Docker']
tags: ['Connecting systems', 'Platform', 'Architecture', 'Symfony']
metrics:
  - { value: '80+', label: 'systems connected — payments, reservations, CRM, transport' }
  - { value: 'Thousands', label: 'of bookings a day' }
  - { value: 'Millions', label: 'in bookings processed a year' }
  - { value: 'Since 2018', label: 'running live, one architecture' }
order: 2
---

> Every company in travel speaks a slightly different version of the same language. This platform's job is to make them all sound like one clear voice.

## The problem

Travel runs on a tangle of software. A hotel group uses one reservation system, a ferry operator another, and each takes payment through a different gateway and pushes guest data to a different marketing platform. Any product that sits on top has to swallow all of that so its own customers never taste the mess.

When every connection is built from scratch, the same work gets repeated forever. Onboarding a new brand drags on for weeks, and every vendor's quirk leaks into the core.

## What I built — and still lead

I've been on this platform since day one. After our CTO stood up the first scaffold, I've owned its architectural direction ever since, and I rebuilt the core myself in its second generation.

The hard part was never any single connection. It was designing **one API contract so 80+ wildly different systems all behave identically to everything built on top of them.** That is the whole game, and it's the part I'm proudest of.

- **One adapter per system, 80+ and counting** — payments (Stripe, Authorize.Net, Chase, PayPal, WorldPay), reservation and property systems (Synxis, TravelClick, Shiji), CRM and marketing (Salesforce, HubSpot, Mailchimp), plus ferry and transport booking engines. Each vendor's quirks stay quarantined in its own adapter; the product never talks to any of them directly.
- **One shared contract** — everything downstream sees the same steady format, no matter what sits behind it.
- **Isolated per client** — dozens of brands (luxury hotel groups, ferry operators, and major venues) run on it independently, so one busy partner never slows another.

## The result

Adding a new brand went from a weeks-long custom build to writing one small adapter against a format the platform already knows. It has run live since 2018, moving thousands of bookings a day and millions of dollars a year.

Just as important: the standards and the API design I set are what let a team keep extending it for years without the core turning to mud.

## Under the hood

For the technically minded: a Symfony platform speaking SOAP and REST to each partner and normalizing everything to an OpenTravel-based internal format. Every partner lives behind one shared contract, so adding a system means writing one adapter, never touching the core. Client workloads are isolated and processed independently. Runs in Docker on MySQL, live since 2018.

## Why this matters for your business

This is the exact discipline behind what I do now. Make the systems a business already pays for behave as one, so work flows between them without a person copying data across tabs. The same thinking that wrangles 80+ travel systems is what connects your CRM, your inbox, and your books — and lets an agent run the busywork in between.
