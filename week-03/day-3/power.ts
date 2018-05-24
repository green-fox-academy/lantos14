// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function poweringUp (base: number, n: number): number {
  if (n === 1) {
    return base;
  } else {
    return base * poweringUp (base, n-1);
  }
}

console.log (poweringUp (3, 3));