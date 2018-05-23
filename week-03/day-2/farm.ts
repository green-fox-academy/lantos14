import {Animal} from "./animals";

class Farm {
  animalList: Animal[];
  freeCageCounter: number;

  constructor () {
    this.animalList = [];
    this.freeCageCounter = 3;
  }

  breed() {
    if (this.animalList.length < this.freeCageCounter) {
      this.animalList.push(new Animal)
    } else {
      console.log ('What about the infrastructure Brother?')
    }
  }

  slaughter() {
    let maxHungryAnimalIndex: number = 0;
    for (let i: number = 1; i <this.animalList.length-1; i++) {
      if (this.animalList[i].hunger < this.animalList[i+1].hunger) {
        maxHungryAnimalIndex = i+1
      }
    }
    this.animalList.splice (maxHungryAnimalIndex, 1);
  }

  print() {
    console.log (this.animalList);
  }
}

// ---testing zone---

let privateFarm = new Farm;

// adding not so hungry animal
let blackBear = new Animal
blackBear.hunger = 80;

privateFarm.animalList.push(blackBear);

privateFarm.print();

// testing breed function
privateFarm.breed();
privateFarm.breed();
privateFarm.breed();

privateFarm.print();

// testing slaughter
privateFarm.slaughter();

privateFarm.print();