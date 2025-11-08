const express = require('express');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Your OpenAI API key here in env
});

const openai = new OpenAIApi(configuration);

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    res.json({ token: 'fake-jwt-token' });
  } else {
    res.status(400).json({ message: 'Missing username or password' });
  }
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    res.json({ token: 'fake-jwt-token' });
  } else {
    res.status(400).json({ message: 'Missing username or password' });
  }
});

app.post('/api/analyze', async (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Text to analyze is required' });
  }

  try {
    const prompt = `You are a fake news detector. Based on the following news text, reply with either "Reliable" or "Fake" and a short explanation:\n\n${text}\n\nResult:`;

    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 100,
      temperature: 0,
    });

    const analysis = completion.data.choices[0].text.trim();

    res.json({
      message: 'Fake news analysis complete',
      analysis,
      input: text,
    });
  } catch (error) {
    console.error('OpenAI error:', error);
    res.status(500).json({ error: 'Failed to analyze text' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

