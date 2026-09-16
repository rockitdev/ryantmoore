---
title: 'Give AI a regular job'
description: 'An agent does the same meeting follow-up every time you hand it notes. Same instructions, new notes, zero extra effort.'
date: 2026-09-16
tags: ['Automation', 'Integration']
draft: false
---

> An agent doing a recurring, well-defined job is buying back your time. Not once. Every time that job comes around.

![A loop diagram: Meeting notes feed into an Agent, which produces three outputs: Find follow-ups, Create and assign tickets, and Draft follow-up email. A return arrow loops back to the start: next meeting, same instructions, new notes.](/lab/give-ai-a-regular-job.svg)

I used to take notes manually, then create the tickets and write the follow-up email myself. But in a fast-paced work environment, you can get pulled in different directions. The follow-up gets delayed, and by the time you send the email, you can miss items from the meeting.

One thing I have used Notion AI for is taking meeting notes. Afterwards, I handed the notes to my orchestrator to action them.

All I had it do was find the follow-up items, create Jira tickets, assign them to the correct people, and put together a follow-up email that I then sent to the client.

If your first foray into AI is chats and prompts, you might use it to review a document, research a topic, or create an asset. But how do you make that process repeatable?

An agent can work a lot like a personal assistant. If you were hiring an assistant to help buy back your time, what would you give them to do?

That's the connection to Dan Martell's *Buy Back Your Time*: look at where your time goes, hand over work someone else can do, and decide what you'll do with the time you get back. [His explanation of the four levels](https://www.danmartell.com/4-levels-of-business-growth-explained/)

For meeting follow-up, you could save an instruction like this:

> Find the follow-up items in these notes. Use this project's team list to identify the owners. Check for existing tickets, then show me what you propose to create and assign. Ask me where anything is unclear. Create the tickets I approve and give me their links. Put together a follow-up email for me to send to the client.

Give it the notes, the project details, and the team list. Connect the ticket system if you want it to create the tickets. Next meeting, use the same instructions with the new notes.

ChatGPT is another place to try it, using the notes and whichever connected tools support the actions you need. OpenAI has a [meeting follow-up example](https://learn.chatgpt.com/use-cases/zoom-meeting-follow-ups) covering emails and CRM updates.

I handed my notes over manually. Automating that handoff could come later. First, check the tickets and the email. Did it capture what was agreed? Did the work end up with the right people?

If you would like help setting this up with your own tools, [get in touch](https://www.ryantmoore.ca/#contact).
