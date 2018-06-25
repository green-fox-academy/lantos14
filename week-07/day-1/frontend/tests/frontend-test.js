'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('/', (t) => {
  request(app)
  .get('/')
  .expect('Content-Type', /text\/html/)
  .end((err, res) => {
    t.end();
  });
});

test('/doubling', (t) => {
  let input = 5; 
  request(app)
  .get('/doubling')
  .expect({
    received: 5,
    result: 10
  })
  .end();
})
