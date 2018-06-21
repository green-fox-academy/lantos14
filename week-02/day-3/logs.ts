// Read all data from 'log.txt'.
// Each line represents a log message from a web server

'use strict'

export {};
declare function require (path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';

// reading subfunction

function readFromFile (fromFile: string) {
  return (fs.readFileSync (fromFile, charEncoding));
} 

// splitting the file

let logFile: string = readFromFile('log.txt').split('\r\n');

let splittedLog: any [] = [];

for (let i:number = 0; i < logFile.length; i++) {
  splittedLog.push (logFile[i].split('  '));
}

// Write a function that returns an array with the unique IP adresses.

let ipList: any [] = [];
let uniqueIpList: any [] = [];

function countIp () {
  for (let i:number = 0; i < splittedLog.length; i++) {
    ipList.push (splittedLog[i][2]);
  }
  ipList.sort();
  for (let j:number = 1; j< ipList.length; j++) {
    if (ipList[j] !== ipList[j + 1] && ipList[j] !== ipList[j-1]) {
      uniqueIpList.push (ipList[j]);
    }
  }
  return uniqueIpList;
}

console.log (countIp());

// Write a function that returns the GET / POST request ratio.

 let getCount:number = 0;
 let postCount:number = 0;
function requestCounter () {
   for (let i:number = 0; i < splittedLog.length; i++) {
     if (splittedLog[i][3] === ` GET /`) {
       getCount = getCount + 1;
     } else {
       postCount = postCount + 1;
     }
   }
   return (`GET number: ${getCount}, POST number: ${postCount}`);
  }
console.log (requestCounter());

console.log(splittedLog);
