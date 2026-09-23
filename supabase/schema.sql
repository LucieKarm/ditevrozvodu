-- Run in Supabase SQL Editor (Project → SQL → New query)

create table if not exists public.purchases (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  user_id uuid references auth.users (id) on delete set null,
  course_slug text not null default 'jak-mluvit-s-detmi',
  stripe_session_id text unique,
  purchased_at timestamptz not null default now()
);

create index if not exists purchases_email_idx on public.purchases (email);
create index if not exists purchases_user_id_idx on public.purchases (user_id);
create index if not exists purchases_course_slug_idx on public.purchases (course_slug);

alter table public.purchases enable row level security;

-- Required when "Automatically expose new tables" is disabled in Supabase
grant select, insert, update, delete on table public.purchases to service_role;
grant select on table public.purchases to authenticated;

create policy "Users can read own purchases"
  on public.purchases
  for select
  to authenticated
  using (
    user_id = auth.uid()
    or lower(email) = lower(auth.jwt() ->> 'email')
  );

-- Link existing purchases when a user signs up with the same email
create or replace function public.link_purchases_to_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.purchases
  set user_id = new.id
  where user_id is null
    and lower(email) = lower(new.email);
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_link_purchases on auth.users;

create trigger on_auth_user_created_link_purchases
  after insert on auth.users
  for each row
  execute function public.link_purchases_to_user();
