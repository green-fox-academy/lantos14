'use strict';

export function countLetters(text: string): Object {
  let counter: Object = {};
  for (let i: number = 0; i < text.length; i++) {
    let letter = text[i];
    if (counter[letter]) {
      counter[letter]++;
    } else {
      counter[letter] = 1;
    }
  }
  return counter;
}