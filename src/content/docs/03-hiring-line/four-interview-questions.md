---
title: Four interview questions
description: How to surface judgement, communication, and self-awareness in 30 minutes — without writing a single line of code together.
sidebar:
  order: 4
---

You can't out-code the person you're interviewing. So don't try. Code interviews are how engineers evaluate engineers. They're a poor fit for your situation and probably an unfair one — you'll lean on the parts you understand and miss the parts that matter.

What you *can* evaluate is judgement, communication, and self-awareness. Those are the things that determine whether this hire works out, and they're the things you're already good at evaluating from running a business.

Use these four questions. In this order. Listen for what they say *and* how they say it.

## The minimum rule

Hire for judgement and communication. The technical floor will hold itself if those two are present.

## Question 01 — "Tell me about a time you said no to a technical decision someone wanted you to make."

What you're testing: **independence and business sense.**

A great engineer will tell you a story where they pushed back on a technical request because the business reason wasn't strong enough, *or* because the technical cost was disproportionate, *or* because the timing was wrong. They'll name the person they pushed back on. They'll describe the conversation. They'll tell you whether they were right or wrong in retrospect.

A weak engineer will struggle to think of one. Or they'll tell you a story where they were right because the other person was stupid. Or they'll tell you a story about saying no for technical purity reasons that didn't connect to the business.

**Listen for:** specificity, the name of the other person, awareness that "no" is sometimes wrong in retrospect, no contempt for non-engineers in the story.

## Question 02 — "Walk me through the last bug you shipped to production by accident."

What you're testing: **honesty, ownership, and post-mortem instinct.**

Anyone who tells you they haven't shipped a bug to production is lying or junior. Both are disqualifying for the role you're trying to fill. The question is what they did *next*.

A great engineer will tell the story crisply. What broke. How they noticed. How they decided whether to roll back or roll forward. What they changed in their own process so it would be less likely next time. They'll volunteer details that don't make them look great — that's the signal of honesty.

A weak engineer will deflect ("the spec was unclear," "the tests didn't cover it") or generalise ("oh you know, just normal stuff"). Or they'll tell you a story where they spotted the bug heroically before any user did. That last one is suspicious.

**Listen for:** named consequences (users affected, money lost, time wasted), a process change they made afterward, willingness to admit error without theatrics.

## Question 03 — "Here's my current setup. What would you change first, and why?"

What you're testing: **judgement under your specific constraints.**

This is where you give them context — your stack, your stage, your constraints — and ask for a real opinion. The answer reveals everything.

A great engineer will ask clarifying questions before answering. They'll establish what you're optimising for (speed of iteration? cost? scaling for a launch?). They'll then pick *one specific change* they'd make first, and explain *why that one over the alternatives.* They won't just dump a list of "best practices."

A weak engineer will either (a) start lecturing immediately without asking what you actually need, or (b) reflexively recommend whatever stack they personally prefer regardless of fit.

The "first" word in the question is doing real work. It forces them to prioritise. Anyone who can't pick first can't help you sequence your roadmap either.

**Listen for:** clarifying questions before answering, prioritisation language ("first I'd…", "the highest leverage thing is…"), willingness to recommend boring stable choices over exciting new ones.

## Question 04 — "How would you explain how this product works to my mum?"

What you're testing: **communication is the actual skill you're paying for.**

The work of an engineer at your company is 30% writing code, 70% explaining the code to non-engineers — you, your users, your investors, your users' lawyers. If they can't explain a product they barely know to a hypothetical non-technical person, they certainly won't explain your codebase to you when something breaks.

A great engineer will pause. Think for a moment. Then explain in plain English with one or two well-chosen analogies. They won't drift into jargon. They won't condescend. They might ask "is your mum technical at all?" before starting — that's good; it shows they're calibrating to the audience.

A weak engineer will either get awkward (they have never tried to do this), or use jargon and not notice, or condescend ("well, basically, *imagine*…") in a way that would alienate any real listener.

**Listen for:** analogies that come from outside engineering, no jargon-creep, calibration to the listener, the ability to be wrong-but-clear rather than right-but-incomprehensible.

## What you're not asking and why

You'll notice these questions don't ask:

- "What's your favourite programming language?" — irrelevant; signals you don't know what to ask
- "Where do you see yourself in five years?" — useless theatre
- "Walk me through your CV" — you read the CV; don't waste 10 minutes
- Anything that requires you to evaluate the technical quality of their answer in real-time

That last one is the trap most non-technical founders fall into. They ask a technical question they half-understand, the candidate gives an answer they fully don't, and the founder either nods (and learns nothing) or panics (and is now negotiating from weakness). Don't do this to yourself.

## How to score

After the conversation, write down — in plain English, before you forget — what each answer told you about the candidate. Not the answer itself; what it *told you*.

Then ask yourself two questions:

1. **Would I want this person in the room when I'm making a hard decision?**
2. **If they shipped a bug to my production tomorrow, would I trust them to tell me, fix it, and document it without me chasing?**

If yes to both, hire. If no to either, don't — even if their CV is great. The CV will mislead you; these two questions won't.

> **↳ Sanity check**
>
> If you found yourself thinking "but they're so technical, surely they know what they're doing" during the interview — pay attention to that thought. Technical confidence is not a substitute for judgement and communication. The best engineers usually have all three. Good ones who lack one of the three are still good ones; great ones who lack one of the three become a problem you can't manage.

## Skills you'll pick up

- Running a 30-minute first-round interview that surfaces real signal without code
- Listening for honesty and ownership in bug-story responses
- Spotting the "I dump best practices instead of asking what you need" anti-pattern
- Translating soft signals (clarifying questions, analogies, jargon-creep) into hire/no-hire decisions

## References & further reading

- [First Round Review · How we hire](https://review.firstround.com/topic/hiring) — long-form playbooks from operators who have done it
- [Will Larson · The hiring rubric](https://lethain.com/hiring-rubric/) — how to score interviews when you have multiple candidates
- [Triplebyte · The tech resume, inside out](https://triplebyte.com/blog/the-tech-resume-inside-out) — for reading CVs without being technical yourself
- [Charity Majors · Questions for your future tech lead](https://charity.wtf/2018/10/13/questions-for-your-future-tech-lead/) — when you're hiring senior; some of these adapt downward
