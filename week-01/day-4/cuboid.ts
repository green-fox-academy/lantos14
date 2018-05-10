'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let sideA: number = 10;
let sideB: number = 10;
let sideC: number = 10;

let surface: number = 2 * (sideA*sideB + sideB*sideC + sideC*sideA);
let volume: number = sideA * sideB * sideC;

console.log(`Surface Area: ${surface}`);
console.log(`Volume: ${volume}`);
