'use strict'
export {};

function getValue(){
  let sum = 0;
  let length = prompt("How many numbers? : ", "Number");;
  for (let i = 0; i < parseInt (length); i++) {
  let numInput = prompt("Enter a number : ", "Number");
  sum += parseInt(numInput); 
  document.write (`Num ${i + 1}: ${numInput}<br>`);
  }
  document.write(`Average: ${sum / parseInt (length)}`);
}

getValue();