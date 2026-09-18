import type { SupabaseClient, User } from '@supabase/supabase-js';

export async function userHasCourseAccess(
  supabase: SupabaseClient,
  user: User | null,
  courseSlug: string,
): Promise<boolean> {
  if (!user?.email) return false;

  const { data, error } = await supabase
    .from('purchases')
    .select('id')
    .eq('course_slug', courseSlug)
    .or(`user_id.eq.${user.id},email.eq.${user.email}`)
    .limit(1);

  if (error) {
    console.error('Failed to check course access:', error.message);
    return false;
  }

  return (data?.length ?? 0) > 0;
}
