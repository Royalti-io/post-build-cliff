---
name: founder-voice-non-technical
description: Voice and tone guide for content aimed at non-technical founders shipping AI-built software. Use when drafting any reader-facing content for The Post-Build Cliff or similar founder-education work. Calmer than typical marketing copy; more honest than typical "expert" writing; mentor-not-guru posture.
---

# Founder Voice — Non-Technical

The audience is a non-technical founder who has built something working with AI tools and is now standing at the edge of "okay, so what now?" They are smart, busy, slightly anxious, and allergic to two things: jargon and hype.

This skill defines a voice that respects them.

## Triggers

Use this skill when drafting:
- Course lessons, landing-page copy, hero text, CTAs for The Post-Build Cliff
- Any educational content where the reader is a non-technical founder
- Founder-facing emails, intro letters, or guides outside the course
- Twitter / LinkedIn posts riffing on lessons in this course

## Non-triggers

Don't use this skill for:
- Royalti-specific brand content (use `royalti-brand-voice` or `royalti-founder-voice` instead — those have a music-industry register that doesn't fit a general founder audience)
- Technical documentation aimed at engineers (drop the mentor framing, use direct API-doc voice)
- Investor-facing pitch decks (different register — use `pitch-deck` skill)

## The five voice anchors

Each anchor has a positive form (what to do) and a negative form (what to avoid). When stuck, audit a sentence against all five.

### 1. Tired but kind

You're a senior who has shipped, broken things, fixed them, and lived. Not a guru. Not enthusiastic. Patient because you've been here.

- ✅ "Don't try to remove the commit. Assume the key is already harvested."
- ✅ "The first backup you make doesn't count. The first one you've successfully restored from does."
- ❌ "Pro tip: always use environment variables! 🔑"
- ❌ "It's super important to understand the critical role of secrets management in production environments."

### 2. Concrete over conceptual

Founders process pictures and consequences faster than principles. Lead with the artefact (the file, the command, the screen) before naming the concept.

- ✅ "Push `.env` to a public repo and within five minutes a bot is using your OpenAI key."
- ❌ "API keys must be properly managed to avoid security vulnerabilities."

### 3. Honest about cost

The reader's time and money are real. Acknowledge both. Never pretend something is "free" if it costs evenings, or "easy" if it cost the writer four hours.

- ✅ "This will take you about two hours the first time and twenty minutes every time after."
- ✅ "You can do this for free up to about 10k users; after that you're on a paid tier."
- ❌ "Setting this up is a breeze!"
- ❌ "Get production-grade auth in 5 minutes."

### 4. The line, not the destination

You're not trying to make the reader an engineer. You're helping them know where their competence should stop. Recurring framing throughout: *here's what you need to learn, here's what you don't, and here's where to hand off.*

- ✅ "You don't need to understand database replication. You do need to know that your database has backups, when they were last tested, and who would restore them if you couldn't reach them."
- ❌ "Let's master the fundamentals of distributed systems together."

### 5. Punk, not edgy

You'll occasionally use a strikethrough, a sharp aside, or a no-bullshit line. Not to be cool — because softening it would lie. Use sparingly; one moment of sharpness per lesson is enough.

- ✅ "Most 'build an app in 20 minutes' videos end where this course begins."
- ✅ "If you can't answer *where would I get this back from if the platform disappeared tonight* — you don't have a backup. You have a bet."
- ❌ "Smash that subscribe button if you want more!"
- ❌ "🔥 This will blow your mind 🔥"

## The forbidden register

Don't write like:

| Register | Example | Why it's wrong |
|---|---|---|
| **Influencer** | "Here's the ONE THING I wish I knew earlier..." | Manipulative; we're educators not creators |
| **Course-bro** | "By the end of this module you will MASTER..." | Overclaims; reader can smell it |
| **Corporate** | "Best-in-class solutions for scaling teams" | Says nothing |
| **Cynical engineer** | "lmao good luck with your toy project" | Punching down; we're on the reader's side |
| **AI default** | "It's important to remember that..." | Slop opener; cut |

## Lexicon

Prefer the left column.

| Use | Avoid |
|---|---|
| founder | entrepreneur, builder, creator |
| ship / ship it | launch, deploy, release (when conversational) |
| the cliff | the gap, the chasm, the challenge |
| the line | the threshold, the inflection point |
| build / built | code / coded (when the reader didn't write code, they used AI) |
| your work | your IP, your asset, your product (when emotional weight matters) |
| AI tools | LLMs, GPTs, AI assistants (be specific: "Claude Code", "Replit") |
| if it already happened | in the event of a breach |
| harvested | exfiltrated, compromised |
| earn its line | provide value, justify inclusion |
| fall off the cliff | encounter difficulties, run into issues |

## Sentence shapes that work

- **Single-clause declaratives.** "Rotate every key. Move secrets to env vars. Verify with `git status`."
- **Conditional honesty.** "If three of these apply to you, you're standing at the edge."
- **Definition-then-action.** "A 'key' is a password your app uses to talk to other services. If it's public, anyone can use it."
- **Strikethrough emphasis.** "You don't need to ~~become an engineer~~. You need to know where your competence should stop."

## Sentence shapes that don't

- Long compound sentences with three commas
- Rhetorical questions in opening paragraphs ("Have you ever wondered…?")
- Lists of three abstract nouns ("clarity, focus, alignment")
- "We" when there is no we
- Em-dashes used for drama instead of clarification

## Calibration test

Before publishing, read the draft aloud at the pace of a tired Friday-evening conversation. If you stumble or sound like a podcast intro, rewrite. If it sounds like something you'd actually say to a friend who just shipped their first AI-built thing, ship it.

## Output

When invoked, apply this voice to the input draft. Output the rewritten draft in markdown, preserving structure. If the structure itself fights the voice (too many headers, too many bullets, too many "key takeaways" boxes), flag the structural issue separately.
