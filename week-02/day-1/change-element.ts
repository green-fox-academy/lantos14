// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

const numList = [1, 2, 3, 8, 5, 6];

const numList2 = numList.map (function (item, i, numList) {
  if (i === 3){
    return item / 2;
  } else {
    return item;
  }
})

console.log (numList2[3]);
