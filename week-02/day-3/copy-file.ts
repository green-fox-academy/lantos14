// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

'use strict'

export {};
declare function require (path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';

// reading subfunction

let turner = true;

function readFromFile (fromFile: string) {
  try {
  return (fs.readFileSync (fromFile, charEncoding));
  } catch(error) {
    turner = false;
  }
} 

// writing subfunction 

function writeFile (toFile:string, content:string) {
  return fs.writeFileSync (toFile, content);
  }

// core

function copyFiles (fromFile, toFile) {
  if (turner === false) {
    console.log (turner)
  } else {
    let content = readFromFile ('my-file.txt');
    try {
      writeFile (toFile, content);
      console.log (turner);
      } catch(error) {
        console.log (turner);
      }
    }
  }

copyFiles ('my-file.txt', 'new-file.txt');
