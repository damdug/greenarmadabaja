const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

module.exports = async (req, res) => {
  const { name, email } = req.body;

  const { data, error } = await supabase.from('users').insert([{ name, email }]);

  if (error) {
    res.status(500).json({ error: error.message });
  } else {
    res.status(200).json(data[0]);
  }
};
