'use strict';

const cors = require('cors');
const express = require('express');
const app = express();

app.use('/assets', express.static('static'));
app.use(cors());

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

module.exports = app;