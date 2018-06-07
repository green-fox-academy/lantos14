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

let birthList: string = readFromFile('births.csv');

function getFrequentDate(birthList: string) {

  let birthDates: string[] = [];
  let temp = birthList.split(';')
  let dates = [];
  for (let i: number = 1; i < temp.length; i += 2) {
    dates.push(temp[i]);
  }

  let years = [];
  dates.map(e => {
    years.push(parseInt(e.slice(0, 4)));
  })
  let CounterObject: Object = {};
  for (let i: number = 0; i < years.length; i++) {
    let number: number = years[i];
    if (CounterObject[number] === undefined) {
      CounterObject[number] = 1;
    } else {
      CounterObject[number]++;
    }
  }

  let dateList = Object.keys(CounterObject);

  let values = Object.keys(CounterObject).map(function (e) {
    return CounterObject[e]
  })
  let maxOccuredNumber = values.reduce(function(a, b) {
    return Math.max(a, b);
  })

  let maxOccurencedNumberIndex: number = values.indexOf(maxOccuredNumber);

  return dateList[maxOccurencedNumberIndex];
}

console.log(getFrequentDate(birthList));
