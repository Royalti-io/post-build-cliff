# The Post-Build Cliff

A small, free, opinionated course for non-technical founders shipping AI-built software into the real world.

**Live:** [post-build-cliff.pages.dev](https://post-build-cliff.pages.dev)

**Modules:**
1. [The Cliff](https://post-build-cliff.pages.dev/01-the-cliff/overview/) — exposed keys, lost data, public repos by accident, the 11pm deploy
2. [Minimum Competence](https://post-build-cliff.pages.dev/02-minimum-competence/overview/) — just-enough git, env vars, reading logs, restoring backups
3. [The Hiring Line](https://post-build-cliff.pages.dev/03-hiring-line/overview/) — when to stop learning and start hiring, who to hire, four interview questions

Plus a curated [tools, libraries & references](https://post-build-cliff.pages.dev/reference/skills-and-libraries/) index.

## Stack

- [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/) — static site, zero JS by default
- Tailwind for any custom styling
- [Pagefind](https://pagefind.app/) — built into Starlight, fully client-side search
- Deploys as static files (Cloudflare Pages, Netlify, GitHub Pages, anywhere)

## Local dev

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # static output in ./dist
```

## Content

All lessons are markdown in `src/content/docs/`. Three modules:

1. `01-the-cliff/` — what the post-build cliff is
2. `02-minimum-competence/` — the smallest viable curriculum
3. `03-hiring-line/` — where to stop learning and start hiring

Plus `reference/` for a tools index.

Add a lesson by dropping a `.md` file into the right folder with frontmatter:

```yaml
---
title: My lesson
description: One-line summary.
sidebar:
  order: 3
---
```

## Contributing

PRs welcome. The whole point is that this stays a living document.
