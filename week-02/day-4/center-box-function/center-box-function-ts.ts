'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function squareCenter (size:number) {
  for (let i:number = 1; i < 4; i++) {
    let colors: any [] = ['red','yellow','green','black','blue'];
    ctx.fillStyle = colors[i-1];
    ctx.fillRect(300-((size-i*10)/2), 200-((size-i*10)/2), size-i*10, size-i*10);
  }
}

squareCenter (100)