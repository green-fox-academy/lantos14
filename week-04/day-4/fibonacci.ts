'use strict';
// wrote any as function output for testing
export function fibonacci(n: any) {
  let consolMessage: string = '!!! PLEASE ENTER A POSITIVE  NUMBER --- Function now Returns -1 !!!';
  if (n < 0) { // case for negative number input
    console.log(consolMessage);
    return -1;
  } else if (typeof (n) !== 'number') { // case for string input
    console.log(consolMessage);
    return -1;
  } else if (n === 1 || n === 0) {
    return 1;
  } else {
    n = Math.floor(n);
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}