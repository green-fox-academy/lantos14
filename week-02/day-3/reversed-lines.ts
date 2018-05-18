// Create a method that decrypts reversed-lines.txt 

'use strict'

export {};

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'

// reading function
function readFromFile (filePath: string) {
   return fs.readFileSync (filePath, charEncoding);
}

let reverseText: string = readFromFile ('reversed-lines.txt');


function decrypt () {
  let result:string = '';
  for (let i:number = 1; i < reverseText.length; i++) {
    result += reverseText[reverseText.length-i];
  }
  return result;
}

console.log (decrypt());
