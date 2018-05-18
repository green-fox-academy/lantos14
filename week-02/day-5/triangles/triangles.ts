'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// one triangle subfunction
function drawTriangle (x,y) {
  ctx.beginPath();
  ctx.moveTo (x,y);
  ctx.lineTo (x+(20),y+(20));
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo (x+(20),y+(20));
  ctx.lineTo (x-(20),y+(20));
  ctx.strokeStyle = 'black';
  ctx.stroke();ctx.beginPath();
  ctx.moveTo (x-(20),y+(20));
  ctx.lineTo (x,y);
  ctx.strokeStyle = 'black';
  ctx.stroke();
}

// main function
let firstTriangleX = 0;
function drawPyramid (x,y, height) {
  drawTriangle (x,y);
  for (let i:number = 1; i < height; i++) {
    x -= 20; // moving left 1 triangle
    y += 20; // moving down 1 row
    firstTriangleX = x;
    drawTriangle (x,y);
    for (let j:number = 1; j <=  i; j++) { // filling up the row with j number of triangles
      x += 40; 
      drawTriangle (x,y);
    }
    x = firstTriangleX;
  }
}

drawPyramid (200,100,10);