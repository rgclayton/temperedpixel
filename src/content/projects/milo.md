---
title: Milo
type: engineering
featured: true
placeholder: false
summary: Code owner and primary U.S.-hours engineer on the shared platform powering millions of adobe.com visitors — the review gate across the full block library, a technical resource other teams route through, and the engineer bridging a distributed team across two continents.
year: "2021–present"
role: Senior Front-End Engineer
tags: [JavaScript, CSS, Franklin, AEM, Web Performance]
github: https://github.com/adobecom/milo
live: https://adobe.com
order: 1
size: large
---

## Overview

[AEM](https://www.aem.live/) is Adobe's own document-based web publishing platform, used by companies large and small to build and manage web properties. Milo is Adobe's custom implementation of AEM built specifically for adobe.com — extending the platform to meet the scale and complexity of supporting the entire Adobe.com marketing organization and the hundreds of teams creating pages under it. As a code owner on both `adobecom/milo` and the Forge deployment repo, and the primary Milo engineer during U.S. hours, I'm a daily review and merge gate for platform output and the first technical resource other teams reach for when they're working in the Milo codebase.

## What I do

**Code ownership** — no change merges to production without going through the code-owner review chain — across every block, component, and shared service in the library. That covers routine updates, large batched production pushes, and anything that needs to be held until external dependencies clear — including platform-level accessibility improvements that don't belong to any one page team but have to get done right.

**U.S. timezone coverage** — the core engineering team is based in Eastern Europe. By the time the U.S. day starts, their overnight work is already queued for review. Being the consistent U.S.-side presence means the platform keeps moving around the clock rather than waiting 24 hours for a response.

**The engineer other teams route through** — whether the question is how a block works, whether a proposed change fits the platform's conventions, or whether something is safe to ship at this scale.

**Security engineering** — investigated and fixed two linked vulnerabilities: one where unvalidated URL parameters allowed attackers to steal an author's Microsoft Graph access token via client-side config injection, and a follow-on where the OAuth configuration itself was being sourced from an unvalidated client-fetched config. Both fixed and shipped.

**Authoring enablement** — presented at a Milo Authoring Demo covering Marquee theming per breakpoint and video handling, helping the broader authoring community understand new capabilities as they shipped.

## What I've learned

Code ownership at this scale is mostly invisible — the changes that don't ship wrong, the question answered before it becomes a ticket, the production gate held until the right moment. The value shows up in what doesn't go wrong.
