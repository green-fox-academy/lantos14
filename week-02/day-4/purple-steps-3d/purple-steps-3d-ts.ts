'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

function purpleSteps (x: number, y: number, size: number) {
  for (let i:number = 1; i < 6; i++) {
    ctx.fillStyle = '#b145f3';
    ctx.fillRect(x, y, size, size);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(x, y, size, size);
    x += size;
    y += size;
    size += 10;
  }
}
purpleSteps (10,10,20);