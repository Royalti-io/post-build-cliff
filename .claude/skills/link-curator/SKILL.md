---
name: link-curator
description: Link curation, freshness review, and inclusion-criteria enforcement for the resources pages of The Post-Build Cliff. Use when adding links to skills-and-libraries.md, tutorials-and-courses.md, youtube-channels.md, or any reference index page; or when running a quarterly freshness audit on existing links.
---

# Link Curator

Resource pages decay. Tools die. Free tiers tighten. YouTube channels go inactive. Tutorials reference deprecated APIs. Without active maintenance, a resources page becomes an active anti-recommendation — and once a reader hits one dead link, they stop trusting the rest.

This skill keeps those pages honest.

## Triggers

Use this skill when:
- Adding a new link to any reference page (`src/content/docs/reference/*.md`)
- Running the quarterly freshness audit (every 90 days, or on the first business day of Jan/Apr/Jul/Oct)
- A user reports a broken or stale link
- After any major industry shift (new model launch, big acquisition, pricing change)

## Inclusion criteria — the four-question test

Before any link is added, it must pass all four questions. Each gets a yes/no answer logged in the PR description.

### Q1. Is it free or has a meaningful free tier?

The whole course is free. A link to a $200/mo tool with no free tier breaks the contract.

- **Free** — go.
- **Meaningful free tier** (does the actual job at hobby scale) — go.
- **Free trial then paid** — only include if the trial is ≥30 days *and* the tool is genuinely category-leading.
- **Paid only** — exclude unless it's the only option in its category and the reader is going to need it eventually anyway (Stripe, hosting at scale).

### Q2. Has it been used by a real person we know?

If the answer is "I read about it on Hacker News," it doesn't go in. Resources pages are not aggregators — they are recommendations from people who've been burned and lived.

The bar: someone we know (the writer, a contributor, a named reader) has *used the thing on a real project* and would recommend it to a friend.

If we're including it because it's industry-standard but nobody on the team has used it (e.g., S3 — yes, of course), call that out in the link description: *"Industry standard; we use Cloudflare R2 ourselves but S3 is the equivalent in AWS shops."*

### Q3. Is it stable enough to recommend?

- ≥ 2 years old (or maintained by an org that's > 2 years old)
- Active commits / posts / videos in the last 90 days
- Not on any deprecation roadmap we know of

Exception: very new tools that are *clearly* eating their category (initial Claude Code launch, initial Linear, initial Astro) can go in early — but flag them: *"New as of <month/year>; revisit at next freshness audit."*

### Q4. Does it solve a problem the founder *actually has*?

The audience is non-technical founders shipping AI-built software. Not engineers. Not marketers. Not designers (though design tools count if a non-tech founder needs them).

- ✅ Hosting, version control, auth, payments, backups, monitoring, AI tooling, founder education
- ❌ Esoteric programming languages, kernel hackery, advanced DevOps, ML research papers
- ❌ "Cool tool I found" — solves no problem in the curriculum

## Annotation format

Every link gets a one-line annotation. Format:

```markdown
- **[<Tool/Resource Name>](url)** — <One-line why-this-matters, ≤ 14 words.>
```

The annotation must answer: **why this and not its category alternative?** "Cloudflare Pages — free, fast, generous free tier, deploys on `git push`" passes. "Cloudflare Pages — a hosting platform" fails (it's just describing it).

For tools we recommend specifically over a known alternative, name the alternative:

```markdown
- **[Cloudflare R2](url)** — S3-compatible, no egress fees. Pick this over S3 unless you're already in AWS.
```

## Categories — what goes where

| Page | Lives at | Goes in |
|---|---|---|
| **Skills & libraries** | `reference/skills-and-libraries.md` | Pre-built skills, code libraries, frameworks, dev tools |
| **Tutorials & courses** | `reference/tutorials-and-courses.md` | Free educational content (videos, courses, written tutorials, docs) |
| **YouTube channels** | `reference/youtube-channels.md` | Recurring video sources worth subscribing to (not one-off videos) |
| **Tools index** | `reference/tools.md` | Hosting, infrastructure, services (the *running-the-business* layer) |

When unsure, pick the page where the link best fits the reader's *moment of need*. If a reader asks "what tool should I use to deploy?" they go to `tools.md`. If they ask "I need to learn how to deploy," they go to `tutorials-and-courses.md`.

## The quarterly freshness audit

Every 90 days, walk every link in every reference page. For each:

1. **HTTP check** — does the URL still resolve? (Use a script if the list is long.)
2. **Content check** — does the page still describe what we said it does? (Tools rebrand, docs move, channels pivot.)
3. **Freshness check** — has the resource been updated/published-on in the last 90 days? (Stale-but-good resources stay; abandoned-and-now-misleading resources get pulled.)
4. **Pricing check** — has the free tier shrunk? Has the trial period changed?

Output a short audit report:

```
# Freshness Audit — YYYY-MM-DD

## Removed (N)
- [Tool name] (page) — reason

## Updated annotations (N)
- [Tool name] (page) — what changed

## New (N)
- [Tool name] (page) — why added

## Watch list (N)
- [Tool name] (page) — concern, recheck on YYYY-MM-DD
```

Commit the audit report under `.company/audits/links/YYYY-MM-DD.md` so the curation is itself version-controlled and reviewable.

## Anti-patterns to refuse

- **Affiliate links.** Hard no. Even disclosed. Once any commercial incentive enters, the page can't be trusted.
- **"Sponsored" or "Featured" listings.** Same reason.
- **Lists of every tool in a category.** That's an aggregator's job, not ours. We pick 2-3 per category, opinionated.
- **"Helpful for some readers but not others."** If you can't write a single-sentence reason, the link doesn't belong.
- **Broken-but-popular links.** Popularity is not a substitute for working. A link to a 404 hurts the reader.
- **Self-promotion.** Links to the writer's own paid courses, products, or affiliate-bearing content.

## Output

When invoked to **add a link**: produce the formatted annotation, log the four-question answers in the message back to the user, and propose the file + section it should land in.

When invoked to **run a freshness audit**: produce the audit report markdown, ready to commit. Don't make destructive changes (deleting links, rewriting annotations) without explicit user approval — output a diff for review first.
