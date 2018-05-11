'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//
let pawn: string = ' '
let linePattern: string = ' % % % %'

for (let i: number = 1; i <= 8; i++) {
  if (i % 2 === 1) {
    console.log(linePattern);
  }
  if (i % 2 === 0) {
    console.log(pawn + linePattern);
  }
}