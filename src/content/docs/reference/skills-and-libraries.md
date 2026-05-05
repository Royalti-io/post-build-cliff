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

These are skills we (or the contributors) use on real projects. Listed roughly in order of "install first." Each one extends Claude Code with patterns or domain knowledge that would otherwise take you weeks to gather.

### Building & shipping

- **[scrollytelling](https://github.com/doodledood/claude-code-plugins/tree/main/claude-plugins/frontend-design/skills/scrollytelling)** — Pinned-narrative landing pages, scroll-driven storytelling, parallax. Used to build *this* site's landing page.
- **[shadcn](https://github.com/jpcraco/claude-code-plugins/tree/main/claude-plugins/shadcn)** — Search, install, debug, and compose [shadcn/ui](https://ui.shadcn.com/) components. The fastest way to a polished UI on top of Tailwind.
- **[huashu-design](https://github.com/doodledood/claude-code-plugins/tree/main/claude-plugins/frontend-design/skills/huashu-design)** — Hi-fi prototypes, design variants, slide decks, motion design — all using HTML as the medium. The skill that produces designs that don't look AI-generated.
- **[claude-design](https://claude.ai/design)** — Anthropic's hosted design tool for pitch decks, prototypes, one-pagers, marketing pages, and interactive explainers. Best zero-to-prototype path.

### Design system discipline

- **[ss-setup / ss-audit / ss-lint / ss-a11y / ss-review / ss-feedback / ss-update](https://github.com/Royalti-io/styleseed)** — The "StyleSeed" suite. Set up a design system, audit screens against Nielsen heuristics, lint for design-system violations, audit accessibility, add appropriate user-feedback states. The closest thing to having a design lead in your terminal.
- **[theme-factory](https://github.com/anthropics/skills)** — Apply themes consistently across slides, docs, reports, HTML pages.
- **[brand-guidelines](https://github.com/anthropics/skills)** — Anthropic's example skill for applying official brand colours and typography. Useful as a template for your own brand-guideline skill.

### Visual & motion content

- **[gsap](https://github.com/doodledood/claude-code-plugins/tree/main/claude-plugins/frontend-design/skills/gsap)** — GSAP animation reference: timelines, easing, ScrollTrigger, stagger. The library every animation tutorial assumes you already know.
- **[canvas-design](https://github.com/anthropics/skills)** — Branded visual graphics (PNG/PDF) using a design philosophy rather than a template. Stat cards, social frames, infographics.
- **[algorithmic-art](https://github.com/anthropics/skills)** — Generative art with p5.js + seeded randomness. Surprisingly useful for blog hero images and social cards that don't look stock.
- **[image-generation](https://github.com/anthropics/skills)** — Optimised prompting patterns for Gemini and OpenAI image models. Stops you from generating expensive 2K images when 1K does the job.

### Interactive things

- **[web-artifacts-builder / interactive-tools-builder](https://github.com/anthropics/skills)** — Build calculators, demos, quizzes, mini-tools as React components on Tailwind. The "engineering as marketing" play, automated.
- **[hyperframes](https://github.com/Royalti-io/hyperframes)** + **[hyperframes-cli](https://github.com/Royalti-io/hyperframes-cli)** — Video compositions, animations, voiceovers, audio-reactive visuals using Remotion. For when a screenshot doesn't sell it.

### Research & content

- **[exa-integration](https://github.com/anthropics/skills)** — Exa AI search and Websets for prospect research, semantic search, list-building. Faster than Googling.
- **[brightdata-integration](https://github.com/anthropics/skills)** — Bright Data web scraping via a CLI wrapper. For when you need real public data, not synthesised data.
- **[claude-api](https://github.com/anthropics/skills)** — Build apps with the Claude API/Anthropic SDK. Includes prompt-caching patterns, model migration helpers, and batch APIs.
- **[streaming](https://github.com/anthropics/skills)** — Server-Sent Events for Claude API. The right way to do real-time chat UIs.

### Documents & spreadsheets

- **[pdf](https://github.com/anthropics/skills)** — Read, edit, merge, split, create PDFs. Form-fills, table extraction.
- **[docx](https://github.com/anthropics/skills)** — Open, read, edit `.docx` files. For everything your lawyer or accountant sends.
- **[xlsx](https://github.com/anthropics/skills)** — Spreadsheets — read, write, analyse. Pricing sheets, board financials, cap tables.
- **[pptx](https://github.com/anthropics/skills)** — Build and edit PowerPoint decks. Pitch decks, investor updates.

### Foundation skills (almost everyone should install these)

- **[skill-creator](https://github.com/anthropics/skills)** — Bootstraps the file structure for a new skill. Use this the first time you find yourself doing the same task by hand twice.
- **[mcp-builder](https://github.com/anthropics/skills)** — Builds new MCP servers so Claude can talk to your own tools and data.
- **[claude-code-patterns](https://github.com/anthropics/skills)** — The canonical reference for agents, skills, and slash commands. Read once even if you don't think you'll build any.
- **[doc-coauthoring](https://github.com/anthropics/skills)** — Structured workflow for writing real documentation with Claude. Different from "generate me some docs."
- **[webapp-testing](https://github.com/anthropics/skills)** — Playwright-based interaction and verification of local web apps. The fastest way to test a UI without learning testing frameworks.

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
