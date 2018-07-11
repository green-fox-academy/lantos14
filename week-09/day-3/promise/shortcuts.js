'use strict';

const promise = Promise.resolve('SHORT VALUE');

const promiseErr = Promise.reject(Error('SHORT ERROR'));

promise.catch((err) => {
  console.log(err.message);
});
