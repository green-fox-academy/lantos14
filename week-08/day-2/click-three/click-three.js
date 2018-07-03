'use strict';

const btn = document.querySelector('button');
const text = document.querySelector('p');

let timeIsElapsed = false;
let clickCount = 0;

window.onload = () => {

  setTimeout(() => {
    console.log("time is elapsed")
    timeIsElapsed = true;
  }, 5000)
};

btn.addEventListener('click', () => {
  clickCount++;
  if (!timeIsElapsed) {
    alert("you clicked too soon, refresh the page");
    clickCount += 3;
  } else if (timeIsElapsed && clickCount === 3) {
    text.innerText = '5 seconds elapsed and clicked 3 times';
  }
});
