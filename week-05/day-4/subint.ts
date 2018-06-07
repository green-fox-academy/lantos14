'use strict';

//  Create a function that takes a number and a list of numbers as a parameter
//  Returns the indeces of the numbers in the list where the first number is part of
//  Returns an empty list if the number is not part any of the numbers in the list

function subint (number: number, list: number[]): number[] {
  let result: number[] = [];
  for (let i: number = 0; i < list.length; i++) {
    let tempVar: string = list[i].toString();
    if (tempVar.indexOf(number.toString()) !== -1) {
      result.push(list.indexOf(parseInt(tempVar)))
    }
  }
  return result;
}





// Example
console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'