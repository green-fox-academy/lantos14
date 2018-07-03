'use strict';

const btn = document.querySelector('button');
const text = document.querySelector('p');

btn.addEventListener('click', (e) => {

  let alert = () => {
  text.innerText = '2 sec elapsed';
}

setTimeout(alert, 2000);

});
