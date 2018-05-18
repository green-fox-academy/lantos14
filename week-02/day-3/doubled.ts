// Create a method that decrypts duplicated-chars.txt

'use = strict'
export {};

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'

// reading function
function readFromFile (filePath: string) {
   return fs.readFileSync (filePath, charEncoding);
}
// writing function
function writetoFile (toFile, content) {
  return fs.writeFileSync (toFile, content);
}
let secretText = readFromFile('duplicated-chars.txt');

function removeDuplicate () {
  let result = '';
  for (let i:number = 0; i < secretText.length; i+=2) {
    result = result + secretText[i]
  }
  return result;
}

let encoded = removeDuplicate();
writetoFile ('encoded-duplicate.txt', encoded);