import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [Number(process.env.BREVO_LIST_ID) || 2],
        updateEnabled: true,
      }),
    });

    if (response.ok || response.status === 204) {
      return NextResponse.json({ success: true });
    }

    const data = await response.json();
    if (data.code === 'duplicate_parameter') {
      return NextResponse.json({ success: true, message: 'Already subscribed' });
    }

    return NextResponse.json({ error: data.message }, { status: response.status });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
