import { createClient } from '@supabase/supabase-js'
import { SUPABASE_URL, SUPABASE_KEY } from '$env/static/private'

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY)