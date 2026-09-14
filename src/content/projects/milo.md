---
title: Milo
type: engineering
featured: true
placeholder: false
summary: Shared library powering adobe.com — components, services, and authoring tools across the entire Adobe web platform.
year: "2021–present"
role: Senior Front-End Engineer
tags: [JavaScript, CSS, Franklin, AEM, Web Performance]
github: https://github.com/adobecom/milo
live: https://adobe.com
order: 1
---

## Overview

The Adobe.com homepage is the front door for millions of visitors globally. In early 2026, the Milo team undertook a full visual and architectural redesign. I worked as a lead engineer for the engineering team that built and shipped it — one of the most technically demanding projects I've worked on at Adobe.

## What I built

**Explore-Card & Bento layouts** — a flexible card system used throughout the page, including parallax scroll effects. I built the first iteration of the bento grid as a fully-authorable layout using CSS `grid-template-areas` — then made the call to move to baked-in variants after realising the authoring complexity would have been unworkable in practice. Sometimes the right engineering decision is the less elegant one.

**SEO architecture** — designers wanted h2 headings in the rotating marquee; SEO required a single h1 on the page. I built a `visually-hidden` block that satisfies both constraints without compromising either.

**Performance engineering** — animation at this scale is expensive. I helped track and addressed LCP bottlenecks including commerce scripts preloading before the LCP element, worked with the Commerce platform team to resolve them, and helped establish performance as a first-class concern throughout the build — not an afterthought.

**Code architecture** — standardised how all homepage blocks handle per-breakpoint logic by moving the pattern into a shared `decorate.js`. Collaborated with the team to migrate blocks to the new pattern pre-launch, keeping engineering consistent across a complex codebase with a tight timeline.

## What I learned

Timeline pressure and late design requests are a constant tension on a project like this. Holding the line on performance while keeping momentum — and doing it clearly without stopping the team — is as much the job as writing the code.
