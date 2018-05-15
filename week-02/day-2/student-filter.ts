'use strict';

export {};

let students: any[] = [
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

let sweetList = [];
let listOfStudents = students.forEach (input => {
  if (input.candies > 4) {
  sweetList.push(input.name);
  }
})

console.log (sweetList);

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

let sum: number = 0;
let totalStudents = 0;
let sumOfCandy = students.forEach (input => {
  sum = sum + input.candies;
  totalStudents++;
})
console.log (sum / totalStudents);