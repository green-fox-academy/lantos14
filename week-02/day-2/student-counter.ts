'use strict';

let students: any[] = [
  {name: 'Teodor', age: 3, candies: 2},
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

// create a function that takes a list of students and logs: 

let newList = [];
let listOfStudents = students.forEach (input => {
  newList.push(input.name);
})

console.log (newList);

// - how many candies are owned by students

let sum: number = 0;
let sumOfCandy = students.forEach (input => {
  sum = sum + input.candies;
})
console.log (`Overall candy: ${sum}`);

// - Sum of the age of people who have lass than 5 candies

let ageSum: number = 0;
let sumOfAge = students.forEach (input => {
  if (input.candies < 5) {
  ageSum = ageSum + input.age;
  }
})
console.log (`Overall age under 5 candy: ${ageSum}`);