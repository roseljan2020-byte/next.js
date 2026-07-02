export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { contentType, productInfo, audience, tone } = req.body;

  // Validate inputs
  if (!productInfo || !audience) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error('ANTHROPIC_API_KEY not set');
    return res.status(500).json({ error: 'API key not configured' });
  }

  const contentPrompts = {
    email: 'Create a compelling email subject line and short body copy. Format as: SUBJECT: [subject]\n\nBODY: [body]',
    social: 'Create 3 engaging social media posts for different platforms (LinkedIn, Twitter, Instagram). Format each clearly with platform name.',
    ads: 'Create Google/Facebook ad copy with a catchy headline and 2-3 line description. Include a call-to-action.',
    landing: 'Create a compelling landing page with: Headline, Subheading (1-2 sentences), Key benefits (3 bullet points), Call-to-action button text',
    product: 'Create a professional product description that highlights features and benefits. Keep it concise and persuasive.',
  };

  const systemPrompt = `You are an expert marketing copywriter specializing in high-converting marketing content. 
Your task is to create compelling, persuasive marketing copy that drives action and resonates with the target audience.
Always be concise, impactful, and include specific benefits.
Tone: ${tone}
Format the output clearly with sections.`;

  const userPrompt = `${contentPrompts[contentType]}

Product/Service: ${productInfo}
Target Audience: ${audience}
Tone: ${tone}

Generate compelling marketing content that will convert readers into customers.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-opus-4-6',
        max_tokens: 1024,
        system: systemPrompt,
        messages: [
          {
            role: 'user',
            content: userPrompt,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Anthropic API error:', errorData);
      return res.status(response.status).json({
        error: errorData.error?.message || 'Failed to generate content',
      });
    }

    const data = await response.json();
    const content = data.content[0]?.text || 'Error generating content';

    return res.status(200).json({ content });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
