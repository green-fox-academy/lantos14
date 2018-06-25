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

test('post base', (t) => {
  request(app)
  .post('/dountil/sum')
  .send({ until: 5})
  .expect('Content-Type', /json/)
  .expect(200, { result: 15})
  .end((err, res) => {
    t.error(err);
    t.end();
  });
});

// test array

test('/array/sum', (t) => {
  request(app)
  .post('/arrays/sum')
  .send({ what: "sum", numbers: [5, 10, 20]})
  .expect('Content-Type', /json/)
  .expect(200, { result: 35})
  .end((err, res) => {
    t.error(err);
    t.end();
  });
});

test('/array/multiply', (t) => {
  request(app)
  .post('/arrays/sum')
  .send({ what: "multiply", numbers: [5, 6, 2]})
  .expect('Content-Type', /json/)
  .expect(200, { result: 60})
  .end((err, res) => {
    t.error(err);
    t.end();
  });
});

test('/array/multiply', (t) => {
  request(app)
  .post('/arrays/sum')
  .send({ what: "multiply", numbers: [5, 6, 2]})
  .expect('Content-Type', /json/)
  .expect(200, { result: 60})
  .end((err, res) => {
    t.error(err);
    t.end();
  });
});

test('/array/double', (t) => {
  request(app)
  .post('/arrays/double')
  .send({ what: "double", numbers: [5, 6, 2]})
  .expect('Content-Type', /json/)
  .expect(200, { result: [10, 12, 4]})
  .end((err, res) => {
    t.error(err);
    t.end();
  });
});

test('/array/ -- no method', (t) => {
  request(app)
  .post('/arrays/sum')
  .send({ numbers: [5, 6, 2]})
  .expect('Content-Type', /json/)
  .expect(200, { error: "Please provide what to do with the numbers!"})
  .end((err, res) => {
    t.error(err);
    t.end();
  });
});
// need further testing with undefined wath param