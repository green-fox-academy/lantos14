'use strict';

class hordeOfNums {
  numList: any[];

  sum(): number {
    let sumAll: number = 0;
    let loopLength: number = this.numList.length;
    for (let i: number = 0; i < loopLength; i++) {
      if (typeof (this.numList[i]) !== 'number') {
        loopLength = i;
        sumAll = 0;
        return sumAll;
      } else {
        sumAll += this.numList[i];
      };
    }
    return sumAll;
  }
}

let lotsOfNumbers: hordeOfNums = new hordeOfNums;

lotsOfNumbers.numList = [0, 1, 2];

console.log(lotsOfNumbers.sum());

lotsOfNumbers.numList = [];

console.log(lotsOfNumbers.sum());

export { lotsOfNumbers };