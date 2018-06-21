'use strict';

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
//        root name       function  folder  <= static meanings
app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
});

app.get('/hola', (req, res) => {
  res.send('Hola!!!!');
});

app.get('/greet/:message', (req, res) => {
  // html input: http://localhost:3000/greet/hola?name=Fox
  console.log(req.query);
  // default parameter
  let name = 'Fox';
  if (req.query.name) {
    name = req.query.name;
  }
  res.send(`${req.params.message}, ${name}`);
});

app.listen(PORT, () => {
  console.log('Yey, Im running on port ' + PORT);
})