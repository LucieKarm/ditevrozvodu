# Kurz migration — next steps (after Phase 1)

Phase 1 is live: pay → webhook → register → watch videos.

## Step 1 — Thinkific links → `/kurz` ✅ (code ready)

All Astro CTAs now point to `/kurz`. Deploy to publish.

## Step 2 — Import existing Thinkific buyers (you)

1. Open your Thinkific buyer CSV.
2. Copy all buyer emails (lowercase).
3. Supabase → SQL Editor.
4. Copy `supabase/import-thinkific-buyers.sql` → `supabase/import-thinkific-buyers.local.sql` (gitignored).
5. Paste real emails into the `.local.sql` file only — never commit customer data.
6. Run the **local** file in SQL Editor.
7. Tell buyers: register at `https://ditevrozvodu.cz/registrace` with the **same email**.

## Step 3 — Full lesson texts ✅

Content in `src/content/courseLessons/` (4 markdown files). Deploy to publish.

## Step 4 — Go live

- Stripe: switch to live mode + live Price ID in Netlify.
- Stripe: live webhook endpoint.
- Cancel Thinkific when satisfied.
