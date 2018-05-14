// -  Create a function called `factorio`
//    that returns it's input's factorial

export {}

function factorio (input: number): number {
  let result: number = 1;

  for (let i: number=input; i >= 1; i--){
    if (input === 0) {
      break 
    } else {
    result = result * i;
      }
    }
  return result;
}
