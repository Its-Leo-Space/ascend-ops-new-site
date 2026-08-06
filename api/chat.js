export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  try {
    const response = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NVIDIA_API_KEY}`
      },
      body: JSON.stringify({
        model: 'meta/llama-3.1-8b-instruct', // Switched to the faster 8B model
        messages: req.body.messages,
        max_tokens: 350
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('NVIDIA API Error Details:', JSON.stringify(data));
      return res.status(response.status).json({ error: data.error?.message || 'NVIDIA API error' });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Server Execution Error:', error);
    res.status(500).json({ error: 'Failed to fetch from NVIDIA' });
  }
}
