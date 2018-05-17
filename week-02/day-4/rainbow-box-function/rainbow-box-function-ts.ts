'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.


// Create a loop that fills the canvas with rainbow colored squares.

function rainbowBox () {
  for (let i:number = 1; i < 150; i++) {
    ctx.fillStyle = `hsl(${360-i*2}, ${0+i}%, 50%)`;
    ctx.fillRect(300-((600-i*4)/2), 200-((600-i*4)/2), 600-i*4, 600-i*4);
  }
}

rainbowBox ();
