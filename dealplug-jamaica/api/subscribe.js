export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [2], // Assuming 2 is the default first list in Brevo
        updateEnabled: true,
      }),
    });

    if (response.ok || response.status === 204) {
      return res.status(200).json({ success: true });
    }

    const data = await response.json();
    // Contact already exists — still treat as success
    if (data.code === 'duplicate_parameter') {
      return res.status(200).json({ success: true, message: 'Already subscribed' });
    }

    return res.status(response.status).json({ error: data.message });
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
}
