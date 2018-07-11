'use strict';

const promise = new Promise((fulfill, reject) => {
  setTimeout(() => {
    reject(Error('REJECTED!'));
  }, 300);
})
  .then(function (result) {
    // fulfillment
  }, function (error) {
    onReject(error);
  });

function onReject(error) {
  console.log(error.message);
}

