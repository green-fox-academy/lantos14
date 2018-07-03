'use strict';

const result = document.querySelector('h1');

window.addEventListener('keyup', (e) => {
  result.innerText = `Last pressed key code is: ${e.keyCode}`;
});
