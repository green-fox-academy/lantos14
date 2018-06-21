'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawLine (startX, startY, endX, endY, count) {
  if (endX > startX) {
    return
  }
ctx.beginPath();
    ctx.moveTo (startX,startY);
    ctx.lineTo (endX, endY);
    ctx.strokeStyle = `forestgreen`;
    ctx.stroke();
    drawLine (startX, startY - 100, endX +100, endY - 20, count - 1);
}

drawLine (450, 600, 200, 100, 10);



// class triangleSwarm {
//   startX: number;
//   startY: number;
//   size: number;
//   count: number;

//   constructor (startX, startY, size, count) {
//     this.startX = startX;
//     this.startY = startY;
//     this.size = size;
//     this.count = count;
//   }
  
//    draw (startX, startY, size, count) {
//     if (count === 1) {
//       return;
//     }
//     ctx.beginPath();
//     ctx.moveTo (startX,startY);
//     ctx.lineTo (startX + size / 3, startY + size / 2);
//     ctx.strokeStyle = `black`;
//     ctx.stroke();
//     ctx.lineTo (startX - size / 3, startY + size / 2);
//     ctx.strokeStyle = 'black';
//     ctx.stroke();
//     ctx.lineTo (startX,startY);
//     ctx.strokeStyle = 'black';
//     ctx.fillStyle = `hsl(${Math.floor(Math.random() * 360) - count}, ${100 - count * 3}%, 50%)`
//     ctx.fill();
//       this.draw (startX + size / 3, startY, size / 2, count -1);
//       this.draw (startX - size / 3, startY, size / 2, count -1);
//       this.draw (startX, startY + size / 2, size / 2, count -1);
//   }
// }
// let swarm1 = new triangleSwarm (400, 50, 600, 10);
// swarm1.draw(400, 50, 600, 10);



