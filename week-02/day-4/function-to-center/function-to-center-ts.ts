'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function linesToMiddle () {
  let x = 0;
  let y = 0;
  for (let i:number = 0; i <= 30; i++) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(300, 200);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    x += 20;
    console.log (x);
  }
  x = 0;
  y = 400;
  for (let j:number = 0; j <= 30; j++) {
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(300, 200);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    x += 20;
  }
  x = 0;
  y = 0;
  for (let j:number = 0; j <= 20; j++) {
   
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(300, 200);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    y += 20;
  }
  x = 600;
  y = 0;
  for (let j:number = 0; j <= 20; j++) {
   
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(300, 200);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    y += 20;
  }
}
linesToMiddle ();