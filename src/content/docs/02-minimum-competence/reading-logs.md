---
title: Reading logs
description: When something breaks, the answer is almost always already printed somewhere. Find it, read it, fix it without guessing.
sidebar:
  order: 4
---

Most production "mysteries" are not mysteries. They're errors that printed themselves into the logs and nobody read them. Learning to find and read logs is the difference between debugging and guessing.

## The minimum rule

When something breaks, before you change anything, find the logs. Read the *first* error, not the last one — the last is usually a downstream effect.

That's the whole skill. Find the logs, read the first error, follow that thread.

## Where the logs actually live

Every modern hosting platform has a "Logs" tab in its dashboard. The names vary; the location is consistent.

| Platform | Where |
|---|---|
| Cloudflare Pages / Workers | Project → Logs / Functions / Real-time logs |
| Vercel | Project → Logs (or `vercel logs` CLI) |
| Netlify | Site → Functions → [function name] → Logs |
| Railway | Service → Deployments → [deployment] → Logs |
| Fly.io | `fly logs` (CLI) |

Bookmark the logs page for your project. When something breaks at 11pm, you don't want to be hunting through three menu levels.

## Reading an error like an engineer

Most error logs have the same structure:

```
[2026-05-05 14:23:11.221] ERROR
TypeError: Cannot read property 'email' of undefined
  at processSignup (/var/task/api/signup.js:42:18)
  at handler (/var/task/api/signup.js:14:7)
```

Three things to extract, in order:

1. **The error message** — `TypeError: Cannot read property 'email' of undefined`. This says what went wrong: something tried to read `.email` from a thing that doesn't exist.
2. **The first file path and line number** — `/var/task/api/signup.js:42:18`. This is where the error happened. The lines below it (the "stack trace") are who *called* that code; usually less interesting.
3. **The timestamp** — useful when correlating with what a user told you ("it broke at 2:23pm").

If you can paste the error message and the first line of the stack trace into your AI tool of choice with the question *"what does this mean and how would I fix it?"*, you'll get further in 30 seconds than an hour of guessing.

## What to do when there's no error log

Sometimes nothing prints because the error happened before logging started, or it was swallowed silently. Two moves:

- **Add temporary logging.** `console.log("got to signup handler", { email })` near where you think the problem is. Redeploy. Reproduce. Read.
- **Check the build logs, not just the runtime logs.** "It works locally but the deploy fails" usually means a build-time error, which lives in the deploy log, not the runtime log.

Most platforms split these into separate tabs. Look at both.

## Logs vs metrics vs traces

You'll hear all three terms. Quick definitions:

- **Logs** — a stream of text events. "User signed up." "Error in handler." Best for *debugging individual incidents.*
- **Metrics** — numerical counters over time. "Requests per minute." "Error rate." Best for *spotting trends and alerting.*
- **Traces** — the path a single request took through your system. Best for *understanding latency in distributed systems.*

For now, you only need logs. Metrics matter once you have enough traffic that one user's bad day is invisible in the noise. Traces matter when you have multiple services. Neither applies for the next year for most projects.

## Skills you'll pick up

- Finding the logs page for your hosting provider in under 10 seconds
- Reading a stack trace top-to-bottom and identifying the actual cause
- Adding temporary `console.log` lines to instrument unknown bugs
- Distinguishing build-time errors (in deploy logs) from runtime errors (in app logs)
- Knowing when logs stop being enough and metrics start mattering

## References & further reading

- [New Relic · Observability 101](https://newrelic.com/blog/best-practices/observability-101-introduction) — clearest explanation of the logs/metrics/traces distinction
- [Cloudflare · Workers logging guide](https://developers.cloudflare.com/workers/observability/logs/) — practical reference for the platform we recommend most
- [Vercel · Runtime Logs](https://vercel.com/docs/observability/runtime-logs) — for Vercel-hosted projects
- [Sentry](https://sentry.io/) — when console logs aren't enough and you want errors emailed to you. Generous free tier; install when you have real users.
