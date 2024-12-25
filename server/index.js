import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch'; 
import path from 'path';
import { evaluate } from './rules/rules.js';

const app = express();
const PORT = 2728;

app.use(cors());
const publicPath = path.resolve('./public');
app.use(express.static(publicPath));

// API to evaluate the checklist
app.get('/api/evaluate', async (req, res) => {
  try {
    const response = await fetch(
      'http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639'
    );
    const data = await response.json();

    const evaluation = evaluate(data);
    res.json({ success: true, results: evaluation });
  } catch (error) {
    console.error('Error fetching API data:', error);
    res.status(500).json({ success: false, message: 'Error fetching data.' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve('./public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
