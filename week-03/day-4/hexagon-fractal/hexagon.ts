'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

class hexagonSwarm {
  x: number;
  y: number;
  size: number;
  counter: number;

  constructor (x, y, size, counter) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.counter = counter;
  }

  drawHexa (x,y, size, counter) {
    if (counter === 1) {
      return;
    }
    
    ctx.beginPath();
    ctx.moveTo (x, y);
    ctx.lineTo (x + size, y);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.lineTo (x + size / 2 * 3,y + size / 4 * 3);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.lineTo (x + size,y + size / 2 * 3);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.lineTo (x, y + size /2 * 3);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.lineTo (x-size / 2,y + size / 4 * 3);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.lineTo (x, y);
    ctx.strokeStyle = 'black';
    ctx.fillStyle = `hsl(${360 - counter * 5}, ${100 - counter * 10}%, ${100 - counter * 10}%)`
    ctx.fill();

    let self: hexagonSwarm = this;

    setTimeout (function () {
      self.drawHexa (x, y, size / 3, counter - 1);
      self.drawHexa (x + size / 3 * 2, y, size / 3, counter - 1);
      self.drawHexa (x + size / 3 * 2, y, size / 3, counter - 1);
      self.drawHexa (x + size, y + size / 2, size / 3, counter - 1);
      self.drawHexa (x + size / 3 * 2, y + size, size / 3, counter - 1);
      self.drawHexa (x, y + size, size / 3, counter - 1)
      self.drawHexa (x - size / 3, y + size / 2, size / 3, counter - 1);
    }, 750);
  }
}

let hexagonSwarm1 = new hexagonSwarm (100, 100, 180, 6);

hexagonSwarm1.drawHexa(100, 100, 180, 6);
