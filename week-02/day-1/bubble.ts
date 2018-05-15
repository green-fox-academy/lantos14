//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `True` sort that list descending

function bubble (input, descending: boolean) {
  if (descending === false) { // here i was
    for (let i:number = 0; i < input.length; i++){
      for (let j:number = 0; j < (input.length-i); j++){
        if (input[j+1] < input[j]){
          let temp = [input[j], input[j+1]];
          input[j] = temp[1];
          input[j+1] = temp[0];
        }
      }
    }
    console.log (input);
  } else {
    for (let i:number = 0; i < input.length; i++){
      for (let j:number = 0; j < (input.length-i); j++){
        if (input[j+1] > input[j]){
          let temp = [input[j], input[j+1]];
          input[j] = temp[1];
          input[j+1] = temp[0];
          console.log (input);
        }
      }
    }
  }
}

bubble ([34, 12, 24, 9, 5], true);

bubble ([34, 12, 24, 9, 5], false);