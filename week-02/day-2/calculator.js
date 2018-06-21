'use strict';

// Create a simple calculator application which does read the parameters from the standard input
// and prints the result to the console.
// It should support the following operations, create function called "calculate()" :
// +, -, *, /, % and it should support two operands:
// The format of the expressions must be: {operation} {operand} {operand}.
// Examples: "+ 3 3" (the result will be 6) or "* 4 4" (the result will be 16)
// You should use the command line arguments to accept user input
// It should work like this:
// Start the program with "node calculator.js + 5 6"
// If number of arguments are not correct, print some nice errors
// Else print the result
// Say goodbye

const args = process.argv.splice(2);

function calculate(arr) {
  if (arr.length !== 3) {
    console.log('Please give three valid arguments\nValid operators are: + , -, *, /, %\nValid input format: #operator #operand #operand')
    return '--unexpected input';
  } else {
    if (arr[0] === '+') {
      return arr[1] + arr[2];
    }
    if (arr[0] === '-') {
      return arr[1] - arr[2];
    }
    if (arr[0] === '*') {
      return arr[1] * arr[2];
    }
    if (arr[0] === '/') {
      return arr[1] / arr[2];
    }
    if (arr[0] === '%') {
      return arr[1] % arr[2];
    }
  }
}
console.log(calculate(args));