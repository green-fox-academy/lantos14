'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.


// Create a loop that fills the canvas with rainbow colored squares.

// random color function
function getRandomColor() {
  let rainbow = ['red','orange','yellow','green','teal','blue','violet'];
  let color = '';
    color = rainbow[Math.floor(Math.random() * 6)];
  return color;
}

function rainbowBox () {
  for (let i:number = 1; i < 160; i++) {
    ctx.fillStyle = getRandomColor();
    ctx.fillRect(300-((600-i*4)/2), 200-((600-i*4)/2), 600-i*4, 600-i*4);
  }
}

rainbowBox ();

