import type { APIRoute } from 'astro';
import { COURSE_SLUG } from '../../../lib/course';
import { createAdminClient } from '../../../lib/supabase/admin';
import { getStripe } from '../../../lib/stripe';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const stripe = getStripe();
  const webhookSecret = import.meta.env.STRIPE_WEBHOOK_SECRET;
  const signature = request.headers.get('stripe-signature');

  if (!webhookSecret || !signature) {
    return new Response('Webhook is not configured.', { status: 400 });
  }

  const payload = await request.text();
  let event;

  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Invalid signature';
    return new Response(`Webhook error: ${message}`, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const email =
      session.customer_details?.email ??
      session.customer_email ??
      null;

    if (!email) {
      return new Response('Missing customer email.', { status: 400 });
    }

    const supabase = createAdminClient();
    const userId = session.metadata?.user_id || null;
    const courseSlug = session.metadata?.course_slug || COURSE_SLUG;

    const { error } = await supabase.from('purchases').upsert(
      {
        email: email.toLowerCase(),
        user_id: userId || null,
        course_slug: courseSlug,
        stripe_session_id: session.id,
      },
      { onConflict: 'stripe_session_id' },
    );

    if (error) {
      console.error('Failed to store purchase:', error.message);
      return new Response(`Failed to store purchase: ${error.message}`, { status: 500 });
    }
  }

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
