-- Phase 3.1: Grant course access to existing Thinkific buyers (no Stripe payment).
--
-- DO NOT put real customer emails in this tracked file.
-- Copy this file to import-thinkific-buyers.local.sql (gitignored), paste emails there,
-- then run the local file in Supabase SQL Editor only.

insert into public.purchases (email, course_slug, stripe_session_id)
select lower(email), 'jak-mluvit-s-detmi', 'thinkific-import-' || lower(email)
from (values
  ('example1@email.cz'),
  ('example2@email.cz')
) as imported(email)
where not exists (
  select 1
  from public.purchases p
  where lower(p.email) = lower(imported.email)
    and p.course_slug = 'jak-mluvit-s-detmi'
);
