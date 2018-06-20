'use strict';

const pList = document.querySelectorAll('p');

console.log (pList);

// task 1
if (pList[3].classList[0] === 'dolphin') {
  document.querySelector('.apple').innerText = 'pear';
}

// task 2
if (pList[0].classList[0] === 'apple') {
  pList[2].innerText = 'dog';
}

// task 3
document.querySelector('.apple').setAttribute('class', 'red');

// task 4
document.querySelector('.balloon').setAttribute('class','pear');


