import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect, url }) => {
  const form = await request.formData();
  const email = String(form.get('email') ?? '').trim();
  const password = String(form.get('password') ?? '');

  if (!email || !password) {
    return redirect('/registrace?error=missing');
  }

  if (password.length < 8) {
    return redirect('/registrace?error=password');
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

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${url.origin}/prihlaseni?confirmed=1`,
    },
  });

  if (error) {
    return redirect(`/registrace?error=${encodeURIComponent(error.message)}`);
  }

  return redirect('/prihlaseni?registered=1');
};
