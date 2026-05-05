---
name: course-lesson-structure
description: Lesson template, structural checklist, and editorial pattern for The Post-Build Cliff course. Use when drafting, reviewing, or refining any lesson markdown file under src/content/docs/0X-*/. Enforces the lede-rule-recovery-skills-references pattern that makes lessons scannable, actionable, and consistent across modules.
---

# Course Lesson Structure

The Post-Build Cliff is built around a repeatable lesson shape. This skill defines that shape so every lesson — written months apart, by different contributors — feels like one voice.

## Triggers

Use this skill whenever:
- Drafting a new lesson under `src/content/docs/0X-*/` or `src/content/docs/reference/`
- Reviewing an existing lesson before commit
- Re-writing a stale lesson during the quarterly content audit
- Converting a long blog/Twitter thread into a lesson

## Non-triggers

Don't use this skill for:
- Marketing copy (use `copywriting` instead)
- Landing page sections (use `scrollytelling` + `huashu-design`)
- Reference index pages where the structure is naturally tabular (resources, glossaries)

## The lesson shape

Every lesson must have these blocks, in this order. Skipping a block requires an explicit reason in the PR description.

```markdown
---
title: <Sentence-case title, max 6 words>
description: <≤ 160 chars, what the reader walks away with>
sidebar:
  order: <number>
---

<LEDE — 1-3 sentences. State the cliff/risk in concrete terms.
Never start with "In this lesson" or "Welcome to". Just say the
thing the reader showed up to learn.>

## <Section heading — concrete noun, not "Overview">

<EXPOSITION — explain the *why* before the *how*. Use plain language.
Italicise emphasis sparingly; never bold whole sentences.>

### The minimum rule

<ONE rule, stated as a single sentence the reader can paste into their
brain. This is the load-bearing sentence of the lesson. If you can't
write it, you don't understand the lesson well enough yet.>

```code
# Concrete artefact — the .env, .gitignore, command, or config
# the reader needs to copy. Keep it under 15 lines.
```

> **↯ If it's already happened**
>
> <RECOVERY — for cliff lessons, the "you're already in the bad state"
> playbook. 3-5 imperative steps. No theory.>

### <Optional sub-section — recovery, sanity check, or worked example>

<ELABORATION — only if the minimum rule needs nuance. Most lessons
don't. Resist adding this section "for completeness" — completeness
is the enemy of action.>

## Skills you'll pick up

- <Skill 1 — verb-first, concrete, testable>
- <Skill 2>
- <Skill 3-5 max>

## References & further reading

- [<Title>](url) — <One-line why-this-matters, ≤ 12 words>
- [<Title>](url) — <Same shape>
```

## The eight standards (enforce on every lesson)

Adapted from the broader `editorial-standards` skill, tightened for this course's voice.

1. **Lede states the cliff in plain terms.** Concrete consequence, not abstract framing. ❌ "Security is important." ✅ "Your OpenAI key gets harvested in under 5 minutes if you push your `.env`."
2. **One rule per lesson.** A lesson with three "minimum rules" is three lessons.
3. **Show, then tell.** A code block, command, or screenshot before the explanation. People skim first, read second.
4. **Recovery before theory.** If the lesson covers a cliff, the "if it already happened" block must come before any deep explanation.
5. **Mentor voice, not lecturer voice.** "Don't try to remove the commit" beats "It is recommended that you avoid attempting commit removal." Plain English; second-person; no hedging.
6. **No filler stats or scary numbers** unless they have a citation in the references block. Numbers without sources are slop.
7. **End with capability, not conclusion.** The "Skills you'll pick up" block lists what the reader can now *do*, not "what we covered." No "in this lesson, we learned…" closers.
8. **Every external link earns its line.** No "see also" dumps. If a link doesn't move the reader forward by one concrete step, cut it.

## Word counts (rough targets, not hard limits)

| Block | Target | Hard cap |
|---|---|---|
| Lede | 30-60 words | 80 |
| Each section body | 80-200 words | 350 |
| Minimum rule sentence | One sentence | One sentence |
| Code block | 5-15 lines | 25 |
| Recovery block | 30-100 words | 150 |
| Skills bullets | 3-5 items | 6 |
| References | 3-7 links | 10 |
| Whole lesson | 400-900 words | 1400 |

If you blow past the hard cap, the lesson is two lessons.

## Voice anchors

When unsure, ask: *would a tired-but-kind senior engineer say this to a friend at the bar?* If the answer is no, rewrite.

- ✅ "Don't try to remove the commit. Assume the key is already harvested."
- ❌ "It is generally inadvisable to attempt commit history rewriting in this scenario, as the credential should be assumed compromised."

- ✅ "If you can't tell which of your keys are public, you're standing at the edge."
- ❌ "Lack of visibility into credential exposure represents a significant risk vector."

## Lesson types & when to use which

| Type | Shape | Examples |
|---|---|---|
| **Cliff lesson** | Lede → Why it hurts → Minimum rule → Recovery → Skills | "Lost data & exposed keys", "The 11pm deploy" |
| **Skill lesson** | Lede → Why this skill → Minimum rule → Worked example → Skills | "Just-enough git", "Reading logs" |
| **Decision lesson** | Lede → The line → Signals → Options table → Evaluation criteria | "Where learning ends, hiring begins" |
| **Reference lesson** | Lede → Curated list (tabular if ≥4 items) → How-to-use note | "Tools index", "YouTube channels" |

Each type uses the same blocks; only the emphasis shifts. A cliff lesson centers on **recovery**; a skill lesson centers on **the worked example**; a decision lesson centers on **the options table**; a reference lesson centers on **curation discipline**.

## Quality checklist (run before commit)

- [ ] Lede passes the "concrete cliff" test — names a real consequence
- [ ] Minimum rule is exactly one sentence and survives copy-paste
- [ ] Code block (if any) under 15 lines and runnable as-shown
- [ ] Recovery block present for cliff lessons
- [ ] Voice anchor test — would a tired-but-kind senior engineer say this?
- [ ] Word count under hard caps
- [ ] Every link earns its line
- [ ] Skills list is verb-first and testable
- [ ] No filler stats without citation
- [ ] No "in this lesson, we learned…" closer

## Output

When invoked to draft a lesson, produce the full markdown file at the correct path (`src/content/docs/0X-section/slug.md`), conforming to the shape above, ready to commit. When invoked to review, output a checklist with ✅/❌ per standard plus 1-3 specific suggested edits.
