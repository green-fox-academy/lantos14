'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.json());
app.use(express.static('static'));
// app.use('/static', express.static('static'));
app.set('view engine', 'ejs');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'quiz',
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/game', (req, res) => {
  let randomNum = Math.floor(Math.random() * 10 + 1);
  let sql = `SELECT  answers.question_id AS questionId, question, answers.id, answers.answer, answers.is_correct AS correct FROM questions INNER JOIN answers ON questions.id = answers.question_id WHERE questions.id = ${randomNum};`;

  conn.query(sql, (err, rows) => {

    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    // preparing the response
    let answerList = [];
    parseAnswers(rows, answerList);

    let sortedRows = {
      id: rows[0].questionId,
      question: rows[0].question,
      answers: answerList,
    };
    // send
    res.json(
      sortedRows,
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/questions', (req, res) => {
  let sql = `SELECT  * FROM questions;`;

  conn.query(sql, (err, rows) => {

    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    // prepare answer

    // send
    res.json(
      rows,
    );
  });
});
// sub functions
const parseAnswers = (rows, resultList) => {
  rows.forEach(row => {
    resultList.push({
      questionId: row.questionId,
      answerId: row.id,
      answer: row.answer,
      is_correct: row.correct
    })
  });
}
