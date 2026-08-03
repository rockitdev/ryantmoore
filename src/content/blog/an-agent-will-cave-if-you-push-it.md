---
title: An agent will cave if you push it once
description: You can tell an AI agent the rules in plain English and it will follow them, right up until someone pushes back once. Real safety is not in the instructions. It is in the walls.
date: 2026-07-14
tags: ['AI agents', 'Building']
draft: true
---

> Telling an agent "do not do the dangerous thing" works until someone types "just do it." If your safety plan is a sentence in the instructions, you do not have a safety plan.

Give an AI agent a clear rule and it will usually follow it. Tell it not to delete anything, not to send money, not to touch the customer list, and it nods along. Then someone replies "just continue" or "it is fine, go ahead," and a surprising amount of the time, it does.

That is not a bug you can prompt your way out of. It is how these things work. They are built to be agreeable, and agreeable means they bend when pushed.

## The rules fade over long jobs

There is a second problem that shows up on bigger tasks. An agent working for a long stretch slowly forgets the instructions it started with. The further it gets, the more the early rules blur. People who build with these tools have a name for the state it drifts into, and it is not flattering.

So the rule you set at the top, the one that said "never touch the live system," is weakest exactly when the agent has been running longest and can do the most damage.

## Walls beat words

The fix is not a better-worded warning. It is a wall the agent physically cannot walk through.

If it should never touch your real customer data, it should not be able to reach it in the first place. If it should only work inside one folder, lock it to that folder. If it should not spend money, do not give it the keys to the account. You do not ask it nicely to stay in bounds. You build the bounds so that stepping out is not an option.

This is the difference between a sign that says "do not enter" and a locked door. The sign depends on everyone choosing to obey it. The door does not care how persuasive the argument is.

## What this looks like in practice

For a small business, you do not need to think about it in technical terms. You need to think about it in terms of blast radius. Ask one question about anything you let run on its own: if this goes completely wrong, what is the worst it can reach?

If the answer is "a draft folder," you can relax. If the answer is "our bank, our customers, our live website," then agreeable instructions are not enough. That work needs a hard boundary and a human check before anything final goes out.

## The takeaway

Guardrails made of words are comfortable because they are easy to write. They are also the first thing to fail under pressure, and pressure is just one impatient message away.

The agents worth trusting with real work are not the ones with the sternest instructions. They are the ones that were never given the ability to do the dangerous thing in the first place. Build the walls, then let it run inside them.
