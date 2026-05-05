---
title: The 11pm deploy
description: Why it works in preview and breaks in production. Environment parity, the rollback you didn't know you had, and the rule of three.
sidebar:
  order: 4
---

It's 11pm. You pushed a change. The preview link works. You promoted to production. Production is broken. You don't know what changed between the two. The next two hours are going to be bad.

This lesson is about not having that night.

## Why the same code breaks in two places

Your code didn't change between preview and production. Something *around* your code did. The five suspects, in order of how often they're the cause:

1. **Environment variables.** Different keys, different URLs, different feature flags between preview and prod.
2. **Node / runtime version.** Your local dev is on Node 22, your hosting provider defaulted to Node 18.
3. **Database state.** Preview uses a clean staging DB; prod has six months of real user data with edge cases your code didn't expect.
4. **Build vs runtime.** A value baked at build time ("`NODE_ENV=development`") doesn't get re-evaluated when the container starts.
5. **Region / timezone / locale.** Your laptop is UTC; the prod server is in `America/Chicago`; your dates look wrong.

Almost every "works on preview, breaks on prod" bug is in this list.

## The minimum rule

Treat preview as a real test of production, or don't trust it at all.

That means: same env vars (with prod-equivalent values), same Node version, same database *shape* (migrations applied), same build pipeline. The only differences should be the data and the URL.

If your preview is "preview" because it's missing env vars or hits a different DB, your preview is lying to you.

## The rule of three

Three deploy targets, three audiences, three blast radii.

| Target | Who sees it | What runs there |
|---|---|---|
| **Local** | You | Whatever's in your editor right now |
| **Preview / staging** | You + invited testers | Real builds, real env vars, real-but-fake data |
| **Production** | Real users | Same code as preview, real data |

If you're missing the middle one, you're flying blind from local straight to users. If you're missing local and just iterate on preview, your iteration loop is too slow and your testing is too public.

> **↯ If your prod is on fire right now**
>
> 1. **Roll back first, debug second.** On Cloudflare, Vercel, Netlify, Railway — the deploy history page has a "promote previous version to production" button. Click it. Get back to a known-good state. *Then* think.
> 2. **Read the deploy logs.** The error is almost always there. Look for the first red/error line, not the last — the last is usually a downstream symptom.
> 3. **Diff the env vars.** Open preview and prod env-var pages side by side. Look for missing keys, typos, swapped staging/prod URLs.
> 4. **If you can't find it in 15 minutes, stop and message someone.** This is the moment a contractor or fractional CTO earns their fee. Don't dig the hole deeper at 11:47pm.

## Don't deploy on Friday afternoons

This is folk wisdom from every senior engineer who has ever lived. The reason: if it breaks, you and the people who could help you are about to be offline for 60+ hours. Production stays broken across a weekend; users churn; you don't sleep.

For a non-technical founder solo-shipping with AI tools, the lesson is: **don't deploy when you can't fix what comes after.** That includes Friday after 4pm, the night before a flight, the morning of an investor call, and any time you've had more than two beers.

## Skills you'll pick up

- Distinguishing build-time from runtime errors by reading deploy logs
- Diffing env vars between preview and production
- Rolling back a deploy on your hosting provider in under 60 seconds
- Knowing when to stop debugging and call for help

## References & further reading

- [The Twelve-Factor App · Dev/prod parity](https://12factor.net/dev-prod-parity) — the canonical mental model for why preview and prod must match
- [Cloudflare Pages · Rollback documentation](https://developers.cloudflare.com/pages/configuration/rollbacks/) — concrete rollback flow for Cloudflare-hosted sites
- [Vercel · Instant rollback](https://vercel.com/docs/deployments/managing-deployments) — same for Vercel
- [Charity Majors · Test in production](https://charity.wtf/2017/07/04/i-test-in-production-and-so-do-you/) — when staging isn't enough; advanced reading
