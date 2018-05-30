'use strict';

abstract class Animals {
  name: string;
  type: string;
  age: number;
  gender: string;
  foodType: string;
  estimatedLifeSpan: number;

  constructor(name: string) {
    this.name = name;
  }
  getName() {
    return this.name;
  }

  breed() {
    return 'laying eggs'
  }
}

class Mammal extends Animals {
  type = 'mammal';

  constructor(name) {
    super(name)
  }

  breed() {
    return 'pushing miniature versions out'
  }
}

class Reptile extends Animals {
  type = 'reptile';

  constructor(name) {
    super(name)
  }
}

class Bird extends Animals {
  type = 'bird';

  constructor(name) {
    super(name)
  }
}
// testing
let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());