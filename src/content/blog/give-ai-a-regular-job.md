---
title: 'Give AI a regular job'
description: 'An agent does the same meeting follow-up every time you hand it notes. Same instructions, new notes, zero extra effort.'
date: 2026-09-16
tags: ['Automation', 'Integration']
draft: true
---

> An agent doing a recurring, well-defined job is buying back your time. Not once. Every time that job comes around.

![A loop diagram: Meeting notes feed into an Agent, which produces three outputs: Find follow-ups, Create and assign tickets, and Draft follow-up email. A return arrow loops back to the start: next meeting, same instructions, new notes.](/lab/give-ai-a-regular-job.svg)

Most people start with AI the same way: you open a chat, type a question, get an answer, and close the tab. One-off prompts for one-off problems. That works fine for a while. But at some point you find yourself doing the same thing after every meeting: take the notes, find the action items, cut the tickets, write the client email. And you are typing a fresh prompt every time. How do you make that repeatable?

That is what an agent is for. Think of it like hiring a personal assistant and handing them a standing job. [Dan Martell's *Buy Back Your Time*](https://www.danmartell.com/4-levels-of-business-growth-explained/) puts it plainly: figure out where your time goes, hand over the work someone else can handle, and put that time to better use. An agent is how you do that without hiring anyone.

I used to take the notes, cut the tickets, and write the client follow-up email by hand. In a busy week that email would slip. By the time I sent it, I had already missed a few things from the meeting.

Now I use Notion AI to take my meeting notes. After the call, I hand those notes to my agent and let it handle them. It finds the follow-up items, creates and assigns Jira tickets, and drafts the client email. I review and send.

Here is the instruction I saved. Paste it into your AI tool with the inputs filled in, then save it for next meeting:

> Find the follow-up items in [meeting notes]. Use [team members and responsibilities] to identify owners. Check for existing tickets in [project details], then show me what you propose to create and assign -- ticket title, task description, and suggested owner for each. If the notes or team list do not establish an owner, ask me before assigning anyone. Create the tickets I approve and give me their links. If you cannot reach my ticket system, draft the tickets for me to enter manually and flag that you could not check for duplicates. Put together a follow-up email for me to send to the client.

Give it the notes, the project details, and the team list. Next meeting, same instruction, new notes. ChatGPT works the same way with its connected tools -- OpenAI has a [meeting follow-up example](https://learn.chatgpt.com/use-cases/zoom-meeting-follow-ups) covering emails and CRM updates.

I handed the notes over manually. I can automate that handoff later. First, check the tickets and the email. Did it capture what was agreed? Did the work land with the right people?

If you want help setting up this meeting follow-up workflow with your own tools, [get in touch](https://www.ryantmoore.ca/#contact).
