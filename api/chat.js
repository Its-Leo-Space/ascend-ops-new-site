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
        model: 'meta/llama-3.1-70b-instruct',
        messages: req.body.messages,
        max_tokens: 400
      })
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('NVIDIA API Error:', error);
    res.status(500).json({ error: 'Failed to fetch from NVIDIA' });
  }
}
