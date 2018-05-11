'use strict';

let lineCount: number = 6;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

// upper side - pyramid
for (let i: number = 0; i <= lineCount; i++){
  let output: string = '';
      // space
      for (let j: number = 0; j < lineCount-i; j++){
          output = output + ' ';
      }
      // star
      for (let k: number = 0; k <= (i*2+1); k++){
          output = output + '*';
      }

  console.log (output);
}
// console.log ('\n')
// bottom side - flipped pyramid
for (let i: number = 0; i < lineCount; i++){
  let output: string = '';

  // loop for spaces

  for (let j: number = 0; j <= i; j++){
    output = output + ' ';
  }
  
  // loop for star

  for (let k: number = 0; k < lineCount-i; k++){
    output = output + '*' + '*';
  }
console.log(output);
}
