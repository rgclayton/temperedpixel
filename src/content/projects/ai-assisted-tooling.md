---
title: AI-Assisted Tooling
type: engineering
featured: false
placeholder: false
summary: Agent workflows that turn component code into verified documentation, prototype redesign pages from existing components, and take repetitive work off the team's plate, so more time goes to the problems that need judgment.
year: "2026"
role: Senior Front-End Engineer
tags: [AI Agents, Automation, Documentation, Accessibility, Developer Tooling]
order: 4
size: wide
tabletSize: normal
image: /projects/ai-assisted-tooling/cover/ai-tooling-cover.png
---

## Overview

The Site Redesign moved faster than its documentation, prototyping, and review work could keep up by hand. Every new component needed an authoring guide, every design direction needed a way to test against real content, and every review cycle needed someone to separate genuine issues from noise. Instead of absorbing that as overhead, I started building AI-assisted workflows around it, with clear checks on what the AI produced and a person accountable for the result.

The goal was never to automate judgment away. It was to take the repetitive, well-defined parts of the work off the team's plate, while keeping review, verification, and decisions where they belong.

## What I built

**Authoring guide workflow** — reads a component's implementation and drafts an authoring guide for the content teams who build pages with it. A separate agent then rebuilds the documented examples using only the published instructions, with no access to the code or the original drafts. If it can't reproduce the examples, the instructions aren't finished. Dozens of guides have gone through the workflow, which now produces several per day compared with roughly one per day by hand.

**A workflow that improves with each run** — the workflow doesn't learn on its own. Each guide surfaces something to tighten, such as a layout check, a stricter workspace boundary, or a requirement to verify the published page rather than a local draft, and those lessons get written back into the instructions so the next guide starts from a better baseline.

**Page prototyping** — recreates live adobe.com pages from existing components, so the team can test how a redesign direction holds up against real content before engineering starts. That makes the gaps visible early, while they're still design decisions rather than rework.

**Code-to-Figma specifications** — piloting component specifications generated from live code, keeping design tokens aligned between engineering and Figma, so design and code are describing the same system.

**Design review prototype** — pairs AI visual review with measured accessibility checks. In prototype testing, the combination cut false color-contrast warnings from 15 to 3, keeping attention on issues that need human review.

**Faster component delivery** — the same AI-assisted approach has shortened component builds from weeks to days, while engineering judgment and code review stay with the team.

[Otto](/work/otto) is the personal side of the same approach: an agent-assisted tracker that scans Slack, email, and Teams for anything that needs a follow-up.

## What I've learned

AI is most useful when the workflow is designed to catch its mistakes. Independent verification, explicit stopping points, and a habit of writing lessons back into the process matter more than the first draft any model can produce. The result isn't less engineering; it's more of the team's time spent on the work that needs it.
