---
title: Who to hire when
description: Contractor vs fractional CTO vs agency vs full-time. What each is good for, what each costs, and where the traps are.
sidebar:
  order: 3
---

There are roughly four shapes of technical help available to a non-technical founder. They solve different problems. Picking the wrong shape is the most expensive hiring mistake you can make at this stage — more expensive than picking a mediocre individual within the right shape.

## The minimum rule

Match the shape of the help to the shape of the problem.

- **One-off problem, narrow scope** → contractor
- **Decisions you can't make alone, ongoing** → fractional CTO
- **Big project, fixed deadline, you don't want to manage it** → agency
- **The build is the company, you have funding** → full-time engineer

That's the whole heuristic. The rest of this lesson is what each shape actually involves and what it costs.

## The four shapes

| Role | Best for | Watch out for | Typical cost |
|---|---|---|---|
| **Freelance contractor** | Specific, scoped work — a feature, a fix, a migration | No long-term ownership; will move on | £400-£800/day, project rate |
| **Fractional CTO** | Strategic technical voice in your room, not full-time labour | Often busy with other clients; demand defined hours | £1.5k-£5k/month for 4-12 hrs |
| **Agency** | Coordinated team, fixed deadline, you don't want to manage individuals | Paying for layers of management; quality varies wildly | £20k-£200k per project |
| **Full-time engineer** | The build *is* the company and you've raised | Senior is £8k-£14k/mo all-in (UK); they need *real* work to do | £80k-£180k/yr + on-costs |

Costs are 2026 ballparks for the UK / Europe / North America corridor. They scale up in SF, down in Eastern Europe, way down in good parts of Asia.

## Freelance contractor — when scope is clear

A contractor works best when you can hand them a specific deliverable: *"Migrate our app from Replit to Cloudflare Pages, including DNS setup, env var migration, and a one-page handover doc. Fixed price. Two weeks."*

Where it goes wrong: you hand them the whole codebase with no scope and ask them to "make it production-ready." That's a fractional CTO problem, not a contractor problem — but the contractor will quote you for it because they want the work, and three weeks in, both of you are unhappy.

**Find them on:** Toptal, Arc, Toptal-style marketplaces, your network's recommendations. Avoid Fiverr and Upwork for technical work above the most trivial — the signal-to-noise ratio is terrible.

**Interview them with:** the four interview questions in the [next lesson](/03-hiring-line/four-interview-questions/). Same questions; the difference is you're hiring for a project, not a relationship.

## Fractional CTO — when you need judgement, not labour

A fractional CTO sits in your room (literally or virtually) for 4-12 hours a month and helps you make decisions you can't make alone. They don't ship code; they review it. They don't run sprints; they help you run sprints.

This is the role most non-technical founders most underestimate. The leverage is enormous — for the cost of about half a day of senior contractor time per month, you get someone whose primary job is *to be on your side of the table* when you're evaluating engineers, agencies, architecture decisions, and quotes.

**When to use:** any time signal 5 from the [previous lesson](/03-hiring-line/five-signals/) is true (you can't evaluate a quote). Also when you're about to hire your first full-time engineer — let them help you run the process. They've done it before; you haven't.

**Find them on:** GoFractional, CTO-as-a-Service marketplaces, your investor network if you have one. Many ex-startup-CTOs will take 1-2 fractional clients between full-time gigs.

**The trap:** they're often busy. Get specific about hours upfront. "Up to 8 hours a month, with a 24-hour response SLA on Slack messages" beats "as needed."

## Agency — when you need a team and a deadline

Agencies are useful for one thing: coordinated, deadlined work that you do not want to manage day-to-day. A redesign. A specific feature with a launch deadline. A migration that touches many systems.

The trap is that agencies sell themselves as good for everything — "we'll be your technical co-founder," "we'll handle your whole roadmap." When you hire an agency to be your engineering team forever, you end up with a coordination tax (their PMs, their account managers, their handoffs) on every decision, and a strong incentive for them to keep the work going.

**When to use:** a defined project with a defined budget and a defined deadline, where you'd rather pay 1.5x to have someone else manage it.

**When not to use:** ongoing product engineering. That's a full-time hire.

**Vet them by:** asking for references from clients whose projects ended *more than a year ago* and who are still using what was built. References from current clients are useless — agencies pick those.

## Full-time engineer — when the build is the company

If you've raised money and the build is what the money's for, hire a full-time engineer. There's no shortcut. The fractional / agency setup eventually breaks because nobody has full ownership of the codebase.

**When to use:** post-funding, with at least 12 months of runway, and a problem space large enough to keep one engineer busy full-time.

**When not to use:** pre-revenue, pre-funding, just to have one. A full-time engineer with no clear work will either invent work (often the wrong work) or quit.

**The hire to make first:** a senior generalist who's shipped at small companies before. Not a specialist. Not a junior. Not a "10x engineer" (the term is a flag).

A senior generalist at a small company has done the whole loop themselves — backend, frontend, deploys, on-call, debugging weird issues. That's the shape of work you have. Specialists are for when you have specialised work.

> **↳ Sanity check before hiring full-time**
>
> Can you afford 12 months of their full salary right now, with the funding you have? If no, you're hiring on a runway you don't have. Either raise more first, or stay fractional until you do.

## The mixed setup that works at this stage

For most non-technical founders shipping AI-built software, the right setup for the first 12-18 months is:

- **You** — keep building with AI tools, doing the founder work
- **Fractional CTO, 4-8 hrs/month** — strategic voice, code reviews on big changes, hire-line judgement
- **One contractor on call** — for specific projects (migration, integration, feature) as they come up

This costs £2k-£6k a month in total and gives you everything except a full-time builder. You become full-time-builder material when revenue or funding makes it justifiable, not before.

## Skills you'll pick up

- Matching shape-of-help to shape-of-problem before you go to market
- Pricing 2026 ballparks across roles so you can spot wildly off-market quotes
- Spotting the "agency over-sells" pattern and walking away
- Knowing when fractional is enough and when full-time is the only answer

## References & further reading

- [GoFractional](https://gofractional.com/) — marketplace for fractional execs including CTOs
- [Toptal](https://www.toptal.com/) — vetted contractor network; expensive but consistent
- [Lenny's Newsletter · How to hire your first engineer](https://www.lennysnewsletter.com/) — search the archive
- [First Round Review · The Hiring Field Guide](https://review.firstround.com/topic/hiring) — operator-led guides, free, deep
- [Will Larson · Lethain on Hiring](https://lethain.com/hiring-funnel/) — for when you're running a real process, not just a vibe-check
