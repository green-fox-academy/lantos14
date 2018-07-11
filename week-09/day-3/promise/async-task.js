'use strict';

const promise = new Promise ((resolve, reject) => {
  resolve('PROMISE VALUE')
  reject()
})
.then(console.log);

console.log('MAIN PROGRAM');
