'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// bottom-left
let startX = 0;
let startY = 200;
let endX = 200;
let endY = 220;
for (let i:number = 0; i <= 10; i++) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.strokeStyle = 'green';
  ctx.stroke();
  startX += 20;
  endY += 20;
}

// top-right
startX = 200;
startY = 0;
endX = 220;
endY = 200;
for (let i:number = 0; i <= 9; i++) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.strokeStyle = 'green';
  ctx.stroke();
  startY += 20;
  endX += 20;
}

// top-left
startX = 0;
startY = 200;
endX = 200;
endY = 180;
for (let i:number = 0; i <= 10; i++) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.strokeStyle = 'green';
  ctx.stroke();
  startX += 20;
  endY -= 20;
}

// bottom-right
startX = 200;
startY = 400;
endX = 220;
endY = 200;
for (let i:number = 0; i <= 9; i++) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.strokeStyle = 'green';
  ctx.stroke();
  endX += 20;
  startY -= 20;
}