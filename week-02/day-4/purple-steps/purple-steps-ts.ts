
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

function purpleSteps () {
  for (let i:number = 1; i < 16; i++) {
    ctx.fillStyle = '#b145f3';
    ctx.fillRect(10+i*10, 10+i*10, 10, 10);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(10+i*10, 10+i*10, 10, 10);
  }
}
purpleSteps ();