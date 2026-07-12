---
title: A booking engine travelers actually finish
client: Ferry operator · Confidential
summary: A standalone Symfony booking engine for a regional ferry line. It ran the whole path from searching a sailing to a paid ticket, fast and correct enough that travelers finished it.
year: '2016 to 2017'
role: Senior Developer · Solo build
stack: ['PHP / Symfony', 'MySQL', 'REST', 'Hogia BookIt', 'Moneris']
tags: ['Booking', 'Web apps', 'Symfony']
metrics:
  - { value: 'Hundreds', label: 'of bookings a day' }
  - { value: 'End-to-end', label: 'search, book, and pay in one flow' }
  - { value: '0', label: 'double-sold seats' }
  - { value: 'Solo', label: 'built and shipped end to end' }
order: 4
---

## The problem

A booking engine is the one page a travel business cannot get wrong. It is where a browser turns into a paying customer. A slow step, a stale price, or a confusing form quietly costs the sale. It has to show the right sailings and open seats every time. It has to take payment cleanly. It can never sell the same spot twice. And it has to feel easy the whole way.

## What I built, solo

I built the engine end to end on Symfony. It ran a clean path from searching a sailing to booking and paying. It talked live to the operator's booking system (Hogia BookIt) and took payment through Moneris.

- **Right fares, every time.** Live prices and open seats came straight from the booking system. What the traveler saw was what they got.
- **Search to payment in one flow.** A guided path, with no dead ends and no surprises.
- **Correct under pressure.** It held seats through checkout, released them if the traveler left, and confirmed only after payment cleared. A seat could never be sold twice, even with many people booking at once.

## The result

It ran the operator's ferry ticketing at hundreds of bookings a day, and the business could trust it with real money. Once it was solid, I handed it to another developer to maintain. It was clean enough to leave.

## The sequel

Later, its booking back-end was folded into the central platform I architect (see the platform case study). The one-off engine became one more system speaking the shared format. That is the exact pattern the platform exists to create.

## Under the hood

For the technically minded: a Symfony app talking REST to Hogia BookIt for inventory and Moneris for payments. The real work was the state machine in the middle. It held inventory through checkout, released it on abandonment, and confirmed only after settlement, so concurrent bookings could never double-sell a seat.
