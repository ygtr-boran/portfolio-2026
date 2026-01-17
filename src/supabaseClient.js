import { createClient } from '@supabase/supabase-js'

// 1. Hier fügst du gleich die URL ein, die du noch suchen musst:
const supabaseUrl = 'https://kwwvgjlypmnoqpebveir.supabase.co'

// 2. Das ist dein Anon Key (der lange mit eyJ...), den du gepostet hast.
// Den benutzen wir. Das ist sicher.
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3d3Znamx5cG1ub3FwZWJ2ZWlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg1OTk2NzQsImV4cCI6MjA4NDE3NTY3NH0.pWyEMCFBaSyrg5fY75_ikjPe8gCWss5qkhNLrwXWGUo'

// ACHTUNG: Den "Secret Key" und "Publishable Key" (sb_...) ignorieren wir hier!
// Wir brauchen nur URL und den langen Anon-Key.

export const supabase = createClient(supabaseUrl, supabaseKey)