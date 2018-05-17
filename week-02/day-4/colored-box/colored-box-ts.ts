'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.    

// upper line
ctx.beginPath();
ctx.moveTo(100,50);
ctx.lineTo(300,50);
ctx.strokeStyle = 'black';
ctx.stroke();
// rigth line
ctx.beginPath();
ctx.moveTo(300,50);
ctx.lineTo(300,250);
ctx.strokeStyle = 'orange';
ctx.stroke();
// bottom line
ctx.beginPath();
ctx.moveTo(300,250);
ctx.lineTo(100,250);
ctx.strokeStyle = 'purple';
ctx.stroke();
// left line
ctx.beginPath();
ctx.moveTo(100,250);
ctx.lineTo(100,50);
ctx.strokeStyle = 'pink';
ctx.stroke();