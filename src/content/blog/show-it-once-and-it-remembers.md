---
title: Show it once and it remembers
description: The newest AI tools let you demonstrate a task once, then turn that demonstration into a reusable skill. The bar to automate just dropped. The part that decides whether it helps or hurts didn't.
date: 2026-07-28
tags: ['Automation', 'AI agents']
draft: false
---

> Copying a human just got easy. So the hard part isn't building the automation anymore. It's deciding what's safe to hand over, and remembering that a recording caught what you did, not why you did it.

![A four-step cycle. Demonstrate it once, it drafts a skill, test the exceptions (the part the demo hides), reuse it, then back to the start.](/lab/show-it-once.svg)

In July 2026 a new kind of AI feature showed up, and it's worth understanding even if you never touch it. You do a task once, on screen, while the tool watches, and it writes a reusable skill from what it saw. Claude's [record-a-skill feature](https://www.youtube.com/watch?v=cBdFhHyEW4Y) does this. OpenAI's [Record & Replay](https://learn.chatgpt.com/docs/extend/record-and-replay) does the same in ChatGPT and Codex: demonstrate a workflow, check the skill it drafts, fix the parts that matter, reuse it.

The pitch is that anyone can automate a task now without being technical. Mostly true, and a real shift. But it moves the hard part, it doesn't delete it.

## Show it once, then test it

The old wall was building. To automate a task you needed someone who could write the steps in code. That's the part these tools take over. Show it once and you've got a first draft. Then comes the part the demo hides: test it on the weird inputs and the exceptions the one run didn't include.

A single pass catches the happy path. It misses the odd input, the exception you handle without thinking, the login that fails every so often, the little preference you never said out loud. The recording caught what you did. It didn't catch why, or what you'd have done if things were a little different. That gap is where a recorded skill quietly goes wrong.

## A split that keeps you out of trouble

Before you record a task and lean on it, drop it in one of two buckets.

**Record it when:**

- The steps are visible and stable.
- You can tell at a glance when it worked.
- The inputs barely change.
- A mistake is cheap and easy to undo.

**Wire it properly when:**

- Systems need to swap real data reliably.
- The job needs retries or a record of what happened.
- Exceptions are common.
- It touches customers, money, or anything you can't take back.

The mistake is treating the second bucket like the first just because recording felt easy. A recorded skill can file a document fine. A workflow that sends money should never ride on one alone.

## Where it leaves you

Record-and-replay is a real step forward, and it'll put automation in a lot more hands. Use it for the small, stable, low-stakes stuff and enjoy it. Two things to hang onto. The skill it drafts is a first pass, not a finished worker, so test it before you lean on it. And it copied what you did, not why, so the judgment that made you good at the task is still yours. The tool got better at copying the steps. Working out which parts of your work should be copied at all is still the job.
