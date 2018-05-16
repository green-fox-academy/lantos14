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

  if ((gameTable[0] === 'O' && gameTable[1] === 'O' && gameTable[2] === 'O')
    || (gameTable[5] === 'O' && gameTable[6] === 'O' && gameTable[7] === 'O')
    || (gameTable[10] === 'O' && gameTable[11] === 'O' && gameTable[12] === 'O')
    || (gameTable[0] === 'O' && gameTable[5] === 'O' && gameTable[10] === 'O')
    || (gameTable[1]  === 'O' && gameTable[6]  === 'O' && gameTable[11] === 'O')
    || (gameTable[2] === 'O' && gameTable[7] === 'O' && gameTable[12] === 'O')
    || (gameTable[0]  === 'O' && gameTable[6] === 'O' && gameTable[12] === 'O')
    || (gameTable[2]  === 'O' && gameTable[6]  === 'O' && gameTable[10] === 'O')) {
    return 'O';
  } else if ((gameTable[0] === 'X' && gameTable[1] === 'X' && gameTable[2] === 'X')
    || (gameTable[5] === 'X' && gameTable[6] === 'X' && gameTable[7] === 'X')
    || (gameTable[10] === 'X' && gameTable[11] === 'X' && gameTable[12] === 'X')
    || (gameTable[0] === 'X' && gameTable[5] === 'X' && gameTable[10] === 'X')
    || (gameTable[1]  === 'X' && gameTable[6]  === 'X' && gameTable[11] === 'X')
    || (gameTable[2] === 'X' && gameTable[7] === 'X' && gameTable[12] === 'X')
    || (gameTable[0]  === 'X' && gameTable[6] === 'X' && gameTable[12] === 'X')
    || (gameTable[2]  === 'X' && gameTable[6]  === 'X' && gameTable[10] === 'X')) {
    return 'X';
  } else {
    return 'draw';
  }
}

console.log(ticTacResult('win-o.txt'))
// should print O
console.log(ticTacResult('win-x.txt'))
// should print X
console.log(ticTacResult('draw.txt'))
// should print draw