---
title: What the cliff looks like
description: The five most common falls — exposed keys, lost data, no version control, broken deploys, and unwitting compliance liability.
sidebar:
  order: 1
---

Most "build an app with AI" tutorials end at "it works on my screen." That ending hides a cliff. Below is what the cliff usually looks like in practice — five falls, ranked by how often we've seen people take them.

## The five most common falls

### 01. Secrets in a public repo

You pushed your `.env` to GitHub. Your OpenAI key, Stripe key, and database password are now scraped within five minutes — bots watch the GitHub event firehose specifically for new keys. The damage is whatever someone can do with your account before you notice.

### 02. Data loss with no backup

The platform you built on (Replit, Bolt, Lovable, a shared dev DB) lost or migrated state. There was no export. Your work — and possibly your users' — is gone. The first backup you make doesn't count. The first one you've successfully *restored* from does.

### 03. No version control

You can't roll back a bad change because every change overwrote the last one. The AI tool's "history" is not the same as version control — it's a session log, scoped to that tool, deleted when the tool is.

### 04. Deploys that break in production but not preview

It works on the preview URL. It breaks the moment you point your domain at it. The bug isn't in your code — it's in the gap between two environments you treated as identical. Different node versions, different env vars, different timezones, different secrets.

### 05. A user submits real data and you don't know what applies

The moment a real human's information lives in your system, you're technically liable, whether you knew the rules or not. GDPR, PII, payment data, child-safety rules — compliance is a line you cross, not a feature you ship.

## How to tell you're near the edge

Read this list slowly. Count the ones that are true today.

- You've never made a backup of anything you've built.
- You don't know which of your keys are public and which are private.
- "Deploy" and "publish" mean the same thing to you.
- You've never opened a terminal that wasn't an AI tool's.
- You'd struggle to explain what your app does *without* the platform it was built in.

If three or more apply, you're standing at the edge. The next four lessons cover what to do about it, in roughly the order it'll matter to you.

## Skills you'll pick up in this module

- Telling a private repo from a public one, and verifying it
- Reading and writing a `.gitignore` that actually catches things
- Defining what counts as a secret in your own setup
- Recognising the five environment-parity failure modes
- Running a backup-and-restore drill that proves your backup works

## References & further reading

- [The Twelve-Factor App · Config](https://12factor.net/config) — canonical mental model for env vars and secrets
- [GitHub · Removing sensitive data from a repository](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository) — when it's already too late
- [OWASP · Secrets management cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html) — the long version of this whole module
