-- Run this in Supabase SQL Editor to fix webhook failures.
-- Needed because "Automatically expose new tables" was disabled at project creation.

grant select, insert, update, delete on table public.purchases to service_role;
grant select on table public.purchases to authenticated;
