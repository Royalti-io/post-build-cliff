---
title: Skills & libraries for Claude Code users
description: Pre-built skills, libraries, and starter kits to extend what Claude Code can do.
sidebar:
  order: 2
---

This page is a curated, opinionated index. Inclusion means *we've used it on a real build and would recommend it to a friend*, not just that it exists.

## Anthropic-published skills (start here)

Anthropic ships an [official skills repo](https://github.com/anthropics/skills) with skills you can install into your local Claude Code or Claude.ai. Highlights for non-technical founders:

| Skill | What it does | When you'd reach for it |
|---|---|---|
| **pdf** | Read, edit, merge, split, and create PDFs | Investor docs, contracts, course materials |
| **docx** | Open, read, edit `.docx` files | Anything Word-based your lawyer or accountant sends |
| **xlsx** | Spreadsheets — read, write, analyse | Pricing sheets, board financials, cap tables |
| **pptx** | Build and edit PowerPoint decks | Pitch decks, investor updates |
| **frontend-design** | Production-grade UI generation | Working prototypes you can share with users |
| **canvas-design** | Branded visual graphics (PNG/PDF) | Social posts, infographics, slide hero images |
| **mcp-builder** | Builds new MCP servers for Claude | Connecting Claude to your own tools/data |
| **skill-creator** | Bootstraps new skills | When you find yourself doing the same task by hand twice |

Install: `git clone` the repo, then drop the skill folder into `~/.claude/skills/`. Each has its own `SKILL.md` explaining when it triggers.

## Community skills worth installing

These are skills we use on real projects. Each one extends Claude Code with patterns or domain knowledge that would otherwise take weeks to gather. Every link below was verified to resolve at the time of writing — see the [link-curator](#) audit for our quarterly freshness process.

### Building & shipping

- **[scrollytelling](https://github.com/doodledood/claude-code-plugins/tree/main/claude-plugins/frontend-design/skills/scrollytelling)** — Pinned-narrative landing pages, scroll-driven storytelling, parallax. Used to build *this* site's landing page.
- **[claude-design](https://claude.ai/design)** — Anthropic's hosted design tool for pitch decks, prototypes, one-pagers, marketing pages, and interactive explainers. Best zero-to-prototype path.
- **shadcn skill** — Manages [shadcn/ui](https://ui.shadcn.com/) components: add, search, fix, debug, compose. Often distributed as part of team plugin bundles rather than as a single public repo; ask in the shadcn community Discord or check your team's plugin index.

### Design system discipline

- **[StyleSeed (ss-setup / ss-audit / ss-lint / ss-a11y / ss-review / ss-feedback / ss-update)](https://github.com/bitjaru/styleseed)** — Set up a design system, audit screens against Nielsen heuristics, lint for design-system violations, audit accessibility, add appropriate user-feedback states. The closest thing to having a design lead in your terminal.
- **[theme-factory](https://github.com/anthropics/skills/tree/main/skills/theme-factory)** — Apply themes consistently across slides, docs, reports, HTML pages.
- **[brand-guidelines](https://github.com/anthropics/skills/tree/main/skills/brand-guidelines)** — Anthropic's example skill for applying official brand colours and typography. Useful as a template for your own brand-guideline skill.

### Design exploration

- **huashu-design** — HTML-first hi-fi prototypes, design variants, slide decks, motion design. The skill that produces designs that don't look AI-generated. *Note: license restricts commercial/enterprise use — the author requires authorisation for for-profit deliverables. Personal use is fine. Check the SKILL.md license clause before deploying inside a paid product.*

### Visual & motion content

- **[canvas-design](https://github.com/anthropics/skills/tree/main/skills/canvas-design)** — Branded visual graphics (PNG/PDF) using a design philosophy rather than a template. Stat cards, social frames, infographics.
- **[algorithmic-art](https://github.com/anthropics/skills/tree/main/skills/algorithmic-art)** — Generative art with p5.js + seeded randomness. Surprisingly useful for blog hero images and social cards that don't look stock.
- **[GSAP](https://gsap.com/docs/)** — Not a Claude skill but the canonical animation library most front-end skills assume. Their docs are excellent; once you've read the ScrollTrigger page you can drop ten different "fancy scroll" effects without ceremony.

### Interactive things

- **[web-artifacts-builder](https://github.com/anthropics/skills/tree/main/skills/web-artifacts-builder)** — Build calculators, demos, quizzes, mini-tools as React components on Tailwind. The "engineering as marketing" play, automated.
- **[frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design)** — Production-grade UI generation with judgement about hierarchy, spacing, and rhythm — not just "render some Tailwind."

### API integration patterns

- **[claude-api](https://github.com/anthropics/skills/tree/main/skills/claude-api)** — Build apps with the Claude API/Anthropic SDK. Prompt caching, model migration, tool use, extended thinking, batch APIs.

### Documents & spreadsheets

- **[pdf](https://github.com/anthropics/skills/tree/main/skills/pdf)** — Read, edit, merge, split, create PDFs. Form-fills, table extraction.
- **[docx](https://github.com/anthropics/skills/tree/main/skills/docx)** — Open, read, edit `.docx` files. For everything your lawyer or accountant sends.
- **[xlsx](https://github.com/anthropics/skills/tree/main/skills/xlsx)** — Spreadsheets — read, write, analyse. Pricing sheets, board financials, cap tables.
- **[pptx](https://github.com/anthropics/skills/tree/main/skills/pptx)** — Build and edit PowerPoint decks. Pitch decks, investor updates.

### Foundation skills (almost everyone should install these)

- **[skill-creator](https://github.com/anthropics/skills/tree/main/skills/skill-creator)** — Bootstraps the file structure for a new skill. Use this the first time you find yourself doing the same task by hand twice.
- **[mcp-builder](https://github.com/anthropics/skills/tree/main/skills/mcp-builder)** — Builds new MCP servers so Claude can talk to your own tools and data.
- **[doc-coauthoring](https://github.com/anthropics/skills/tree/main/skills/doc-coauthoring)** — Structured workflow for writing real documentation with Claude. Different from "generate me some docs."
- **[webapp-testing](https://github.com/anthropics/skills/tree/main/skills/webapp-testing)** — Playwright-based interaction and verification of local web apps. The fastest way to test a UI without learning testing frameworks.
- **[internal-comms](https://github.com/anthropics/skills/tree/main/skills/internal-comms)** — Templates for the most common internal communications (status updates, change announcements, decision memos).
- **[slack-gif-creator](https://github.com/anthropics/skills/tree/main/skills/slack-gif-creator)** — Constraints + concepts for animated GIFs optimised for Slack. Useful when "let me show you" beats "let me explain."

### Specialist patterns (mostly internal, but worth knowing exist)

Some of the skills we use day-to-day live in private team plugin indexes — they're packaged for our specific workflows rather than published as standalone skills. Mentioned here for completeness; if you're at a team building similar infra, these are patterns worth replicating yourself:

- **image-generation** — Optimised prompting patterns for Gemini and OpenAI image models, including model-selection heuristics (Gemini Flash for visual/creative, GPT Image for text-heavy)
- **exa-integration** — [Exa AI](https://exa.ai/) search + Websets for semantic prospect research and list-building
- **brightdata-integration** — [Bright Data](https://brightdata.com/) web scraping via a CLI wrapper for real public data
- **streaming** — SSE streaming patterns for Claude API real-time interfaces
- **hyperframes** + **hyperframes-cli** — Video compositions on top of Remotion (animations, voiceovers, audio-reactive visuals)

If you're a non-technical founder and these sound interesting — they should — the [skill-creator](https://github.com/anthropics/skills/tree/main/skills/skill-creator) skill will help you write your own version in an afternoon.

## Libraries you'll keep reaching for

Static-site generators, deploy tools, and helpers that play well with AI-generated code.

### Site generators

- **[Astro](https://astro.build/)** — Zero-JS by default, MDX content, deploy as static files anywhere. What this course is built on.
- **[Starlight](https://starlight.astro.build/)** — Astro's docs-site theme. Free sidebar, search (Pagefind), dark mode, accessibility.
- **[VitePress](https://vitepress.dev/)** — Vue-based docs site, smaller surface area than Starlight if you want something quieter.
- **[Eleventy (11ty)](https://www.11ty.dev/)** — Plain-old templating, no framework lock-in, great for "I just want a fast site."

### Hosting

- **[Cloudflare Pages](https://pages.cloudflare.com/)** — Free, fast, generous free tier, deploys on `git push`.
- **[Netlify](https://netlify.com/)** — Excellent DX, slightly faster to outgrow into expensive than Cloudflare.
- **[Railway](https://railway.app/)** — Pick this when you need a backend or a database.
- **[Fly.io](https://fly.io/)** — Same niche as Railway, more knobs.

### Search (no backend)

- **[Pagefind](https://pagefind.app/)** — Static, fully-client-side site search. Built into Starlight.
- **[Fuse.js](https://fusejs.io/)** — In-browser fuzzy search if you're rolling your own.

### Animation & UI

- **[GSAP](https://gsap.com/)** — Industry-standard animation library; ScrollTrigger is the gold-standard scroll-linked tool.
- **[Motion (Framer Motion)](https://motion.dev/)** — React animation; declarative API, smaller bundle than GSAP for simple things.
- **[Lenis](https://lenis.darkroom.engineering/)** — Smooth scroll, used alongside GSAP for cinematic landing pages.
- **[shadcn/ui](https://ui.shadcn.com/)** — Copy-paste accessible React components, design-system friendly.
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS. Pairs well with AI-generated code because the styles live next to the markup.

### Auth, payments, data

- **[Clerk](https://clerk.com/)** / **[Supabase Auth](https://supabase.com/auth)** — Hosted auth. Don't roll your own.
- **[Stripe](https://stripe.com/)** — Payments. Their docs and AI-friendly SDK are the benchmark.
- **[Supabase](https://supabase.com/)** / **[Neon](https://neon.tech/)** — Postgres with a UI, free tiers that aren't a trap.

### Backups & storage

- **[Cloudflare R2](https://www.cloudflare.com/products/r2/)** — S3-compatible object storage, no egress fees.
- **[AWS S3](https://aws.amazon.com/s3/)** / **[Backblaze B2](https://www.backblaze.com/cloud-storage)** — Alternatives if you're already in those ecosystems.

### Compliance starter kits

- **[GDPR Checklist](https://gdpr.eu/checklist/)** — The 28 things you actually need to do, as a list.
- **[Stripe Atlas Guides](https://stripe.com/atlas/guides)** — Best free incorporation + early-company playbook on the internet.
- **[Vanta](https://www.vanta.com/)** / **[Drata](https://drata.com/)** — When SOC2 starts coming up in sales calls.

## Should you install or build a skill?

Build when:

1. You've done the same task by hand twice.
2. The task has structure (steps, templates, checklists) you can write down.
3. You'd describe the process to a junior in under 200 words.

Install when someone else has clearly already done it well — the bar for "well" is *the SKILL.md tells you exactly when to trigger it*. If the description is vague, build your own. The [skill-creator](https://github.com/anthropics/skills) skill bootstraps the file structure for you.
