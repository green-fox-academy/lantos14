// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

export {};
let numList = [3, 4, 5, 6, 7];
let temp = [];
for (let i = 0; i < numList.length; i++) {
  temp.push (numList[i])
  if (i <= (numList.length/2)) {
    numList[i] = temp [numList.length-i-1] //solve how to put the 1st half after the middle
  } else {
  numList[i] = numList[numList.length/2-2]
  }
  console.log (i + ' loops original ' + numList);
  console.log (i + ' loops temp ' + temp)
}