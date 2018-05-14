
// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

export {}

function sum (input: number): number {
  let result: number = 0
  for (let i: number = 1; i <= input; i++){
    result = result + i;
  }
  return result
}