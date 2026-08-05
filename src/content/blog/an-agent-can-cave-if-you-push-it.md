---
title: An agent can cave if you push it once
description: Hand an AI agent the rules in plain English and it'll follow them, right up until someone pushes back. Real safety isn't better wording. It's a few things the agent flat-out can't do.
date: 2026-07-14
tags: ['AI agents', 'Building']
draft: false
---

> You can write an agent the rules in plain English and it'll follow them. Right up until someone pushes back. Real safety isn't better wording. It's a few things the agent flat-out can't do, no matter what you say to it.

![Nested boxes showing layered defenses around the dangerous stuff (money, customers, live site): least access on the outside, then hard execution limits, then a human gate.](/lab/an-agent-can-cave.svg)

Give an AI agent a clear rule and it usually listens: don't delete anything, don't send money, don't touch the customer list. Then someone types "just continue" or "it's fine, go ahead." Cole Medin, who builds with these tools every day, showed this in [his talk on running agents safely](https://www.youtube.com/watch?v=zb2LyMro77M): one follow-up was sometimes all it took to flip a careful agent into the risky move.

It helps to name what actually went wrong, because "the AI messed up" hides four different problems:

- **Persuasion.** A user talks it out of a rule it was given.
- **Injection.** Instructions hidden in a document or email it reads get treated as commands.
- **Drift.** On a long task it loses the thread. The more it piles up, the weaker the early rules get.
- **Blast radius.** It just had access to more than the job needed, so a slip reaches further than it should.

Four problems, one lesson: none of them get fixed by writing a sterner instruction.

## Build doors, not signs

The fix is structural. Build these once and the agent can't argue its way past them:

1. **Least access.** Give it the minimum and nothing more. If the job is drafting replies, it doesn't get the keys to the bank. What it can't reach, it can't break, no matter how you sweet-talk it.
2. **Hard limits on where it runs.** Lock it to one folder, one test copy, one sandbox with the network fenced off. A wall, not a polite request.
3. **A human gate on anything you can't undo.** Sending money, emailing a customer, changing the live site: those wait for a person to say go. The agent can tee it up all day. It doesn't get to pull the trigger.

## How to size it for your shop

You don't need the technical version. You need one question, asked of anything you let run on its own: if this goes fully sideways, what's the worst it can reach?

If the answer is a draft folder, relax. If the answer is your bank, your customers, or your live site, a polite instruction isn't enough. That work needs the three above, especially the human gate, before you trust it unattended.

## What it comes down to

Rules made of words are easy to type and the first thing to fold when someone leans on the agent. The ones I'd trust with real work aren't the ones with the strictest prompt. They're the ones that were never handed the ability to do the dangerous thing, and that have to ask before touching anything you can't take back. Build the doors, then let it run inside them.
