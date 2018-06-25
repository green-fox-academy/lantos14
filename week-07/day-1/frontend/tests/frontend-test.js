'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

// greeter
test('greeter base', (t) => {
  request(app)
    .get('/greeter')
    .expect('Content-Type', /json/)
    .expect(200, { error: "Please provide a name!" })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('greeter only name', (t) => {
  request(app)
    .get('/greeter?name=Tibi')
    .expect('Content-Type', /json/)
    .expect(200, { error: "Please provide a title!" })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('greeter name & title', (t) => {
  request(app)
    .get('/greeter?name=Tibi&title=student')
    .expect('Content-Type', /json/)
    .expect(200, { welcome_message: `Oh, hi there Tibi, my dear student!` })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('appenda base', (t) => {
  request(app)
  .get('/appenda/kuty')
  .expect('Content-Type', /json/)
  .expect(200, { appended: 'kutya'})
  .end((err, res) => {
    t.error(err);
    t.end();
  });
});

test('appenda no appendable provided', (t) => {
  request(app)
  .get('/appenda')
  .expect('Content-Type', /json/)
  .expect(404, { message: '404'})
  .end((err, res) => {
    t.error(err);
    t.end();
  });
});

// test post