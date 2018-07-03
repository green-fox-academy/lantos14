'use strict';

const list = document.querySelectorAll('ul li');
const btn = document.querySelector('button');
const resultP = document.querySelector('.result');

btn.addEventListener('click', () => {
  resultP.innerText = list.length;
});
