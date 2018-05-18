'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// one hexagon subfunction
function drawHexa (x,y) {
  ctx.beginPath();
  ctx.moveTo (x,y);
  ctx.lineTo (x+20,y);
  ctx.strokeStyle = 'red';
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo (x+20,y);
  ctx.lineTo (x+30,y+15);
  ctx.strokeStyle = 'red';
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo (x+30,y+15);
  ctx.lineTo (x+20,y+30);
  ctx.strokeStyle = 'red';
  ctx.stroke();ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo (x+20,y+30);
  ctx.lineTo (x,y+30);
  ctx.strokeStyle = 'red';
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo (x,y+30);
  ctx.lineTo (x-10,y+15);
  ctx.strokeStyle = 'red';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo (x-10,y+15);
  ctx.lineTo (x,y);
  ctx.strokeStyle = 'red';
  ctx.stroke();
}

// main function
let firstHexaX = 0;
let firstHexaY = 0;

function drawHexTable (x,y) {
  
  drawHexa (x,y);
  
  // upper half
  
  for (let i:number = 1; i < 4; i++) {
    x -= 30; 
    y += 15; 
    drawHexa (x,y);
    firstHexaX = x;
    
    for (let j:number = 1; j <=  i; j++) {
      x += 60; 
      drawHexa (x,y);
    }
    x = firstHexaX;
  }
  
  // middle rows
  
  for (let j:number = 1; j < 4; j++) { 
    y += 30; 
    firstHexaY = y;
    drawHexa (x,y);
      
    for (let k:number = 1; k <= 3; k++) {
      x += 30;
      y -= 15;
      drawHexa (x,y);
      x += 30;
      y += 15; 
      drawHexa (x,y);
    }
    x = firstHexaX;
  }
  x = firstHexaX;
  
  // bottom half
  
  for (let i:number = 1; i < 4; i++) {
    x += 30;
    y += 15
    drawHexa (x,y);
    firstHexaX = x;
    
    for (let j:number = 3; j > i; j--) {
      x += 60;
      drawHexa (x,y);
    }
  x = firstHexaX;
  }
}

drawHexTable (180,50);
