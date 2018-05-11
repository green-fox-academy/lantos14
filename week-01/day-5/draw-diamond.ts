'use strict';

export {};

let lineCount: number = 7;

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
for (let i: number = 0; i <= lineCount/2-1; i++){
  let output: string = '';

    // space

    for (let j: number = 0; j < lineCount/2-i; j++){
      output = output + ' ';
    }

    // star
    if (lineCount % 2 === 1) {
      for (let k: number = 1; k <= (i*2+1); k++){
        output = output + '*';
      } 
    }
    if (lineCount % 2 === 0) {
      for (let k: number = 0; k <= (i*2); k++){
        output = output + '*';
      }
    }

  console.log (output);
}
// console.log('---------');
// bottom side - flipped pyramid
for (let i: number = 0; i < lineCount/2; i++){
  let output: string = '';

  // loop for spaces

  for (let j: number = 0; j <= i; j++){
    output = output + ' ';
  }
  
  // loop for star
  
  if (lineCount % 2 === 0) {
    for (let k: number = 0; k < (lineCount/2-i)*2-1; k++){
      output = output + '*';
    }
  }
  if (lineCount % 2 === 1) {
    for (let k: number = 0; k < (lineCount/2-i)*2; k++){
      output = output + '*';
    }
  }
console.log(output);
}
