'use strict';

export function isAnagram(string1: string, string2: string): boolean {
  let compare1: string = string1.split('').sort().join('');
  let compare2: string = string2.split('').sort().join('');
  if ((compare1) === (compare2)) {
    return true;
  } else {
    return false;
  }
}
