const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.use(express.json());

app.post('/save-user-info', async (req, res) => {
  const { name, email } = req.body;
  const { data, error } = await supabase.from('users').insert([{ name, email }]);

  if (error) {
    res.status(500).json({ error: error.message });
  } else {
    res.status(200).json(data[0]);
  }
});

app.post('/save-issue', async (req, res) => {
  const { userId, issueType, latitude, longitude } = req.body;
  const { data, error } = await supabase.from('issues').insert([
    { user_id: userId, issue_type: issueType, location: `SRID=4326;POINT(${longitude} ${latitude})` }
  ]);

  if (error) {
    res.status(500).json({ error: error.message });
  } else {
    res.status(200).json(data[0]);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
