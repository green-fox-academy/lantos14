'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function baseRects (x: number, y: number, size: number, Count: number) {
  ctx.strokeStyle = 'purple';
  ctx.strokeRect(x, y + size / 3, size, size / 3); 
  ctx.strokeRect(x + size / 3, y, size / 3, size);
  if (Count > 1) {
    baseRects (x, y + size / 3, size / 3, Count -1);
    baseRects (x + size / 3, y, size / 3, Count - 1);
    baseRects (x + size / 3, y + size * 2 / 3, size / 3, Count - 1);
    baseRects (x + size * 2 / 3, y + size / 3, size / 3, Count -1);
  }
}

baseRects(0, 0, 900, 5);