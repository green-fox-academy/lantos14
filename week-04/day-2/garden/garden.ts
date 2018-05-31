'use strict'

import { Plant } from './plant';

export class Garden {
  flora: Plant[] = [];

  initializePlanting(): void {
    this.flora.push(new Plant('flower', 'yellow'));
    this.flora.push(new Plant('flower', 'blue'));
    this.flora.push(new Plant('tree', 'yellow'));
    this.flora.push(new Plant('tree', 'yellow'));
  }

  gardenState(): void {
    for (let i: number = 0; i < this.flora.length; i++) {
      let consolMessage: string = (`The ${this.flora[i].color} ${this.flora[i].type} needs water`);
      if (this.flora[i].type === 'flower' && this.flora[i].waterAmount < 5) {
        console.log(consolMessage);
      } else if (this.flora[i].type === 'tree' && this.flora[i].waterAmount < 10) {
        console.log(consolMessage);
      } else {
        console.log(`The ${this.flora[i].color} ${this.flora[i].type} doesn\'t need water`);
      }
    }
  }

  watering(addedWater: number): void {
    console.log(`\nwatering with ${addedWater}`)
    let needWatering: number = 0; // how many plants need watering
    for (let i: number = 0; i < this.flora.length; i++) {
      if (this.flora[i].type === 'flower' && this.flora[i].waterAmount < 5) {
        needWatering++;
      } else if (this.flora[i].type === 'tree' && this.flora[i].waterAmount < 10) {
        needWatering++;
      }
    }
    // actual watering including absorption rate
    for (let i: number = 0; i < this.flora.length; i++) {
      if (this.flora[i].type === 'flower' && this.flora[i].waterAmount < 5) {
        this.flora[i].waterAmount += 0.75 * (addedWater / needWatering);
      } else if (this.flora[i].type === 'tree' && this.flora[i].waterAmount < 10) {
        this.flora[i].waterAmount += 0.40 * (addedWater / needWatering);
      }
    }
    this.gardenState();
  }
}

let myFirstFarm: Garden = new Garden;

myFirstFarm.initializePlanting();
myFirstFarm.gardenState();
myFirstFarm.watering(40);
myFirstFarm.watering(70);