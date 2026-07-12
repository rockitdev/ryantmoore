---
title: Making 80+ travel systems behave as one
client: Travel platform · Confidential
summary: Dozens of hotel and travel brands, each on different software. 80+ systems in all. I own the layer that makes them all work through one clean connection, and I have since day one.
year: '2018 to present'
role: Senior Integration Engineer → Staff Engineer
stack: ['PHP / Symfony', 'MySQL', 'SOAP / REST', 'OpenTravel / OTA', 'Docker']
tags: ['Connecting systems', 'Platform', 'Architecture', 'Symfony']
metrics:
  - { value: '80+', label: 'systems connected: payments, bookings, CRM, transport' }
  - { value: 'Thousands', label: 'of bookings a day' }
  - { value: 'Millions', label: 'in bookings a year' }
  - { value: 'Since 2018', label: 'running live, one architecture' }
order: 2
---

> Every company in travel speaks a slightly different version of the same language. This platform makes them all sound like one clear voice.

## The problem

Travel runs on a tangle of software. A hotel group uses one booking system. A ferry line uses another. Each one takes payment a different way and sends guest data somewhere different. Any product built on top has to swallow all of that, so its own customers never see the mess.

Build each connection from scratch and you repeat the same work forever. Adding a new brand drags on for weeks. Every vendor's quirk leaks into the core.

## What I built, and still lead

I have been on this platform since day one. Our CTO built the first version. I have owned its direction ever since, and I rebuilt the core myself.

The hard part was never one connection. It was one design choice: make 80+ different systems all behave the same way to everything built on top. That is the whole game, and it is the part I am proudest of.

- **One adapter per system, 80+ and counting.** Payments (Stripe, Authorize.Net, Chase, PayPal, WorldPay). Booking and property systems (Synxis, TravelClick, Shiji). CRM and marketing (Salesforce, HubSpot, Mailchimp). Plus ferry and transport engines. Each system's quirks stay in its own adapter. The product never talks to any of them directly.
- **One shared connection.** Everything downstream sees the same steady format, no matter what sits behind it.
- **Separate per client.** Dozens of brands run on it on their own: luxury hotel groups, ferry lines, and big venues. One busy partner never slows another.

## The result

Adding a new brand used to take weeks. Now it takes one small adapter, written against a format the platform already knows. It has run live since 2018, moving thousands of bookings a day and millions of dollars a year. And the standards I set let a team keep building on it for years without the core breaking down.

## Under the hood

For the technically minded: a Symfony platform that speaks SOAP and REST to each partner and maps everything to one OpenTravel-based format. Every partner sits behind one shared contract, so adding a system means writing one adapter and never touching the core. Client workloads run in isolation. It runs in Docker on MySQL, live since 2018.

## Why this matters for your business

This is the exact skill behind what I do now. I make the systems a business already pays for behave as one, so work moves between them with no one copying data across tabs. The same thinking that wrangles 80+ travel systems connects your CRM, your inbox, and your books, and lets an agent run the busywork in between.
