// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

'use = strict'

export {};

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'

// read function

function readFromFile (filePath: string) {
  try {
  return fs.readFileSync (filePath, charEncoding);
  } catch(error) {
    return null;
  }
}

// counting line function

function countingLines () {
  let fileContent = readFromFile ('my-file.txt');
  if (fileContent === null){
    return 0;
  } else {
  let splittedContent = fileContent.split ('\r\n');
  let counter = 0;
  splittedContent.forEach(element => {
    counter = counter + 1;
  });
  return counter;
  }
}

console.log (countingLines ());