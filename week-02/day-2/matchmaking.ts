'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];

function makingMatches(girlsList, boysList) {
  let mixedList: string[] = [];
  mixedList.length = girlsList.length + boysList.length
  for (let i:number = 0; i < mixedList.length; i++) {
    if (i % 2 === 0) {
      if (girlsList[0] === undefined) {
        mixedList[i] = boysList.shift ();
      } else {
      mixedList[i] = girlsList.shift ();
      }
    } 
    if (i % 2 === 1) {
      mixedList[i] = boysList.shift ();
    }
  }
  return mixedList
}

console.log(makingMatches(girls, boys));

export = makingMatches;