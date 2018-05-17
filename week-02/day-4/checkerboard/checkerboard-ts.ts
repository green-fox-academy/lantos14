'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

function checkMate (x:number,y:number, size:number) {
  let originalX = x;
  for (let j:number = 1; j < 20; j++) {
    if (j % 2 === 0) {
        for (let i: number = 1; i < 20; i++) {
          if (i % 2 === 0) {
          ctx.fillStyle = 'black';
          } else {
            ctx.fillStyle = 'white';
          }
          ctx.fillRect(x, y, size, size);
          x += size;
        }
      } else {
        for (let i: number = 1; i < 20; i++) {
          if (i % 2 === 1) {
          ctx.fillStyle = 'black';
          } else {
            ctx.fillStyle = 'white';
          }
          ctx.fillRect(x, y, size, size);
          x += size;
        }
      }
    x = originalX;
    y += size;
  }
}
checkMate (0,0,40);