'use strict';
// animal
function Animal() {
  this.hunger = 5;
  this.thirst = 5;

  this.eat = function () {
    this.hunger--;
  }

  this.drink = function () {
    this.thirst--;
  }

  this.play = function () {
    this.hunger++;
    this.thirst++;
  }
}
// farm
function Farm(slots) {
  this.slots = slots;
  this.animals = [];
  // fill up animal list
  for (let i = 0; i < this.slots; i++) {
    this.animals.push(new Animal);
  }

  this.breed = function () {
    if (this.animals.length < slots) {
      this.animals.push(new Animal);
    }
  }

  this.slaughter = function () {
    return this.animals.sort(function (a, b) {
      b.hunger - a.hunger;
    });
  }

  this.print = function () {
    console.log(`The farm has ${this.animals.length} living animals`);
  }

  this.progress = function () {
    // random animal activities
    this.animals.forEach(animal => {
      if (Math.random >= 0.5) {
        animal.eat()
      }
      if (Math.random >= 0.5) {
        animal.drink()
      }
      if (Math.random >= 0.5) {
        animal.play()
      }
    });
    // calling breed and slaughter
    this.breed();
    this.slaughter();
    // print
    this.print()
    let printable = '';
    if (this.animals.length === 0) {
      printable = `bankrupt`;
    } else if (this.animals.length === this.slots) {
      printable = `full`;
    } else {
      printable = 'okay';
    }
    console.log(`We are ${printable}`);
  }
}

// Create a sheep farm with 20 slots
const SheepFarm = new Farm(20);

console.log(SheepFarm.animals); // Should log 20 Animal objects

const button = document.querySelector('button');

button.addEventListener('click', SheepFarm.progress.bind(SheepFarm));

// Add a click event to the button and call 'progress'

// The progress function should log the following to the console:
//  -  The farm has 20 living animals, we are full