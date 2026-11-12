---
title: Adobe.com Site Redesign
type: engineering
featured: true
placeholder: false
summary: Technical lead on Adobe.com's largest visual redesign — owning the platform-level work that lives between teams, translating design intent across engineering, authoring, and localization, and shipping the systems that every product page on the platform is built on.
year: "2026"
role: Senior Front-End Engineer
tags: [JavaScript, CSS, Design Tokens, Performance, Accessibility, Technical Leadership]
order: 1
size: wide
tabletSize: normal
image: /projects/adobe-site-redesign/cover/adobe-homepage.png
---

## Overview

Adobe.com's Site Redesign kicked off in December 2025 and is still underway. It started with the homepage and is moving outward — Business product pages first, then Creative product pages, then Creator — with the goal of eventually reaching every level of the organization under adobe.com. It's not a small refresh. Updated typography, new colors, and an entirely new token system built around Spectrum but curated specifically for Adobe.com's needs add up to a new design direction for the platform. Alongside that, a new design team brought different ideas and a different way of working — collaborating under aggressive timelines while the visual language was still being defined.

My role spanned the full pipeline — sitting with the design team to work through what was possible, pushing back on what wasn't, and proposing new approaches when neither the design nor the existing platform had a ready answer. From there, engineering the feature, then working with the Global Web Production team to implement the actual content and assets the design called for — content that ultimately gets localized to markets and languages around the world. Design, engineering, and authoring are three different disciplines with three different definitions of "done," and a big part of this project has been making sure the work moves cleanly across all three.

## Engineering

**Shared component systems** — owned foundational pieces of the redesign's component system end to end, from design tokens and responsive behavior to the interactions between shared components. The hard problems were rarely the tokens themselves; they were the edge cases where systems met, and the missing details that needed resolving with design before engineering could ship.

**Performance** — tracked page-load bottlenecks as a distinct engineering effort, investigated performance regressions on high-traffic pages, and led engineering for a foundational design-token launch.

**Accessibility** — owned accessibility improvements across shared components, from media alternatives and color contrast to semantic structure and motion. Raised risks early and brought teams together to resolve patterns before they became formal issues.

**Block component delivery** — shipped fixes and new variants across the redesign's component library, spanning layout, content, media, navigation, and calls to action.

**Wave coordination** — co-led the development of a change-impact matrix that categorized every engineering change as display-only, authoring-required, or global-stylesheet — giving production and content teams a clear picture of what each wave release actually required of them before a rollout window opened.

## Leadership

**Pulled in across the full pipeline, not just at the build stage** — present at every stage: design spec, production handoff, engineering pickup. Led authoring handoff sessions where the content team compared live test pages against Figma specs and flagged anything that needed engineering follow-up before launch.

**Shaped how work got scoped** — sat in on backlog triage and intake reviews, giving direct input into how requests entered the engineering queue. Held the line on engineering needing a complete per-breakpoint spec before writing a PR.

**Escalation point on performance and accessibility** — a standing member of the dedicated performance effort and multiple accessibility review sessions; when questions came up across the broader team, they came here first rather than going through a formal process.

## Live pages

- [Adobe.com Homepage](https://www.adobe.com/)
- [Acrobat](https://www.adobe.com/acrobat.html)
- [Acrobat Studio](https://www.adobe.com/acrobat/acrobat-studio.html)
- [Acrobat PDF & Document Essentials](https://www.adobe.com/acrobat/pdf-and-document-essentials.html)
- [Acrobat Plans](https://www.adobe.com/acrobat/plans.html)
- [Photoshop](https://www.adobe.com/products/photoshop.html)
- [Premiere](https://www.adobe.com/products/premiere.html)
- [Creative Cloud Pro (All Apps)](https://www.adobe.com/creativecloud/creativity-and-design.html)
- [Creative Cloud Pro](https://www.adobe.com/creativecloud/pro.html)

## What I learned

A redesign this large runs on horizontal decisions that don't belong to any single page team — shared systems, accessibility standards, and performance priorities. Being useful meant stepping into that gap deliberately, and absorbing enough ambiguity that other people weren't stuck waiting on a decision.

## Screenshots

![Adobe.com homepage](/projects/adobe-site-redesign/adobe-homepage.png)
