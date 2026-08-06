export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  
  const { transcript, sessionId, name, email, company } = req.body;
  
  const properties = {
    'Name': { title: [{ text: { content: name || 'Anonymous Chat' } }] },
    'Company': { rich_text: [{ text: { content: company || 'N/A' } }] },
    'Session ID': { rich_text: [{ text: { content: sessionId || 'Unknown' } }] },
    'Transcript': { rich_text: [{ text: { content: transcript ? transcript.substring(0, 2000) : 'No transcript' } }] }
  };

  if (email) {
    properties['Email'] = { email: email };
  }

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
        properties: properties
      })
    });

    if (!response.ok) return res.status(500).json({ error: 'Notion API error' });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save to Notion' });
  }
}
