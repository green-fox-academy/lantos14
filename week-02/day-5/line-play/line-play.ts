'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// half-circles

let startX = 20;
let startY = 0;
let endX = 400;
let endY = 20;
for (let i:number = 0; i <= 20; i++) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.strokeStyle = 'purple';
  ctx.stroke();
  startX += 20;
  endY += 20;
}

startX = 0;
startY = 20;
endX = 20;
endY = 400;
for (let i:number = 0; i <= 20; i++) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.strokeStyle = 'green';
  ctx.stroke();
  startY += 20;
  endX += 20;
}