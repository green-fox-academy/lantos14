'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.

function horizont (x: number, y: number) {
  for (let i: number = 0; i < 50; i++) {
    ctx.beginPath();
    ctx.moveTo(x, y + i*5);
    ctx.lineTo(600, y + i*5);
    ctx.strokeStyle = 'black';
    ctx.stroke();
  }
}

horizont (0, 50);