'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.


function fourRect (x:number, y:number) {
  for (let i:number = 1; i < 5; i++) {
    let colors: any [] = ['green', 'yellow', 'brown', 'red']
    ctx.fillStyle = colors[i-1];
    ctx.fillRect(50 + i*40, 50 + i*30, i*20, i*20);
  }
}

fourRect (50,50)
