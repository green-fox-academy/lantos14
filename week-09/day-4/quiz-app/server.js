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
  let randomId = '';

  let sqlRandom = `SELECT questions.id FROM questions ORDER BY RAND() LIMIT 1;`;

  conn.query(sqlRandom, (err, randNum) => {

    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }

    randomId = randNum[0].id;
    console.log('randNumRAND: ', randNum);
    console.log('randomIdRAND: ', randomId);
    let sql = `SELECT answers.question_id AS questionId, question, answers.id, answers.answer, answers.is_correct AS correct FROM questions INNER JOIN answers ON questions.id = answers.question_id WHERE questions.id = ${randomId};`;
    console.log('randomIdSQL: ', randomId);
  
    conn.query(sql, (err, rows) => {
      console.log('rows: ', rows);
  
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

app.post('/questions', (req, res) => {

  let sqlPostQuestion = `INSERT INTO questions (question)
  VALUES ('${req.body.question}');`

  let sqlPostAnswers = `INSERT INTO answers (question_id, answer, is_correct) VALUES ((SELECT MAX(id) FROM questions), '${req.body.a1.text}', '${req.body.a1.correct}'), ((SELECT MAX(id) FROM questions), '${req.body.a2.text}', '${req.body.a2.correct}'), ((SELECT MAX(id) FROM questions), '${req.body.a3.text}', '${req.body.a3.correct}'), ((SELECT MAX(id) FROM questions), '${req.body.a4.text}', '${req.body.a4.correct}');`;

  conn.query(sqlPostQuestion, (err, rows) => {

    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
  });

  conn.query(sqlPostAnswers, (err, rows) => {

    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
  });
  res.send({
    message: `question inserted`,
  });
});

app.delete('/questions/:id', (req, res) => {
  let sql = `DELETE questions, answers FROM questions INNER JOIN answers ON answers.question_id = questions.id  WHERE questions.id = ${req.params.id};`;

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
