import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(req) {
  try {
    const { name, phone, email } = await req.json();
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY,
      {
        auth: {
          // These options ensure the client doesn't try to use standard auth flows (e.g., storing a user session)
          persistSession: false,
          autoRefreshToken: false,
          detectSessionInUrl: false,
        },
      },
    );
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Missing name, phone or email' },
        { status: 400 },
      );
    }

    const { error } = await supabase
      .from('contact')
      .insert({ name: name, phone: phone, email: email });
    if (error) throw error;

    return NextResponse.json({ status: 'success' });
  } catch (err) {
    console.log(err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
