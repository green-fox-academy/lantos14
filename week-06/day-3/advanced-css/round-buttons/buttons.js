'use strict';

const greenButton = document.getElementById('green');
const blueButton = document.getElementById('blue');
const redButton = document.getElementById('red');
const body = document.querySelector('body');

greenButton.onclick = () => {
  body.setAttribute('class','color-green');
}

blueButton.onclick = () => {
  body.setAttribute('class','color-blue');
}

redButton.onclick = () => {
  body.setAttribute('class','color-red');
}