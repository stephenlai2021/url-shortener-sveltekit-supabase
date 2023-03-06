// import { createClient } from '@supabase/supabase-js'
// import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY } from '$env/static/public'

// export const supabaseClient = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY)

import { createSupabaseServerClient } from "@supabase/auth-helpers-sveltekit";
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY } from '$env/static/public'
