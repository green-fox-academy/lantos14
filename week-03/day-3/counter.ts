// Write a recursive function that takes one parameter: n and counts down from n.

function finalCountdown (num: number) {
  if (num === 0) {
    return (0);
  } else {
    console.log (num);
    return finalCountdown(num-1);
  }
}

console.log (finalCountdown(10));