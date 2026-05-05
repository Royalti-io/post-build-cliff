---
title: Restoring a backup
description: Until you've successfully restored from a backup, you don't have one. The drill that converts a bet into actual safety.
sidebar:
  order: 5
---

Every backup that has ever silently failed was made by someone who never tried to restore it. The mistake is universal. The fix is one Saturday afternoon of work, once.

## The minimum rule

Run a restore drill. Once. On a non-production copy. Compare the restored data to what you expected. Until you've done that, your backup is theoretical.

The drill is not a one-time event you can outsource — *you* need to do it, because *you* are the one who'll need to do it under pressure later. Practice without pressure beats first-attempt under pressure every time.

## The 30-minute drill

This is the smallest version. If your setup is more complex, the same shape applies; just more steps.

```bash
# 1. Find your most recent backup
# (where it lives depends on your DB host — Supabase, Neon, RDS, etc.)
# Most provide automated daily backups in their dashboard.

# 2. Provision a temporary "restore target" database.
# Spin up a free-tier instance with the same engine (Postgres, MySQL, etc.)
# Cloud providers all let you do this in 5 minutes.

# 3. Restore the backup to the temporary database.
# Each provider documents this; the command is usually a one-liner.
# Postgres example:
pg_restore -d $RESTORE_TARGET_URL backup.dump

# 4. Connect and check.
psql $RESTORE_TARGET_URL -c "SELECT count(*) FROM users;"
psql $RESTORE_TARGET_URL -c "SELECT count(*) FROM orders;"
# Compare these numbers to your live DB. They should match
# (within minutes of the backup time).

# 5. Tear down the restore target so you don't pay for it.
```

Five steps, 30 minutes, costs roughly £0 (free tier covers it). The peace of mind is permanent.

## What to actually verify

Counts are a start, not the answer. The real question is *can your app run against the restored data?* So:

- Row counts on your three or four most important tables match (within hours).
- A spot check on five recent records — pick the most recent user, order, message, whatever. Are their fields populated correctly?
- Critical foreign keys aren't null. (If users have orders but the orders table is missing the `user_id` column, the restore is broken in a way pure counts won't catch.)
- If you have file uploads, files are restored too — many DB backups don't include S3/R2 buckets. That's a separate backup.

## Backup sources, ranked by trust

Not all "backups" are equal. From most to least reliable:

| Type | Trust level | Notes |
|---|---|---|
| Provider-managed daily snapshot + you have restored from it | ✅✅ | The gold standard |
| Provider-managed daily snapshot, never restored | ⚠️ | Most common state — looks safe, isn't proven |
| Custom script dumping to your own R2/S3 + tested | ✅ | Good if you've automated *and* tested |
| Custom script dumping to your own R2/S3, untested | ⚠️ | You're betting the script works |
| "The platform handles it" with no documentation | ❌ | Treat as no backup |
| Code in git but no DB backup | ❌ | Code without data is not your business |

If you're in any of the ⚠️ rows, do the 30-minute drill this week. If you're in the ❌ rows, set up backups before reading anything else on this site.

## Files, secrets, and "infrastructure" backups

Three things that need backups beyond your database:

- **Uploaded files** — if users upload images, audio, PDFs, those usually live in S3, R2, or a similar bucket. Mirror that bucket to a second region or a second provider on a schedule. Cloudflare R2 has free intra-zone replication; AWS has cross-region replication.
- **Secrets** — your env vars are a kind of state. Export them periodically (most platforms have a download/export option), encrypt the file, store in a password manager.
- **Infrastructure config** — if you've manually configured anything in a hosting dashboard (custom domains, redirect rules, build settings), screenshot or export the configuration. The day the dashboard breaks is the day you'll wish you had.

## The 3-2-1 rule (old, holds up)

For data that genuinely matters:

- **3** copies total
- **2** different storage media or providers
- **1** copy off-site (a different cloud region or provider)

For most early-stage projects this looks like: live DB (1), provider's automated backup (2), your own R2/S3 dump in a different region (3). That's enough.

## Skills you'll pick up

- Running a backup-restore drill on a non-production copy in under an hour
- Verifying a restore by counts *and* spot checks, not just counts
- Distinguishing what a database backup covers from what it doesn't (files, secrets, config)
- Applying the 3-2-1 rule to your own setup honestly, including identifying the gap

## References & further reading

- [CISA · Data Backup Options](https://www.cisa.gov/sites/default/files/publications/data_backup_options.pdf) — US Cybersecurity & Infrastructure Security Agency's plain-English guide; the canonical source on 3-2-1
- [Supabase · Backups documentation](https://supabase.com/docs/guides/platform/backups) — most generous free-tier backup setup; restore process is documented
- [Neon · Point-in-time restore](https://neon.tech/docs/manage/backup-restore) — Postgres with built-in PITR; restoration is a query, not a file copy
- [Cloudflare R2 · Cross-region replication](https://developers.cloudflare.com/r2/buckets/replication/) — for the "off-site copy" of the 3-2-1 rule
