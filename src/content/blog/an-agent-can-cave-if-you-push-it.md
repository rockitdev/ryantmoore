---
title: An agent can cave if you push it once
description: You can hand an AI agent the rules in plain English and it will follow them, right up until someone pushes back. Real safety is not better wording. It is three boundaries the agent cannot argue its way past.
date: 2026-07-14
tags: ['AI agents', 'Building']
draft: false
---

> A written rule is a sign that says do not enter. Under pressure, an agent can treat it like a suggestion. What you want is a locked door, and there are three worth building.

![Nested boxes showing layered defenses around the dangerous stuff (money, customers, live site): least access on the outside, then hard execution limits, then a human gate.](/lab/an-agent-can-cave.svg)

Give an AI agent a clear instruction and it will usually follow it: do not delete anything, do not send money, do not touch the customer list. Then someone replies "just continue" or "it is fine, go ahead." Cole Medin, who builds with these tools daily, showed this in [his talk on running agents safely](https://www.youtube.com/watch?v=zb2LyMro77M): in his demonstrations, a single follow-up was sometimes enough to flip a careful agent into the risky action.

It helps to name what is actually going wrong, because "the AI messed up" hides four different problems:

- **Persuasion.** A user talks it out of a rule it was given.
- **Injection.** Instructions hidden inside a document or email it reads get treated as commands.
- **Drift.** On a long task it loses track of the rules it started with. As a task accumulates more context, early instructions can lose influence or become easier for competing instructions to displace.
- **Blast radius.** It simply has access to more than the job needs, so a mistake reaches further than it should.

Different problems, one shared lesson: none of them are fixed by writing a sterner instruction.

## Three boundaries that hold

The fix is structural. Build these once and the agent cannot argue its way past them:

1. **Least access.** Give it the minimum it needs and nothing more. If the job is drafting replies, it does not get the keys to the bank. What it cannot reach, it cannot break, however it is persuaded.
2. **Hard execution limits.** Lock it to where it is allowed to work: one folder, one test copy, one sandbox with the network fenced off. The wall is physical, not a polite request.
3. **A human gate on anything irreversible.** Sending money, emailing a customer, changing the live site: those wait for a person to say yes. The agent can prepare the action all day. It does not get to pull the trigger.

## How to size it for your business

You do not need the technical version. You need one question, asked of anything you let run on its own: if this goes completely wrong, what is the worst it can reach?

If the answer is a draft folder, relax. If the answer is your bank, your customers, or your live website, agreeable instructions are not enough. That work needs the three boundaries above, especially the human gate, before you trust it unattended.

## The takeaway

Guardrails made of words are comfortable to write and the first thing to fail when someone pushes. The agents worth trusting with real work are not the ones with the sternest prompt. They are the ones that were never handed the ability to do the dangerous thing, and that have to ask before doing anything you cannot undo. Build the doors, then let it run inside them.
