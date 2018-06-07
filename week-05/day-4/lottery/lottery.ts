'use strict';

export { };
// Create a method that find the 5 most common lottery numbers in lottery.csv

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';

// reading function
function readFromFile(filePath: string): string {
  try {
    return fs.readFileSync(filePath, charEncoding);
  } catch (error) {
    console.log('File not found');
  }
}

function getMostPopularLotteryNumbers(filename: string) {
  //reading the file and getting the numbers needed
  let srcText: string = readFromFile(filename);
  let srcTextSplitted: string[] = srcText.split('\r\n');

  let lotteryEventList: string[][] = [];

  srcTextSplitted.forEach(e => {
    lotteryEventList.push(e.split(';'))
  })

  let lotteryNumberList: number[] = [];

  for (let i: number = 0; i < lotteryEventList.length; i++) {
    for (let j: number = 11; j < 16; j++) {
      lotteryNumberList.push(parseInt(lotteryEventList[i][j]));
    }
  }
  //counting the numbers within an object
  let counterObject: Object = {};

  for (let i: number = 0; i < lotteryNumberList.length; i++) {
    let number: number = lotteryNumberList[i];
    if (counterObject[number] === undefined) {
      counterObject[number] = 1;
    } else {
      counterObject[number]++;
    }
  }
// separating the keys and values into arrays
  let lotteryNums: string[] = Object.keys(counterObject);

  let numOccurences: number[] = Object.keys(counterObject).map(function (e) {
    return counterObject[e];
  })
// returning the 5 most frequent numbers
  let result: string[] = [];

  for (let i: number = 0; i < 5; i++) {
    let maxOccuredNumber: number = numOccurences.reduce(function (a, b) {
      return Math.max(a, b);
    })
    let maxOccurencedNumberIndex: number = numOccurences.indexOf(maxOccuredNumber);

    result.push(lotteryNums[numOccurences.indexOf(maxOccuredNumber)]);

    numOccurences[numOccurences.indexOf(maxOccuredNumber)] = 0;
  }
  return result;
}

console.log(getMostPopularLotteryNumbers('lottery.csv'));