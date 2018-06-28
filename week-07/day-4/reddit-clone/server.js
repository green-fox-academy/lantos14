'use strict';

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const app = express();
const { parse } = require('querystring');
const PORT = 3000;

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.get('/api/posts', (req, res) => {
  let sql = `SELECT * FROM posts;`;

  conn.query(sql, (err, rows) => {

    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      posts: rows,
    });
  });
});

app.post('/api/posts', (req, res) => {

  
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});