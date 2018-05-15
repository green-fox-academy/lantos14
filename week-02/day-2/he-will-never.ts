'use strict';
// Things are a little bit messed up
// Your job is to decode the notSoCrypticMessage by using the hashmap as a look up table
// Assemble the fragments into the out variable
let out: string = '';
let out2: string = '';
let notSoCrypticMessage: number[] = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11];

let hashmap = {
  7: 'run around and desert you',
  50: 'tell a lie and hurt you ',
  49: 'make you cry, ',
  2: 'let you down',
  12: 'give you up, ',
  1: 'Never gonna ',
  11: '\n',
  3: 'say goodbye '
};

notSoCrypticMessage.forEach (item => {
  if (item === 1) {
    out = `${out}${hashmap[1]}`
  }
  if (item === 2) {
    out = `${out}${hashmap[2]}`
  }
  if (item === 3) {
    out = `${out}${hashmap[3]}`
  }
  if (item === 7) {
    out = `${out}${hashmap[7]}`
  }
  if (item === 11) {
    out = `${out}${hashmap[11]}`
  }
  if (item === 12) {
    out = `${out}${hashmap[12]}`
  }
  if (item === 49) {
    out = `${out}${hashmap[49]}`
  }
  if (item === 50) {
    out = `${out}${hashmap[50]}`
  }
})

console.log(out);