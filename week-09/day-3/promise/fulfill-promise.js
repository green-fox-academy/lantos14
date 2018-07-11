'use strict'

const promise = new Promise(function (fulfill, reject) {
  fulfill('FULFILLED!')
});

// Your solution here

const timeout = (input) => {
  setTimeout(() => {
    console.log(input);
  }, 300);
}
promise.then(value => {
  timeout(value);
});
