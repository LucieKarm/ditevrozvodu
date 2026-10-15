# Kurz migration — next steps (after Phase 1)

Phase 1 is live: pay → webhook → register → watch videos.

## Step 1 — Thinkific links → `/kurz` ✅ (code ready)

All Astro CTAs now point to `/kurz`. Deploy to publish.

## Step 2 — Import existing Thinkific buyers ✅

183 rows in Supabase `purchases`. E-mail campaign still TODO (Ecomail).

## Step 3 — Full lesson texts ✅

Content in `src/content/courseLessons/` + quizzes in `src/lib/courseQuizzes.ts`.

## Step 4 — Go live ✅ (2026-10-09)

- Stripe live + Netlify `STRIPE_*` + webhook verified (pay → `purchases` → register → `/kurz`).

## Step 5 — Still open

- E-mail 183 buyers (`/registrace`, same email).
- GDPR / privacy policy update.
- Cancel Thinkific subscription.
