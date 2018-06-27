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

app.get('/api/full-list', (req, res) => {
  const mainQuery = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast INNER JOIN author ON book_mast.aut_id = author.aut_id INNER JOIN category ON book_mast.cate_id = category.cate_id INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id`;
  let sql = `${mainQuery};`;
  let queryInput = [];
  
  if (req.query.category) {
    sql = `${mainQuery} WHERE cate_descrip LIKE '${req.query.category}';`;
  }

  if (req.query.pgt) {
    sql = `${mainQuery} WHERE book_price >= ${req.query.pgt};`;
  }

  if (req.query.category && req.query.pgt) {
    sql = `${mainQuery} WHERE cate_descrip LIKE '${req.query.category}' AND book_price >= ${req.query.pgt};`;
  }

  conn.query(sql, (err, rows) => {

    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      fullList: rows,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
