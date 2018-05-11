'use strict';

let lineCount: number = 7;

// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

for (let i: number = 1; i <= lineCount; i++) {
  if (i === 1 || i === lineCount) {
    let sideUpDown: string = '';

    // upper and bottom side

    for (let j: number = 1; j <= lineCount; j++){
      sideUpDown = sideUpDown + '%';
    }
    console.log (sideUpDown);
    continue;
    // middle lines
  } else {
      let middleLines: string = '%';
      for (let k: number = 2; k <= lineCount-1; k++){
        if (k === i) {
          middleLines = middleLines + '%';
        } else {
          middleLines = middleLines + ' ';
        }
      }
      middleLines = middleLines + '%';
      console.log (middleLines);
  }
}