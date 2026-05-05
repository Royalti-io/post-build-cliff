---
title: Env vars in production
description: Where secrets actually live, how to set them without redeploying, and why your local machine should never know your prod database password.
sidebar:
  order: 3
---

An environment variable — env var for short — is a value your app reads at runtime instead of having hard-coded in the source. It's how you keep the same code talking to different databases (dev / staging / prod), with different keys, without ever putting those keys in version control.

If you understood that paragraph, you already have the model. The rest is mechanics.

## The minimum rule

There are exactly three places an env var should ever exist:

1. **Your local `.env` file** — for development on your machine. Gitignored. Never shared.
2. **Your hosting provider's env-var settings page** — for production. Set in the browser, encrypted at rest, injected into your app at runtime.
3. **A teammate's password manager entry** — for the rare case you need to share a value securely.

Anywhere else is wrong. *Especially* not Slack, email, screenshots, or the AI tool's chat history.

## How to set them in production

The browser-based flow is the same on every modern platform. Open your hosting dashboard, find the "Environment Variables" or "Secrets" or "Settings → Variables" section, type the name and value, save.

| Platform | Where to find it |
|---|---|
| Cloudflare Pages | Project → Settings → Environment variables |
| Vercel | Project → Settings → Environment Variables |
| Netlify | Site → Site settings → Environment variables |
| Railway | Project → Service → Variables |
| Fly.io | `fly secrets set NAME=value` (CLI) |

Two principles to apply on every platform:

- **Set values per environment.** Production gets `STRIPE_SECRET_KEY=sk_live_…`, preview gets `STRIPE_SECRET_KEY=sk_test_…`. Never mix.
- **Redeploy after changing values.** Most platforms inject env vars at build or boot time, not on every request. Change a value, then trigger a new deploy, or the change won't take.

## Reading env vars in code

The exact syntax depends on your stack, but the shape is the same.

```javascript
// Node.js / Next.js / most JS frameworks
const apiKey = process.env.OPENAI_API_KEY;

// Python
import os
api_key = os.environ.get("OPENAI_API_KEY")

// Astro
const apiKey = import.meta.env.OPENAI_API_KEY;
```

If your AI tool generated code with hard-coded keys, this is the refactor: replace the literal value with `process.env.WHATEVER` and put the literal in your env settings.

> **↯ If you've shipped hard-coded keys to production**
>
> 1. **Rotate the key first** in the provider's dashboard (see [Lost data & exposed keys](/01-the-cliff/lost-data/)).
> 2. Add the new key as an env var in your hosting provider.
> 3. Replace the hard-coded value in code with `process.env.WHATEVER`.
> 4. Redeploy.
> 5. Verify it works in production with a tiny end-to-end test.

The order matters. Rotate before refactor — if you refactor first, the old key is still active and still leaked.

## Naming, case, and the .env.example trick

Convention: env var names are `SCREAMING_SNAKE_CASE`. Don't fight this; every tool expects it.

The `.env.example` trick is the most useful pattern in this whole lesson. Commit a file called `.env.example` to your repo containing:

```bash
# .env.example — committed to git, no real values
OPENAI_API_KEY=sk-replace-me
STRIPE_SECRET_KEY=sk_live_replace-me
DATABASE_URL=postgres://user:pass@host/db
```

Anyone who clones the repo (including future-you, on a new laptop) can copy `.env.example` to `.env` and know exactly which variables they need to fill in. The values are missing; the *shape* is documented.

This single file prevents the most common AI-built-app onboarding failure: "I cloned the repo and it doesn't work because I don't know which env vars to set."

## Skills you'll pick up

- Setting an env var in your hosting provider without breaking anything
- Replacing a hard-coded value with `process.env.X` and verifying the app still works
- Maintaining `.env.example` as a living onboarding document
- Knowing which platform reads env vars at build vs runtime (and what to do about it)

## References & further reading

- [The Twelve-Factor App · Config](https://12factor.net/config) — five-minute read; the canonical mental model
- [Cloudflare Pages · Environment variables](https://developers.cloudflare.com/pages/configuration/build-configuration/#environment-variables) — concrete walkthrough
- [Vercel · Environment Variables](https://vercel.com/docs/projects/environment-variables) — same, for Vercel
- [Doppler](https://www.doppler.com/) — when you have multiple services and want a single source of truth across them. Free tier is generous; ignore until you need it.
