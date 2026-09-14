---
title: Otto
type: engineering
featured: false
placeholder: false
summary: A personal work tracker that scans Slack, email, and Teams every morning and turns what needs a reply into one view — so I know what I owe people before I open any of them.
year: "2026"
role: Senior Front-End Engineer
tags: [JavaScript, Vanilla JS, Personal Tooling, Automation]
github: https://github.com/rgclayton/otto-app
order: 3
---

## Overview

Otto answers one question every morning: what do I owe people, and can I take on more — without digging through Slack, email, and Teams myself to find out. It's a small static web app paired with an agent skill that scans those three sources and turns anything that needs a follow-up into a task, or a "loop" — a thread that's waiting on my reply.

## What I built

**A capture/display split** — the scanning skill decides what counts as a task or a loop and writes it to a local data file; the app itself (one HTML file, one CSS file, one vanilla JS file — no framework, no build step) only ever reads and renders it. Keeping those responsibilities apart made both sides easier to get right independently.

**A real information architecture, not a single list** — Today, Week, Later, Loops, Teams, Archive, Rejected, and a dedicated Review mode. Loops are kept separate from tasks on purpose: "someone is waiting on me" and "I have work assigned" are different kinds of pressure, and conflating them was the first version's biggest mistake.

**A structural checker, not just a linter** — a small script that walks the rendered markup looking for the failure modes generic tooling misses in a single-file vanilla app: a view with no matching tab, a render function that's never wired into the main render loop, an event handler bound to an element that no longer exists. Syntax checking alone doesn't catch any of that; this does.

## What I learned

Building a tool only I would use removed every excuse to over-engineer it — no framework, no build step, just the smallest thing that could scan three inboxes and tell me the truth about my day. The capture/display split ended up being the one architectural call that made every later change easy: nine times out of ten, a change request turns out to be about how Otto shows what it already knows, not what it's allowed to know in the first place.
