---
title: The minimum you need to learn
description: Five non-negotiables, a "not yet" list of things you're tempted to learn but shouldn't, and the fastest path through each.
sidebar:
  order: 1
---

You do not need to become a software engineer. You do need a thin layer of operational competence so that you are not at the mercy of every tool and every contractor.

This is the layer.

## The non-negotiable five

Each one matters because skipping it puts you back at the cliff. None of them takes more than a Saturday to learn well enough.

1. **Git, just enough** — clone, commit, push, pull, branch, revert. Not rebase. Not interactive add. Not anything fancy.
2. **Environment variables** — what they are, where they live, how to set them in production without redeploying.
3. **A version-controlled deploy** — pushing to a branch causes a deploy. No "click publish" button as the source of truth.
4. **Reading logs** — when something breaks, the answer is almost always already printed somewhere. Find it.
5. **One backup you've actually restored from** — until you've restored, you don't have a backup. You have a bet.

That's the whole list. Five things. None of them is a programming skill — they're operational skills around the work, not the work itself.

## The "nice but not yet" list

Things you'll be tempted to learn before the five above. **Don't.** They're useful eventually; they're a distraction now.

- DNS and custom domains beyond pointing one A record
- Database schema design
- Anything involving Kubernetes, Docker, or "infra"
- Writing tests
- CI/CD pipelines beyond "deploy on push"
- Monorepos, microservices, "scaling architecture"
- Anything described as "best practices" without a specific reason

The reason these are *not yet* and not *no*: most of them are real skills with real value at the right stage. But for a non-technical founder building their first AI-assisted thing, learning Kubernetes is the founder equivalent of learning to weld before you've finished learning to drive. It signals seriousness without delivering it.

## How to learn each, fast

The whole curriculum is a Saturday and a Sunday if you commit. Each row in the table below has *one* primary resource — the shortest viable path — and a single practice rep that proves you've done it.

| Skill | Best 60-min resource | Practice rep |
|---|---|---|
| Git | [The Missing Semester · Git](https://missing.csail.mit.edu/2020/version-control/) | Make 10 commits to a real repo, including one revert |
| Env vars | Your hosting provider's "environment variables" docs | Move one secret from code to env, redeploy, confirm it still works |
| Deploy from git | Cloudflare Pages or Vercel "connect a repo" walkthrough | Deploy a hello-world, then change one word and watch it auto-deploy |
| Reading logs | Your hosting provider's "logs" tab | Trigger an error on purpose (`throw new Error('test')`), find it in the logs |
| Restoring a backup | Your DB provider's restore docs | Restore a backup to a *non-production* copy. Compare row counts |

The "practice rep" column is the part most people skip. Reading without doing is procrastination dressed up as learning.

## The order to learn them in

Strong order: **git → env vars → deploy → logs → restore.**

Each unlocks the next. Without git, you can't deploy from a branch. Without env vars, you can't separate dev from prod. Without a real deploy pipeline, you don't have logs to read. Without logs, you don't know when to restore. Without ever testing a restore, your backup isn't real.

Don't start somewhere fun and circle back. Start at the start. The lessons that follow walk through each one.

## Skills you'll pick up in this module

- The five operational primitives that mean you're no longer dependent on the tool you built in
- A shared vocabulary for talking to engineers without sounding lost
- The judgement to recognise when a "best practice" is actually right *for you, right now*

## References & further reading

- [The Missing Semester of Your CS Education](https://missing.csail.mit.edu/) — MIT's "things they don't teach you in class," all free
- [The Twelve-Factor App](https://12factor.net/) — twelve principles for building software that survives contact with production
- [Atlassian · Git Tutorials](https://www.atlassian.com/git/tutorials) — best free git reference, with diagrams that actually help
