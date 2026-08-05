---
title: Show it once and it remembers
description: The newest AI tools let you demonstrate a task once, then turn that demonstration into a reusable skill. The bar to automate just dropped. The part that decides whether it helps or hurts did not.
date: 2026-07-28
tags: ['Automation', 'AI agents']
draft: false
---

> When copying a human is this easy, the hard part is no longer building the automation. It's deciding what is safe to hand over, and noticing that a recording captures what you did, not why you did it.

![A four-step cycle. Demonstrate it once, it drafts a skill, test the exceptions (the part the demo hides), reuse it, then back to the start.](/lab/show-it-once.svg)

In July 2026, a new class of AI feature landed, and it's worth understanding even if you never touch it. You do a task once, on screen, while the tool watches, and it drafts a reusable skill from what it saw. Claude's [record-a-skill feature](https://www.youtube.com/watch?v=cBdFhHyEW4Y) does this. OpenAI's [Record & Replay](https://learn.chatgpt.com/docs/extend/record-and-replay) follows the same pattern in ChatGPT and Codex: demonstrate a workflow, review the skill it drafts, refine the important decisions, and reuse it.

The pitch is that anyone can now automate a task without being technical. That's mostly true, and it's a real shift. But it moves the hard part rather than removing it.

## Show it once, then test it

The old barrier was building. To automate a task you needed someone who could write the steps out in code. That's the part these tools take over. Show it once and it has a first draft. Then comes the part the demo hides: test it on the variations and exceptions the one run did not include.

A single pass through a task almost always captures the happy path. It misses the odd input, the exception you handle without thinking, the login that sometimes fails, the little preference you never said out loud. The recording caught what you did. It didn't catch why you did it, or what you'd have done if the situation were a little different. That gap is where a recorded skill quietly goes wrong.

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
- It touches customers, money, or anything you can't take back.

The mistake is treating the second pile like the first just because the tool made recording feel easy. A recorded skill can safely file a document. A workflow that sends money should never rely on one alone.

## Where it leaves you

Record-and-replay is a real step forward, and it'll put automation in a lot more hands. Use it for the small, stable, low-stakes stuff and enjoy it. Two things to keep in mind. The skill it drafts is a first pass, not a finished worker, so test it before you lean on it. And it copied what you did, not why you did it, so the judgment that made you good at the task is still yours. The tool got better at copying the steps. Figuring out which parts of your work should be copied at all is still on you.
