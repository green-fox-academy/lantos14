'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.

let codingHours: number = (17 * 5) * 6
console.log (codingHours);

// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let averageWorkHours: number = 17 * 52
console.log (codingHours / averageWorkHours * 100 + '%');
