---
title: A booking engine travelers actually finish
client: Ferry operator · Confidential
summary: A standalone Symfony booking engine for a regional ferry operator, running the whole path from searching a sailing to a paid ticket. Fast and correct enough that travelers finished it.
year: '2016 — 2017'
role: Senior Developer · Solo build
stack: ['PHP / Symfony', 'MySQL', 'REST', 'Hogia BookIt', 'Moneris']
tags: ['Booking', 'Web apps', 'Symfony']
metrics:
  - { value: 'Hundreds', label: 'of bookings a day' }
  - { value: 'End-to-end', label: 'search, book, and pay in one flow' }
  - { value: '0', label: 'double-sold seats — holds and payment done right' }
  - { value: 'Solo', label: 'built and shipped end to end' }
order: 4
---

## The problem

A booking engine is the one page a travel business cannot afford to get wrong. It is where a browser turns into a paying customer. A slow step, a stale price, or a confusing form quietly costs the sale. It has to show the right sailings and open seats every time, take payment cleanly, never sell the same spot twice, and feel easy the whole way.

## What I built — solo

I built the engine end to end on Symfony: a clean path from searching a sailing to booking and paying for it. It ran live against the operator's reservation back-end (Hogia BookIt) and took payment through Moneris.

- **Right fares, every time** — live prices and open seats pulled straight from the reservation system. What the traveler saw was what they got.
- **Search to payment in one flow** — a guided path with no dead ends and no surprises.
- **Correct under pressure** — the dull logic that keeps a booking engine honest: it held seats through checkout, released them on abandonment, and confirmed only after payment settled, so a seat could never be sold twice even with many travelers booking at once.

## The result

It ran the operator's ferry ticketing at hundreds of bookings a day, and the business could trust it with real money. Once it was solid, I handed it off to another developer to maintain — clean enough to leave.

## The sequel

Later, its reservation back-end was folded into the central iPaaS platform I architect (see the platform case study). The one-off engine became one more system speaking the shared format — which is exactly the pattern that platform exists to create.

## Under the hood

For the technically minded: a Symfony application talking REST to Hogia BookIt for inventory and Moneris for payments. The real work was the state machine in the middle — holding inventory through checkout, releasing on abandonment, confirming only after settlement — so concurrent bookings could never double-sell a seat.
