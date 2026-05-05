---
title: Lost data & exposed keys
description: The two falls that hurt most and are easiest to prevent. Read this before you push anything to a public repo.
sidebar:
  order: 2
---

A "key" is a password your app uses to talk to other services — Stripe, OpenAI, your database. If it ends up in a public place, anyone can use your account on your dime. The bots that scrape GitHub for keys are *fast*: published key to first unauthorised use is often under five minutes.

## Exposed keys

You will hear two kinds of advice about keys. The first is "rotate them." The second is "use a secret manager." Both are correct. Neither will help you if the rule below isn't internalised first.

### The minimum rule

If a value would let someone else **spend your money** or **read your users' data**, it goes in a `.env` file, never in the code, and `.env` goes in `.gitignore`.

```bash
# .env — never commit this
OPENAI_API_KEY=sk-…
STRIPE_SECRET_KEY=sk_live_…
DATABASE_URL=postgres://…

# .gitignore — always commit this
.env
.env.*
!.env.example
```

> **↯ If it's already happened**
>
> Don't try to "remove the commit." Assume the key is already harvested.
>
> 1. Rotate every key in the providers' dashboards. Stripe, OpenAI, your DB host — each has a "regenerate" or "revoke" button. Do this *first*, before you touch the repo.
> 2. Move the secrets out of the code into environment variables in your hosting provider (Cloudflare, Vercel, Railway, etc.).
> 3. Verify with `git status` that `.env` is no longer tracked. If it still is, run `git rm --cached .env` and commit the change.

The reason rotation comes before cleanup: even if you delete the commit and force-push, anyone who cloned in the window already has it. The key is the thing that matters; the repo is just the leak.

## Lost data

Platforms churn. Their free tiers change. Their databases reset. **If your data only lives in one place, it doesn't really exist.**

### The minimum rule

Anything you'd cry about losing gets exported on a schedule you actually run.

Three categories, in priority order:

- **Database** — daily dump to your own cloud storage (R2, S3, B2)
- **Uploaded files** — mirrored to object storage *you* control
- **Code** — pushed to GitHub at least daily, in a private repo until you mean it to be public

> **↳ Sanity check**
>
> If you can't answer *"where would I get this back from if the platform disappeared tonight"* — you don't have a backup. You have a bet.

### Restore once, then you're done

The first backup you make doesn't count. The first one you've successfully *restored* from does. Restore it once, on a non-production copy. Confirm the data is intact. Then you have a backup.

This step is the one people skip because it feels paranoid. It's the one that catches every silent backup failure — wrong format, wrong permissions, wrong region, wrong credentials. None of these show up until you try to read the backup back.

## Skills you'll pick up

- Rotating an exposed API key safely, in the right order
- Writing a `.gitignore` that catches `.env` *and* `.env.local`, `.env.production`, etc.
- Setting up a recurring database export to object storage you own
- Running a restore drill against a non-production copy

## References & further reading

- [The Twelve-Factor App · Config](https://12factor.net/config) — why secrets belong in env vars, not code
- [GitHub · Removing sensitive data from a repository](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository) — the official "I already pushed it" guide
- [OWASP · Secrets management cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html) — the longer, more thorough version
- [GitGuardian · State of Secrets Sprawl](https://www.gitguardian.com/state-of-secrets-sprawl-report-2024) — the numbers on how fast leaked keys get used
