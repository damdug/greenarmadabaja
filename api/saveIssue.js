const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

module.exports = async (req, res) => {
  const { userId, issueType, latitude, longitude } = req.body;

  const { data, error } = await supabase.from('issues').insert([
    { user_id: userId, issue_type: issueType, location: `SRID=4326;POINT(${longitude} ${latitude})` }
  ]);

  if (error) {
    res.status(500).json({ error: error.message });
  } else {
    res.status(200).json(data[0]);
  }
};
