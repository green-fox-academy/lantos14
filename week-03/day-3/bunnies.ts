// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function bunnyCounter(n: number): number {
  if (n === 0) {
    return n;
  } else {
    return (2 + bunnyCounter (n-1));
  }
}

console.log (bunnyCounter(30));