---
title: Public repos by accident
description: How .gitignore actually works, why it doesn't always save you, and the audit you should run today.
sidebar:
  order: 3
---

Every public-repo accident has the same root cause: somebody trusted a default. The default visibility was public, the default `.gitignore` was missing a line, the default behaviour of the AI tool was to push without asking. Defaults are not your friends here.

## The minimum rule

Every repo is private until you mean it to be public. And `.gitignore` only protects files you haven't already committed.

That second half is the one nobody warns you about. `.gitignore` is a list of files Git will *start* ignoring. It does nothing about files already in the history. If you committed `.env` once and then added it to `.gitignore`, the secret is still in every previous commit, sitting in the repo, waiting.

```bash
# Verify what's actually being tracked
git ls-files | grep -i env
# If anything comes back, you have a problem
```

## A 60-second audit you can run right now

Run these four commands in your project. If any of them returns something, stop reading and go fix it.

```bash
# 1. Is the repo public?
git remote -v
# Then visit the URL in your browser, check the "Public" / "Private" badge

# 2. Are any .env files tracked?
git ls-files | grep -E "\.(env|pem|key)"

# 3. Are there hard-coded secrets in the code?
git grep -E "(sk-|sk_live_|AKIA|ghp_|xox[bp]-)"

# 4. Is .gitignore present and useful?
cat .gitignore | grep -E "^\.env"
```

The third command is the one most people don't think to run. Even if your `.env` is properly ignored, the secret might still be hard-coded in `app.ts` or `config.js` from a moment when you "just wanted to test something."

> **↯ If your audit found something**
>
> 1. **Rotate the affected keys first** (see [Lost data & exposed keys](/01-the-cliff/lost-data/) for the full playbook).
> 2. Run `git rm --cached <file>` for any tracked files that shouldn't be tracked. Commit and push.
> 3. For secrets in the code, replace them with `process.env.WHATEVER` references and move the values to your hosting provider's env-var settings.
> 4. Don't bother trying to "remove the commit from history" unless your security team or a lawyer tells you to. The keys are already out; clean state matters more than clean history.

## Generating a `.gitignore` that catches things

Hand-writing a `.gitignore` from memory is how things slip through. Use [gitignore.io](https://www.toptal.com/developers/gitignore) — type your stack ("node", "next", "macos", "vscode") and it generates a starter. Paste it into `.gitignore` at the project root. Then add a few project-specific lines:

```bash
# Project-specific ignores
.env
.env.*
!.env.example
.DS_Store
*.log
*.sqlite
*.db
backups/
```

The `!.env.example` line is important — it lets you commit a *template* env file (with the keys but no values) so a new contributor knows what variables to set. New contributors include future-you on a different machine.

## Skills you'll pick up

- Reading the visibility status of a GitHub repo at a glance
- Auditing a project for already-committed secrets in 60 seconds
- Distinguishing `.gitignore` (going forward) from history rewrites (the past)
- Writing a `.gitignore` that uses `!` to allow templates while blocking real values

## References & further reading

- [gitignore.io](https://www.toptal.com/developers/gitignore) — generates starter `.gitignore` files for any stack
- [GitHub · About repository visibility](https://docs.github.com/en/repositories/creating-and-managing-repositories/setting-repository-visibility) — official docs on public vs private
- [git-secrets (AWS Labs)](https://github.com/awslabs/git-secrets) — pre-commit hook that prevents you from ever committing keys in the first place
- [TruffleHog](https://github.com/trufflesecurity/trufflehog) — scans repos (including history) for secrets you've already committed
