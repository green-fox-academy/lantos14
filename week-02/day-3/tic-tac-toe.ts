// Write a function that takes a filename as string,
// open and read it. The file data represents a tic-tac-toe
// game result. Return 'X'/'O'/'draw' based on which player
// has winning situation.

'use strict'

export {};
declare function require (path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';

// reading the file in

function readFromFile (fromFile: string): string {
  return (fs.readFileSync (fromFile, charEncoding));
} 

// core function
function ticTacResult (fromFile: string) {
  let gameTable = readFromFile(fromFile);
  let fillArray: string [] = [];
  for (let i=0; i < 13; i++) {
    fillArray.splice (i,0, gameTable[i]);
  }
  fillArray.splice (3, 2);
  fillArray.splice (6, 2);
  console.log (fillArray);

  if ( (fillArray[0 && 1 && 2] === 'O') 
    || (fillArray[(3 && 4 && 5)] === 'O')
    || (fillArray[(6 && 7 && 8)] === 'O')
    || (fillArray[(0 && 3 && 6)] === 'O')
    || (fillArray[(1 && 4 && 7)] === 'O')
    || (fillArray[(2 && 5 && 8)] === 'O')
    || (fillArray[(0 && 4 && 8)] === 'O')
    || (fillArray[(2 && 4 && 6)] === 'O')) {
      console.log('just work');
    return 'O';
  } else if ((fillArray[(0 && 1 && 2)] === 'X') 
    || (fillArray[(3 && 4 && 5)] === 'X')
    || (fillArray[(6 && 7 && 8)] === 'X')
    || (fillArray[(0 && 3 && 6)] === 'X')
    || (fillArray[(1 && 4 && 7)] === 'X')
    || (fillArray[(2 && 5 && 8)] === 'X')
    || (fillArray[(0 && 4 && 8)] === 'X')
    || (fillArray[(2 && 4 && 6)] === 'X')) {
    return 'X';
  } else {
    return 'draw';
  }
    // visualizer loop
}
  // core counter


console.log(ticTacResult('win-o.txt'))
// should print O
console.log(ticTacResult('win-x.txt'))
// should print X
console.log(ticTacResult('draw.txt'))
// should print draw