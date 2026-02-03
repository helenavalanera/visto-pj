'use client'

import { supabase } from '@/lib/supabase/client'

export default function Home() {
  console.log('Supabase client:', supabase)

  return (
    <main>
      <h1>Visto PJ</h1>
    </main>
  )
}
