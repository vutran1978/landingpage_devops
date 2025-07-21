const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'sample2',
  user: 'postgres',
  password: '', // để trống
});

// const pool = new Pool({
//   connectionString: 'postgres://postgres@localhost:5432/sample2',
// });

app.get('/api/message', async (req, res) => {
  const result = await pool.query('SELECT * FROM messages LIMIT 1');
  res.json(result.rows[0]);
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Backend is running on port 5000');
});
