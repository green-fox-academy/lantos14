// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.
let adder: number = 0;

function numberAdder (n: number): number {
  if (n === 1) {
    return adder + n;
  } else {
    adder += n;
    return numberAdder (n - 1);
  }
}

console.log (numberAdder(3));