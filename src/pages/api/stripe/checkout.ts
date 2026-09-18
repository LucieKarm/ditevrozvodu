import type { APIRoute } from 'astro';
import { COURSE_SLUG } from '../../../lib/course';
import { getStripe } from '../../../lib/stripe';

export const prerender = false;

export const POST: APIRoute = async ({ locals, url, redirect }) => {
  const stripe = getStripe();
  const priceId = import.meta.env.STRIPE_PRICE_ID;
  const user = locals.user;

  if (!priceId) {
    return new Response('Stripe price is not configured.', { status: 500 });
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${url.origin}/kurz/dekujeme?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${url.origin}/kurz`,
    customer_email: user?.email ?? undefined,
    metadata: {
      course_slug: COURSE_SLUG,
      user_id: user?.id ?? '',
    },
  });

  if (!session.url) {
    return new Response('Could not create checkout session.', { status: 500 });
  }

  return redirect(session.url);
};
