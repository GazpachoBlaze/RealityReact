const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// POST /api/analyze route to receive news text and respond with mock analysis
app.post('/api/analyze', (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'No text provided for analysis' });
  }

  // Replace this with real AI fake news detection logic later
  const fakeNewsScore = Math.random(); // Random score for demonstration purposes

  res.json({
    message: 'Fake news analysis complete',
    input: text,
    score: fakeNewsScore.toFixed(2),
  });
});

app.listen(PORT, () => {
  console.log(`Backend API server running on http://localhost:${PORT}`);
});
