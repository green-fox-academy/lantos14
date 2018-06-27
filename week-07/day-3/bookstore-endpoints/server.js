'use strict';

require('dotenv').config();
const express = require('express');
const path = require('path');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

app.use('/static', express.static('static'));

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
});

app.get('/api/titles', (req, res) => {
  let sql = 'SELECT book_name FROM book_mast;';

  conn.query(sql, (err, rows) => {

    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      bookNames: rows,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
