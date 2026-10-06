import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://irtsctjwszxuzirepujc.supabase.co'
const supabaseKey = 'sb_publishable_1eteGbRi0u1B2OJSlDF_HA_1jTt1hyK'

export const supabase = createClient(supabaseUrl, supabaseKey)