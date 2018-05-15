'use strict';

// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';
let tempStr = '';

function reverse (input: string) {
  for (let i:number = 1; i <= input.length; i++) {
    tempStr = tempStr + input[input.length-i];
  }
  return tempStr;
}


console.log(reverse(reversed));
export = reverse;