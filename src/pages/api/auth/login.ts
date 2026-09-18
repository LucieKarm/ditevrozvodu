import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const form = await request.formData();
  const email = String(form.get('email') ?? '').trim();
  const password = String(form.get('password') ?? '');
  const redirectTo = String(form.get('redirect') ?? '/kurz');

  if (!email || !password) {
    return redirect(`/prihlaseni?error=missing&redirect=${encodeURIComponent(redirectTo)}`);
  }

  const { createServerClient, parseCookieHeader } = await import('@supabase/ssr');

  const supabase = createServerClient(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return parseCookieHeader(request.headers.get('Cookie') ?? '');
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookies.set(name, value, options);
          });
        },
      },
    },
  );

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return redirect(
      `/prihlaseni?error=${encodeURIComponent(error.message)}&redirect=${encodeURIComponent(redirectTo)}`,
    );
  }

  return redirect(redirectTo);
};
