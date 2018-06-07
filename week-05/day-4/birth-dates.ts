// Create a function that
// - takes a filename as a parameter,
// - reads a csv file which rows contains data in the following format: <person name>;<birthdate in YYYY-MM-DD format>;<city name>
// - returns the year when the most births happend.
// You can find such a csv file in this directory: births.csv
// If you pass births.csv to your function, the result should be 2006.

'use strict';

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'

// reading function
function readFromFile(filePath: string) {
  try {
    return fs.readFileSync(filePath, charEncoding);
  } catch (error) {
    console.log('File not found');
  }
}

function getFrequentDate(filename: string): number {
  //reading the file in
  let birthList: string = readFromFile(filename);
  //Getting the dates out of the list
  let tempList: string[] = birthList.split(';')
  let dates = [];
  for (let i: number = 1; i < tempList.length; i += 2) {
    dates.push(tempList[i]);
  }
  //Getting the years out of the list
  let years: number[] = [];

  dates.map(e => {
    years.push(parseInt(e.slice(0, 4)));
  })
  // counting the occurences in an object
  let CounterObject: Object = {};
  for (let i: number = 0; i < years.length; i++) {
    let number: number = years[i];
    if (CounterObject[number] === undefined) {
      CounterObject[number] = 1;
    } else {
      CounterObject[number]++;
    }
  }
  // counting the object keys and values in separate arrays
  let dateList: string[] = Object.keys(CounterObject);

  let values: number[] = Object.keys(CounterObject).map(function (e) {
    return CounterObject[e]
  })
  let maxOccuredNumber: number = values.reduce(function (a, b) {
    return Math.max(a, b);
  })
  // returning the max occurenced year by it's value's index
  let maxOccurencedNumberIndex: number = values.indexOf(maxOccuredNumber);

  return parseInt(dateList[maxOccurencedNumberIndex]);
}

console.log(getFrequentDate('births.csv'));
