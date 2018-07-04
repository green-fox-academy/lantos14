'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('static'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'newsletter.html'));
});

app.post('/signup', (req, res) => {
  let result = `<h1>Thanks ${req.body.username}, we will send updates to ${req.body.email}</h1>`;
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
