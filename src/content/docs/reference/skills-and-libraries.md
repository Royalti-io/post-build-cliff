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

- **[scrollytelling](https://github.com/doodledood/claude-code-plugins/tree/main/claude-plugins/frontend-design/skills/scrollytelling)** — Pinned-narrative landing pages, scroll-driven storytelling. Used to build *this* site's landing page.
- **[claude-code-patterns](https://github.com/anthropics/skills)** — Reference for creating your own agents, skills, and slash commands.
- **[doc-coauthoring](https://github.com/anthropics/skills)** — Structured workflow for writing documentation with Claude.

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
