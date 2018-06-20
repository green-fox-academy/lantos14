'use strict';

// task 1

const king = document.getElementById('b325');

console.log(king);

// task 2

const businessLamp = document.getElementsByClassName('big');

console.log(businessLamp);

// task 3

const conceitedKing = document.querySelectorAll('.container div');

for (let i = 0; i < conceitedKing.length; i++) {
  alert(conceitedKing[i].innerHTML);
}

// task 4

const noBusiness = document.querySelectorAll('div.asteroid'); 

for (let i = 0; i < noBusiness.length; i++) {
  console.log(noBusiness[i].innerHTML);
}
