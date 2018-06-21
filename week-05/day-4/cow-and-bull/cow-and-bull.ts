// Create a class what is capable of playing exactly one game of Cows and Bulls (CAB). The player have to guess a 4 digit number. For every digit that the player guessed correctly in the correct place, they have a “cow”. For every digit the player guessed correctly in the wrong place is a “bull.”

// The CAB object should have a random 4 digit number, which is the goal to guess.
// The CAB object should have a state where the game state is stored (playing, finished).
// The CAB object should have a counter where it counts the guesses.
// The CAB object should have a guess method, which returns a string of the guess result
// All methods, including constructor should be tested

'use strict';
export { };
declare function require(path: string): any;
const fs = require('fs');
let charEncoding = 'utf-8'

// reading function
function readFromFile(filePath: string) {
  try {
    return (fs.readFileSync(filePath, charEncoding));
  } catch (error) {
    console.log('Unable to read file: file.txt')
  }
}

// writing function
function writetoFile(toFile, content) {
  return fs.writeFileSync(toFile, content);
}

export class CowAndBull {
  guesses: number;
  state: string;

  constructor() {
    this.guesses = 0;
    this.state = 'solved';
  }

  createRiddle() {
    let readingRiddle: string = readFromFile('riddle.txt');
    let createRiddle: string = '';
    // check if the game is on
    if (readingRiddle.split(';')[2] === 'solved') {
      for (let i: number = 0; i < 4; i++) {
        createRiddle += Math.floor(Math.random() * 10)
      }
      createRiddle += ';0;playing';
      writetoFile('riddle.txt', createRiddle);

    } else {

    }

  }

  guess() {
    let input: string = process.argv[2];

    let readingRiddle: string = readFromFile('riddle.txt');
    
    let mysteriousNumber: string = readingRiddle.split(';')[0];

    for (let i: number = 0; i < 4; i++) {
      if (input[0] === readingRiddle[0] && input[1] === readingRiddle[1] && input[2] === readingRiddle[2] && input[3] === readingRiddle[3]) {
        console.log ('you won the cow, congrats!');
        readingRiddle = '0000;0;solved';
        writetoFile('riddle.txt', readingRiddle);
        break;
      } else if (input[i] === readingRiddle[i]) {
        console.log('cow');
      } else if (readingRiddle.indexOf(input[i]) !== -1){
        console.log('bull');
       } else {};
    }
    readingRiddle = `${readingRiddle.split(';')[0]};${(parseInt(readingRiddle.split(';')[1]) + 1).toString()};${readingRiddle.split(';')[2]}`;
    writetoFile('riddle.txt', readingRiddle);
  }
}

let game1: CowAndBull = new CowAndBull;

game1.createRiddle()

game1.guess()
