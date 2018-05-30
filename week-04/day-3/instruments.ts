'use strict'

abstract class Instrument {
  protected name: string;

  play(): void {
  }
}

abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;
  instSound: string;

  constructor(numberOfStrings?: number) {
    super();
  }

  sound(): string {
    return this.instSound;
  }
  
}

class ElectricGuitar extends StringedInstrument {
  numberOfStrings = 6;
  instSound: string = 'Twang';

  constructor (numberOfStrings: number = 6) {
    super();
    this.name = 'Electric Guitar';
    this.numberOfStrings = numberOfStrings;
  }

  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`); 
  }
}

class BassGuitar extends StringedInstrument {
  instSound: string = 'Duum-duum-duum';

  constructor (numberOfStrings: number = 4) {
    super(numberOfStrings);
    this.name = 'Bass Guitar';
    this.numberOfStrings = numberOfStrings;
  }
  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`); 
  }
}

class Violin extends StringedInstrument {
  instSound: string = 'Screech';

  constructor (numberOfStrings: number = 4) {
    super(numberOfStrings);
    this.name = 'Violin';
    this.numberOfStrings = numberOfStrings;
  }

  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`); 
  }
}
// testing
console.log('Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.');
let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log('Test 1 Play');
guitar.play();
bassGuitar.play();
violin.play();

console.log('Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings .');
let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();