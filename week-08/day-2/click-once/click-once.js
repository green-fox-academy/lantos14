'use strict';

const btn = document.querySelector('button');

// using once attribute
btn.addEventListener('click', (e) => {
  if (!btn.once) {
    console.log(e.timeStamp);
    btn.once = true;
  }
});

// using counter
let counter = 0;
btn.addEventListener('click', (e) => {
  if (counter < 1) {
    console.log(e.timeStamp);
    counter++;
  }
});
