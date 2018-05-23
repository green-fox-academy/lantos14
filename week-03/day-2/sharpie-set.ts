import {Sharpie} from "./sharpie";

class SharpieSet {
  sharpieList: Sharpie[];

  constructor() {
    this.sharpieList = [];
  }

  add(sharpie: Sharpie) {
    this.sharpieList.push(sharpie)
  }

  countUsable() {
    let count: number = 0;
    for (let i: number = 0; i < this.sharpieList.length; i++) {
      if (this.sharpieList[i].inkAmount > 0) {
        count++;
      }
    }
    console.log (count);
  }

  removeTrash() {
    for (let i: number = 0; i < this.sharpieList.length; i++) {
      if (this.sharpieList[i].inkAmount === 0) {
        this.sharpieList.splice(i, 1);
      }
    }
  }
}
// creating Sharpie's
let redSharpie = new Sharpie ('Red', 100)
let greenSharpie = new Sharpie ('Green', 80)
let blueSharpie = new Sharpie ('Blue', 70)

//creating Sharpie set, adjusting inkAmount
let varSharpieSet = new SharpieSet;

varSharpieSet.add(redSharpie);
redSharpie.inkAmount = 0;

varSharpieSet.add(greenSharpie);

varSharpieSet.add(blueSharpie);
blueSharpie.inkAmount = 0;

console.log (varSharpieSet);

// testing zone

varSharpieSet.countUsable();

varSharpieSet.removeTrash();

console.log (varSharpieSet);

