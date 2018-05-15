'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"
let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

// these are complementer functions, with these It is easier to see trough the checkNums function

function checkNums (list:any[]) {
  if (list.some (function is2(x) {return x === 2;}) && list.some (function is4(x) {return x === 4;}) && list.some (function is12(x) {return x === 12;}) && list.some (function is16(x) {
    return x === 16;})) {
    return true
} else {
  return false;
  }
}

console.log(checkNums(listOfNumbers));

export = checkNums;