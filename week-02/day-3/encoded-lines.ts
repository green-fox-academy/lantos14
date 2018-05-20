'use strict'

export {};

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'

// reading function
function readFromFile (filePath: string) {
  return fs.readFileSync (filePath, charEncoding);
}

let reverseText: string = readFromFile ('encoded-lines.txt');
let alphabetLower: string = 'abcdefghijklmnopqrstuvwxyz[\'('
let alphabetUpper: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ['
let decodedResult: string = '';

for (let i:number = 0; i < reverseText.length; i++) {
  //testing if char not a letter
  if (alphabetLower.indexOf(reverseText[i]) === -1 && alphabetUpper.indexOf(reverseText[i]) === -1) {
    decodedResult += reverseText[i];
    //testing if it's uppercase
  } else if (alphabetLower.indexOf (reverseText[i]) === -1) {
    let index = 0;
    index = alphabetUpper.indexOf (reverseText[i])
    decodedResult += alphabetUpper[index-1];
    // in case of lowercase
  } else {
    let index = 0;
    index = alphabetLower.indexOf (reverseText[i])
    decodedResult += alphabetLower[index-1];
  }
}

console.log (decodedResult);
