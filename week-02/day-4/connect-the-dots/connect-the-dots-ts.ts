'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let dotList1: any [] = [[10, 10], [290,  10], [290, 290], [10, 290]];
let dotList2: any [] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],[120, 100], [85, 130], [50, 100]]

function connectDots (list) {
  for (let i:number = 0; 0 <= list.length-1; i++) {
    if (i === list.length-1) {
      ctx.beginPath();
      ctx.moveTo(list[i][0],list[i][1]);
      ctx.lineTo(list[0][0],list[0][1]);
      ctx.strokeStyle = 'green';
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.moveTo(list[i][0],list[i][1]);
      ctx.lineTo(list[i+1][0],list[i+1][1]);
      ctx.strokeStyle = 'green';
      ctx.stroke()
    }
  }
}

connectDots (dotList1);