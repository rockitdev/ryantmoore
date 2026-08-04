---
title: Show it once and it remembers
description: The newest AI tools let you demonstrate a task once, then turn that demonstration into a reusable skill. The bar to automate just dropped. The part that decides whether it helps or hurts did not.
date: 2026-07-28
tags: ['Automation', 'AI agents']
draft: false
---

> When copying a human is this easy, the hard part is no longer building the automation. It is deciding what is safe to hand over, and noticing that a recording captures what you did, not why you did it.

![A four-step cycle. Demonstrate it once, it drafts a skill, test the exceptions (the part the demo hides), reuse it, then back to the start.](/lab/show-it-once.svg)

In July 2026, a new class of AI feature landed, and it is worth understanding even if you never touch it. You do a task once, on screen, while the tool watches, and it drafts a reusable skill from what it saw. Claude's [record-a-skill feature](https://www.youtube.com/watch?v=cBdFhHyEW4Y) does this. OpenAI's [Record & Replay](https://learn.chatgpt.com/docs/extend/record-and-replay) follows the same pattern in ChatGPT and Codex: demonstrate a workflow, review the skill it drafts, refine the important decisions, and reuse it.

The pitch is that anyone can now automate a task without being technical. That is mostly true, and it is a real shift. But it moves the hard part rather than removing it.

## Show it once, then test it

The old barrier was building. To automate a task you needed someone who could write the steps out in code. That is the part these tools take over. Show it once and it has a first draft. Then comes the part the demo hides: test it on the variations and exceptions the one run did not include.

A single pass through a task almost always captures the happy path. It misses the odd input, the exception you handle without thinking, the login that sometimes fails, the small preference you never said out loud. The recording caught what you did. It did not catch why you did it, or what you would have done if the situation were slightly different. That gap is where a recorded skill quietly goes wrong.

## A split that keeps you out of trouble

Before you record a task and lean on it, sort it into one of two piles.

**Record it when:**

- The steps are visible and stable.
- You can easily tell when it worked.
- The inputs vary only a little.
- A mistake is cheap and easy to undo.

**Wire it properly when:**

- Systems need to exchange real data reliably.
- The job needs retries or a record of what happened.
- Exceptions are common.
- It touches customers, money, or anything you cannot take back.

The mistake is treating the second pile like the first because the tool made recording feel easy. Filing a document may be handled safely by a recorded skill. A workflow that sends money should never rely on one alone.

## The takeaway

Record-and-replay is a genuine step forward, and it will put automation in a lot more hands. Use it for the small, stable, low-stakes stuff and enjoy it. Just hold onto two things. The generated skill is a first draft, not a finished worker, so test it before you trust it. And it copied your actions, not your judgment, so the decisions that made you good at the task are still yours to check. The tool got better at copying what you do. Knowing which parts of your work should be copied is still the job.
