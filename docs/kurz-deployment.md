# Kurz — nasazení Phase 1

## 1. Supabase: spustit SQL

V Supabase → **SQL Editor** spusťte obsah souboru `supabase/schema.sql`.

Tím vytvoříte tabulku `purchases` a propojení nákupů s účty podle e-mailu.

## 2. Netlify: environment variables

Site settings → Environment variables → přidejte:

| Proměnná | Popis |
|----------|--------|
| `PUBLIC_SUPABASE_URL` | `https://mbaofpeilvwlvfwgkhzl.supabase.co` |
| `PUBLIC_SUPABASE_ANON_KEY` | Supabase publishable key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase secret key (jen server) |
| `STRIPE_SECRET_KEY` | Stripe secret key (test mode) |
| `STRIPE_PRICE_ID` | `price_1UFZo8AlYvVVLssHjmBoabDk` |
| `STRIPE_WEBHOOK_SECRET` | Viz krok 3 |

## 3. Stripe webhook

Stripe → Developers → Webhooks → Add endpoint:

- **URL:** `https://ditevrozvodu.cz/api/stripe/webhook`
- **Event:** `checkout.session.completed`
- Zkopírujte **Signing secret** → `STRIPE_WEBHOOK_SECRET` v Netlify

## 4. Supabase Auth URL

Supabase → Authentication → URL Configuration:

- **Site URL:** `https://ditevrozvodu.cz`
- **Redirect URLs:** `https://ditevrozvodu.cz/**`

## 5. Test flow

1. Otevřete `/kurz` → Koupit kurz
2. Stripe test card: `4242 4242 4242 4242`
3. Po platbě `/kurz/dekujeme`
4. Registrace / přihlášení stejným e-mailem
5. Přístup k `/kurz/proc-rikat` a dalším lekcím

## Nové stránky

| URL | Účel |
|-----|------|
| `/kurz` | Prodejní stránka + trailer |
| `/kurz/proc-rikat` | Lekce 1 (chráněno) |
| `/kurz/dopady-na-deti` | Lekce 2 |
| `/kurz/co-deti-potrebuji` | Lekce 3 |
| `/kurz/co-rikat` | Lekce 4 |
| `/prihlaseni` | Přihlášení |
| `/registrace` | Registrace |
