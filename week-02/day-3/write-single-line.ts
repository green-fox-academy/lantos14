// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

'use strict'

export {};

declare function require (path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';

let content = 'Tibor Lantos';
function writeFile (path:string, content:string) {
  try {
  return fs.writeFileSync (path, content);
  } catch(error) {
    console.log ('Unable to write file: my-file.txt');
  }
}

writeFile ('my-file.txt', content);