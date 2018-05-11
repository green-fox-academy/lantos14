'use strict';

export {};

let lineCount: number = 3;

// Write a program that draws a square like this:
//
// %%%%%
// %   %
// %   %
// %   %
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

for (let i: number = 1; i <= lineCount; i++) {
  if (i === 1 || i === lineCount) {
    let sideUpDown: string = '';
    for (let j: number = 1; j <= lineCount; j++){
      sideUpDown = sideUpDown + '%';
    }
    console.log (sideUpDown);
    continue;
  } else {
      let middleLines: string = '%';
      for (let k: number = 1; k <= lineCount-2; k++){
        middleLines = middleLines + ' ';
      }
      middleLines = middleLines + '%';
      console.log (middleLines);
  }
}