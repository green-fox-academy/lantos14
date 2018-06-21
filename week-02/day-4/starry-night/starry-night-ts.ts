'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

// background

ctx.fillStyle = 'black';
ctx.fillRect(0,0,canvas.width,canvas.height);

// random color function

function getStarColor() {
  let rainbow = ['silver','gray','darkgrey','darkgray','gold'];
  let color = '';
    color = rainbow[Math.floor(Math.random() * 5)];
  return color;
}

// star generator
for (let i:number = 0; i < 100; i++) {
  ctx.fillStyle = getStarColor();
  ctx.fillRect(getStarX(),getStarY(),10,10);
}


// random coordinate functions

function getStarX() {
  let x =  Math.floor(Math.random() * 600);
  return x;
}

function getStarY() {
  let y =  Math.floor(Math.random() * 600);
  return y;
}


