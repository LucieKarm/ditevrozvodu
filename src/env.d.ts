/// <reference types="astro/client" />

type Env = {
  readonly PUBLIC_SUPABASE_URL: string;
  readonly PUBLIC_SUPABASE_ANON_KEY: string;
  readonly SUPABASE_SERVICE_ROLE_KEY: string;
  readonly STRIPE_SECRET_KEY: string;
  readonly STRIPE_WEBHOOK_SECRET: string;
  readonly STRIPE_PRICE_ID: string;
  readonly CLOUDFLARE_ACCOUNT_ID?: string;
  readonly CLOUDFLARE_STREAM_API_TOKEN?: string;
};

interface ImportMeta {
  readonly env: Env;
}

declare namespace App {
  interface Locals {
    supabase: import('@supabase/supabase-js').SupabaseClient;
    user: import('@supabase/supabase-js').User | null;
  }
}
