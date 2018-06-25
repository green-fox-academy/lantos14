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
      endNum+=i;
    }
    res.json({
      result: endNum,
    }) 
    // factorio
  } else if (req.params.what === 'factor') {
    let endNum = req.body.until;
    for (let i = req.body.until - 1; i >= 1; i--) {
      endNum*= i
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

module.exports = app;