---
title: Five signals you've hit the line
description: Concrete observations that tell you it's time to bring in technical help. Not feelings — signals.
sidebar:
  order: 2
---

You will not get a clean alarm telling you it's time to hire. You'll get a pattern of signals that you'll dismiss individually because each one feels normal in isolation. The trick is to count them.

If three or more of these are true today, you're past the line.

## The minimum rule

If you're spending more time fighting your build than running your business, the build is the bottleneck — and the cure is rarely "learn more." The cure is leverage.

## Signal 01 — You're spending more time on the build than the business

Not "I'm building hard," but "I haven't talked to a user in two weeks because I've been debugging." When the build eats the business, the build is the leak. The leak is rarely fixed with another tutorial.

The honest test: pull up your calendar from the last two weeks. How many user conversations? How many sales calls? How many growth experiments? If the answer is "fewer than five combined," you're not running a business — you're running a build. Time to redistribute.

## Signal 02 — A bug has lasted more than a day and you can't even describe it

Not "I can't fix it" — "I can't *explain* it." The gap between those two states is the gap between a problem you'll solve eventually and a problem you'll never solve. The first someone helps you with in 20 minutes; the second they need to actually understand your system.

If you've been staring at the same broken thing for two days and you still can't tell a stranger what's broken in plain English, you've hit a ceiling that more time won't fix.

## Signal 03 — You're about to touch payments, auth, or user data at scale

These three are where the cost of being wrong is non-linear. A typo in your landing page costs you nothing. A typo in your Stripe webhook handler costs you a chargeback dispute. A bug in your auth flow lets the wrong person see the right data and you have a breach.

You can build all three with AI tools. You can probably ship a v1 that mostly works. But the *blast radius* if you're wrong is high enough that it's worth a fractional senior reviewing your setup before you flip the switch on real users.

The rule of thumb: the first time you're handling someone else's money, identity, or sensitive data, get a second pair of eyes — even if just for a one-hour review.

## Signal 04 — Your AI tool keeps confidently shipping the same regression

You've fixed the same bug three times. Each time the AI tool was sure it had it. Each time it came back, sometimes in a slightly different form. You've stopped being able to tell whether the fix is real because you can't read the code carefully enough to verify.

This is the signal most non-technical founders dismiss because it doesn't feel like a *problem* problem — it just feels like AI being AI. But it's actually telling you that you've outgrown the iteration loop. You need someone whose job it is to be the guardrail your AI tool can't be on its own.

## Signal 05 — You can't tell whether a quote from an agency is reasonable

Three agencies sent you proposals. One quoted £8k. One quoted £40k. One quoted £180k. You have no idea which one is right.

This is the signal that says you need a *technical voice on your side of the table* before you sign anything. Not a builder yet — a voice. A fractional CTO at four hours a month can save you six figures here. The cure is not to learn enough engineering to evaluate quotes yourself; that takes years and isn't your job. The cure is to rent the judgement.

## How to read your own signals honestly

The hard part is admitting which signals are true. Founders are optimists by selection — your reflex is to interpret signals as "I just need to push harder." Sometimes that's right. When it comes to engineering signals specifically, it's almost always wrong.

A practical exercise: print this list. Re-read it Friday afternoon, when you're tired and honest. Tick the ones that are true. If three or more are ticked, your job over the next two weeks is to figure out *who* to hire, not whether.

The next lesson covers who.

## Skills you'll pick up

- Auditing your own time-allocation honestly enough to spot when build has eaten business
- Recognising the difference between "stuck" and "stuck in a way more time won't fix"
- Identifying the three blast-radius categories (payments, auth, data) before you're in trouble
- Spotting the "AI ceiling" — the iteration-loop failure mode where confidence outpaces correctness
- Naming the moment you need to rent technical judgement, not technical labour

## References & further reading

- [Paul Graham · Do Things That Don't Scale](http://paulgraham.com/ds.html) — required reading on what your time should actually be on as a founder
- [First Round Review · How to know when to hire your first engineer](https://review.firstround.com/the-most-overlooked-question-when-hiring-your-first-engineer) — practical decision framework
- [Lenny's Newsletter · When founders should learn to code](https://www.lennysnewsletter.com/) — search the archive; multiple posts on this exact question
