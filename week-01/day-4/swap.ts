'use strict';

// Swap the values of these variables
let a: number = 123;
let b: number = 526;

console.log(a);
console.log(b);

// assigned a 3. variable to store the 'a' variable during the swap
let c: number = a;
a = b
b = c

console.log(a);
console.log(b);