import { createClient } from '@supabase/supabase-js'

// Get Supabase credentials from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Check if the variables are loaded to prevent the app from running without them.
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and/or Anon Key are missing. Check your .env file.")
}

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)