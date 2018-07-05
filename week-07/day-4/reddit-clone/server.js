'use strict';

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'))

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// return all posts endpoint
app.get('/posts', (req, res) => {
  let sql = `SELECT id, title, url, timestamp, score, user_name FROM posts INNER JOIN users ON posts.owner_id = users.user_id;`;

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
// add new post endpoint
app.post('/posts', (req, res) => {

  let sqlPost = `INSERT INTO posts (title, url) VALUES ('${req.body.title}', '${req.body.url}');`;

  conn.query(sqlPost, (err, rows) => {

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
// upvote post endpoint
app.put('/posts/:id/upvote', (req, res) => {
  let sql = `UPDATE posts set score = score + 1 WHERE id = ${req.params.id};`;
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
  });

  let getScoreSql = `SELECT score FROM posts WHERE id = ${req.params.id};`;
  conn.query(getScoreSql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.send({
      message: rows,
    });
  });
});
// downvote post endpoint
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
// delete post endpoint
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
// modify title and/or url endpoint
app.put('/posts/:id', (req, res) => {
  let sql = ``;
  let message = ``;
  if (req.body.modTitle && req.body.modUrl) {
    console.log('case 1')
    sql = `UPDATE posts SET title = "${req.body.modTitle}", url = "${req.body.modUrl}" WHERE id = ${req.params.id};`;
    message = `post title has been changed to "${req.body.modTitle}", url changed to "${req.body.modUrl}" at ID: ${req.params.id}`;
  } else if (req.body.modTitle && !req.body.modUrl) {
    console.log('case 2')
    sql = `UPDATE posts SET title = "${req.body.modTitle}" WHERE id = ${req.params.id};`;
    message = `post title has been changed to "${req.body.modTitle}" at ID: ${req.params.id}`;
  } else if (!req.body.modTitle && req.body.modUrl) {
    console.log('case 3')
    sql = `UPDATE posts SET url = "${req.body.modUrl}" WHERE id = ${req.params.id};`;
    message = `post url has been changed to "${req.body.modUrl}" at ID: ${req.params.id}`;
  } else if (!req.body.modTitle && !req.body.modUrl) {
    res.send({
      message: `no modifications provided`,
    });
    return;
  }

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.send({
      message,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
