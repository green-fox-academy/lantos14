'use strict';

const cors = require('cors');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use('/assets', express.static('static'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});



app.get('/doubling', (req, res) => {
  if (req.query.input) {
    res.json({
      received: parseInt(req.query.input),
      result: parseInt(req.query.input * 2)
    })
  } else {
    res.json({
      error: "Please provide an input!",
    })
  }
});

app.get('/greeter', (req, res) => {
  if (req.query.name && req.query.title) {
    res.json({
      welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    });
  } else if (!req.query.name) {
    res.json({
      error: "Please provide a name!",
    })
  } else {
    res.json({
      error: "Please provide a title!",
    })
  }
});

app.get('/appenda/:appendable', (req, res) => {

  if (req.params.appendable) {
    res.json({
      appended: `${req.params.appendable}a`,
    });
  } else {
    res.status(404);
    res.send({
      message: '404',
    })
  }
});

app.get('/appenda', (req, res) => {
  res.status(404);
  res.send({
    message: '404',
  })
})

app.post('/dountil/:what', (req, res) => {

  // sum
  if (req.params.what === 'sum') {
    let endNum = 0;
    for (let i = 1; i <= req.body.until; i++) {
      endNum += i;
    }
    res.json({
      result: endNum,
    })
    // factorio
  } else if (req.params.what === 'factor') {
    let endNum = req.body.until;
    for (let i = req.body.until - 1; i >= 1; i--) {
      endNum *= i
    }
    res.json({
      result: endNum,
    })
    // no number provided
  } else {
    res.json({
      error: 'Please provide a number!',
    })
  }
});

app.post('/arrays/:what', (req, res) => {

  if (req.body.what === 'sum' && req.body.numbers) {
    let endNum = 0;
    req.body.numbers.forEach(num => {
      endNum += num;
    });
    res.json({
      result: endNum,
    })
  } else if (req.body.what === 'multiply' && req.body.numbers) {
    let endNum = req.body.numbers.reduce((a, b) => a * b, 1);
    res.json({
      result: endNum,
    });
  } else if (req.body.what === 'double' && req.body.numbers) {
    res.json({
      result: req.body.numbers.map(n => n * 2),
    })
  } else {
    res.json({
      error: "Please provide what to do with the numbers!",
    });
  }
});

app.post ('/arrays', (req, res) => {
  res.json({
    error: "Please provide what to do with the numbers!",
  });
});

app.post('/sith', (req, res) => {

  if (req.body.text) {
    let text = req.body.text.toLowerCase().split(' ');
    // switching words
    for (let i = 0; i < text.length; i += 2) {
      if (text[i][text[i].length - 1] === '.' || text[i + 1][text[i + 1].length - 1] === '.') {
        i--;
      } else {
        let temp = text[i];
        text[i] = text[i + 1];
        text[i + 1] = temp;
      }
    }
    for (let i = 0; i < text.length; i++) {
      // capitalizing 1st letter
      if (i === 0) {
        text[i] = text[i][0].toUpperCase() + text[i].slice(1);
      }
      // capitalizing other letters
      if (text[i][text[i].length - 1] === '.') {
        if (text[i + 1]) {
          text[i + 1] = text[i + 1][0].toUpperCase() + text[i + 1].slice(1);
        }
        // adding gibberish words and capitalize
        let oneOrTwo = Math.floor(Math.random() * 2);
        let gibberish = ['Hmm.. ', 'Haa?', 'Rmm.. '];
        switch (oneOrTwo) {

          case 0:
            text.splice(i + 1, 0, gibberish[Math.floor(Math.random() * 3)]);
            i++;

          case 1:
            text.splice(i + 1, 0, gibberish[Math.floor(Math.random() * 3)] + gibberish[Math.floor(Math.random() * 3)]);
            i++
        }
      }
    }

    res.send({
      sith_text: text.join(' '),
    })
  } else {
    res.send({
      error: "Feed me some text you have to, padawan young you are. Hmmm.",
    });
  }
});

module.exports = app;