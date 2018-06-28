'use strict';

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

app.use(express.json());

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.get('/posts', (req, res) => {
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

app.post('/posts', (req, res) => {

  let sql = `INSERT INTO posts (title, url) VALUES ('${req.body.title}', '${req.body.url}');`;

  conn.query(sql, (err, rows) => {

    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.send({
      message: `post is stored at ID: ${rows.insertId}`,
    });
  });
});

app.put('/posts/:id/upvote', (req, res) => {
  let sql = `UPDATE posts set score = score + 1 WHERE id = ${req.params.id};`;

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.send({
      message: `post is upvoted at ID: ${req.params.id}`,
    });
  });
});

app.put('/posts/:id/downvote', (req, res) => {
  let sql = `UPDATE posts set score = score - 1 WHERE id = ${req.params.id};`;

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.send({
      message: `post is downvoted at ID: ${req.params.id}`,
    });
  });
});

app.delete('/posts/:id', (req, res) => {
  let sql = `DELETE FROM posts WHERE id = ${req.params.id};`;

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.send({
      message: `post has benn deleted at ID: ${req.params.id}`,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});