---
title: Just-enough git
description: Six commands, one mental model, and the discipline to stop before the rabbit hole. The shortest viable git curriculum.
sidebar:
  order: 2
---

Git is the most over-taught skill in software. Most tutorials open with a diagram of the staging area and lose half their readers in 30 seconds. You don't need that diagram. You need six commands and one mental model.

## The mental model

Git is a save game system for your code.

- **Working directory** — what you're editing right now (the live game).
- **Repository** — every save you've ever made, in order.
- **Branch** — a named save slot. Most projects start with a branch called `main`.
- **Remote** — a copy of your repository that lives somewhere else, usually GitHub.

Everything else is a variation on those four ideas. When you read git documentation and feel lost, come back to this list and re-anchor.

## The minimum rule

Six commands cover 95% of what you'll do in your first year. Learn these, ignore the rest until a specific need forces you in.

```bash
# 1. Save what you've done locally
git add .                          # stage your changes
git commit -m "what you changed"   # save them, with a message

# 2. Move it to GitHub
git push                           # upload to the remote

# 3. Get the latest from someone else
git pull                           # download remote changes

# 4. Try something risky on a side branch
git checkout -b experiment         # new branch called "experiment"
git checkout main                  # back to main when done

# 5. Undo the last commit (locally only)
git reset --soft HEAD~1            # uncommit but keep changes
```

That's it. Six commands. Print them on a sticky note if you need to.

## Three commands you'll be tempted to learn but shouldn't

Yet.

- `git rebase` — rewrites history, easy to corrupt. Use `merge` instead.
- `git cherry-pick` — copies a single commit between branches. You don't need this for months.
- `git stash` — temporarily shelves changes. Better discipline: commit incomplete work to a branch and `--soft reset` later.

If a tutorial or AI tool tells you to use one of these, ask "what's the simpler version?" first. There almost always is one.

## A daily rhythm

The smallest workflow that keeps you safe:

```bash
# Morning, before you start work
git pull

# After each meaningful change (every 30 min, not every 3 hours)
git add .
git commit -m "added the email field to the signup form"

# End of session
git push
```

The discipline that matters most: **commit often, with messages a stranger could understand.** "fixed it" and "wip" age badly. "added the email field to the signup form" still makes sense in six months when you're trying to remember why you broke production.

> **↳ Sanity check**
>
> If you ever feel scared to run a git command — *stop*. Open a new terminal. Run `git status`. It will tell you what's staged, what's modified, and what branch you're on. You can always recover from a bad state if you haven't pushed yet. Pushing is the one operation that lets other people see your mistakes.

## When you've made a mess

You will make a mess. Everyone does. Two free resources that have saved more careers than they know:

- [Oh Sh*t, Git!?!](https://ohshitgit.com/) — recovery scenarios in plain English. Bookmark this.
- `git reflog` — git's "browser history." Even if you think you've lost a commit, `git reflog` can usually find it.

## Skills you'll pick up

- Reading `git status` to know what's about to happen
- Writing a commit message a stranger can understand
- Branching to try something risky without breaking your main work
- Recovering from the three most common mistakes (uncommitted lost work, wrong-branch commit, accidental commit of secrets)

## References & further reading

- [The Missing Semester · Version Control](https://missing.csail.mit.edu/2020/version-control/) — one-hour MIT lecture; the *only* git tutorial we recommend as a starting point
- [Learn Git Branching](https://learngitbranching.js.org/) — interactive sandbox; do the first three levels and you've covered branching for life
- [Oh Sh*t, Git!?!](https://ohshitgit.com/) — your bookmarkable "I broke something" reference
- [Atlassian · Git Tutorials](https://www.atlassian.com/git/tutorials) — when you need a deeper concept, this is where to go second
