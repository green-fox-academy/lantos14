'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

function appendA (inputList: any []) {
  inputList.forEach (function (listItem: string, index: number) {
    inputList[index] = `${listItem}a`;
  })
  return inputList;
}
let far: string[] = ['kuty', 'macsk', 'kacs', 'rók', 'halacsk'];

console.log(appendA(far));

// The output should be: 'kutya', 'macska', 'kacsa', 'róka', 'halacska'
export = appendA;