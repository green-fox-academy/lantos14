'use strict';

const nav = document.querySelector('nav');
const img = document.querySelector('.img-inspector');

let verticalMove = 0;
let horizontalMove = 0;
let zoomValue = 200;

nav.addEventListener('click', (e) => {
  if (e.target.getAttribute('data-action') === "move") {
    
    switch (e.target.getAttribute('data-direction')) {

      case 'up':
      verticalMove += 20;
      img.style["background-position-y"] = `${verticalMove}px`;
        break;

      case 'down':
      verticalMove -= 20;
      img.style["background-position-y"] = `${verticalMove}px`;
        break;

      case 'left':
      horizontalMove += 20;
      img.style["background-position-x"] = `${horizontalMove}px`;
        break;

      case 'right':
      horizontalMove -= 20;
      img.style["background-position-x"] = `${horizontalMove}px`;
        break;
    };
  } else if (e.target.getAttribute('data-action') === "zoom") {
    
    switch (e.target.getAttribute('data-direction')) {

      case 'in':
      zoomValue += 20;
      img.style["background-size"] = `${zoomValue}%`;
        break;

      case 'out':
      zoomValue -= 20;
      img.style["background-size"] = `${zoomValue}%`;
        break;
    };
  }
});
