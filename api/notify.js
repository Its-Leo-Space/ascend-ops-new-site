export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const { transcript, sessionId, name, email, company } = req.body;

  try {
    const response = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NOTION_API_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28'
      },
      body: JSON.stringify({
        parent: { database_id: process.env.NOTION_DATABASE_ID },
        properties: {
          "Name": {
            title: [{ text: { content: name || 'Anonymous Visitor' } }]
          },
          "Company": {
            rich_text: [{ text: { content: company || 'N/A' } }]
          },
          "Email": {
            email: email || 'no-email@provided.com'
          },
          "Session ID": {
            rich_text: [{ text: { content: sessionId || '' } }]
          },
          "Transcript": {
            rich_text: [{ text: { content: transcript || '' } }]
          }
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Notion API Error Details:', JSON.stringify(data));
      return res.status(response.status).json({ error: data.message || 'Notion API error' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Server Error in /api/notify:', error);
    return res.status(500).json({ error: 'Failed to save to Notion' });
  }
}
