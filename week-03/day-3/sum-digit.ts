// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

let result: number = 0;

function sumDigits (n: number): number {
  if (n < 1) {
    return n;
  } else {
    return (n % 10) + sumDigits(Math.floor(n / 10));
  }
}

console.log (sumDigits(34));