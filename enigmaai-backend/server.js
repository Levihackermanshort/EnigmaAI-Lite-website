const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const OPENAI_API_KEY = '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';

app.post('/chat', async (req, res) => {
  const { message } = req.body;
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo', // or 'gpt-4' if you have access
        messages: [{ role: 'user', content: message }],
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    res.json({ reply: response.data.choices[0].message.content });
  } catch (err) {
    console.error(err.response ? err.response.data : err.message);
    res.status(500).json({ reply: "Sorry, I'm having trouble right now." });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));