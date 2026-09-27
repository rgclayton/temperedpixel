---
title: Adobe.com Site Redesign
type: engineering
featured: false
placeholder: false
summary: Technical lead on Adobe.com's largest visual redesign — owning the platform-level work that lives between teams, translating design intent across engineering, authoring, and localization, and shipping the systems that every product page on the platform is built on.
year: "2026"
role: Senior Front-End Engineer
tags: [JavaScript, CSS, Design Tokens, Performance, Accessibility, Technical Leadership]
order: 1.5
size: tall
---

## Overview

Adobe.com's Site Redesign kicked off in December 2025 and is still underway. It started with the homepage and is moving outward — Business product pages first, then Creative product pages, then Creator — with the goal of eventually reaching every level of the organization under adobe.com. It's not a small refresh. Updated typography, new colors, and an entirely new token system built around Spectrum but curated specifically for Adobe.com's needs add up to a new design direction for the platform. Alongside that, a new design team brought different ideas and a different way of working — collaborating under aggressive timelines while the visual language was still being defined.

My role spanned the full pipeline — sitting with the design team to work through what was possible, pushing back on what wasn't, and proposing new approaches when neither the design nor the existing platform had a ready answer. From there, engineering the feature, then working with the Global Web Production team to implement the actual content and assets the design called for — content that ultimately gets localized to markets and languages around the world. Design, engineering, and authoring are three different disciplines with three different definitions of "done," and a big part of this project has been making sure the work moves cleanly across all three.

## Engineering

**Rounded-corners system** — owned the border-radius engineering end-to-end across every surface of the redesign. The hard problems weren't the tokens themselves — they were the interactions: z-index conflicts with parallax scroll animations, double negative margins on adjacent sections, and per-breakpoint values that design had only specified at desktop, requiring repeated pushback to get a complete spec before a PR could be written.

**Performance** — identified and tracked LCP bottlenecks as a distinct engineering track from other performance work running in parallel. Investigated a critically low Lighthouse score on a product page caused by an unoptimized hero video, and served as the engineering lead for the homepage spacing token launch.

**Accessibility** — owned multiple accessibility issues across the redesign: an informative hero video missing a required transcript, color-contrast failures in product page animation frames, heading-level hierarchy violations, and bento card text contrast over imagery. Proactively flagged that animated scroll behavior at high zoom levels would need to be disabled until a proper fix was in place, and organized a cross-team meeting on semantic heading structure in merch cards before it became a formal ticket.

**Block component delivery** — shipped fixes and new variants across the full redesign component library: side-by-side body text over image cards, bento layout and token corrections, stroke removal across news and animated components, FAQ token updates, sticky CTA, short marquee variant, globe variant, and featured card with video modal and ambient video support.

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

## What I learned

A redesign this large runs on horizontal decisions that don't belong to any single page team — the token system, the heading-hierarchy call, the LCP audit. Being useful meant stepping into that gap deliberately, and absorbing enough ambiguity that other people weren't stuck waiting on a decision.
