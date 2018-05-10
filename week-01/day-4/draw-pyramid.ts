'use strict';

export {}

let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for (let i: number = 0; i <= lineCount; i++){
    let output: string = '';
        for (let j: number = 0; j < lineCount-i; j++){
            output = output + ' ';
        }
        for (let k: number = 1; k <= (i*2+1); k++){
            output = output + '*';
        }

    console.log (output);
}