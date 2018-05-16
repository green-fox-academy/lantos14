// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0
try {
function divider (num:number) {
  if (num === 0) {
    throw new Error (`Fail`);
  }
  return (10 / num);
}
} catch(e) {
  console.log (e.name);
}

divider (5);
divider (0);