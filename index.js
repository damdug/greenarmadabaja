const express = require('express');
const bodyParser = require('body-parser');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(bodyParser.json());
app.use(express.static('public'));

// Serve the index.html file for the root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/api/signup', async (req, res) => {
  const { name, email } = req.body;
  console.log('Request body:', req.body);

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  try {
    const { data, error } = await supabase
      .from('users')
      .insert([{ name, email }]);

    if (error) {
      throw error;
    }

    console.log('Inserted data:', data);
    res.status(200).json({ message: 'User signed up successfully', data });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



