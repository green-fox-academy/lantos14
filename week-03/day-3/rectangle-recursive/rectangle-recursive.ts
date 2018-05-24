'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawRects (x, y, size, count) {
// basecase
  if (count === 1) {
  } else {
// top
  ctx.strokeStyle = 'black'
  ctx.strokeRect(x / 3, 0, size, size);
// right
  ctx.strokeStyle = 'black'
  ctx.strokeRect(x * 2 / 3, y / 3, size, size);
// bottom
  ctx.strokeStyle = 'black'
  ctx.strokeRect(x / 3, y * 2 / 3, size, size);
// left
  ctx.strokeStyle = 'black'
  ctx.strokeRect(0, y / 3, size, size);

// changes
  count--
  drawRects (x + size, y + size, size / 3, count);
  }
}
drawRects (600, 600, 200, 6);