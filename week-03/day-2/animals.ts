class Animal {
  hunger: number = 50;
  thirst: number = 50;
  
  eat(): void {
    this.hunger--;
  }

  drink(): void {
    this.thirst--;
  }

  play(): void {
    this.hunger++;
    this.thirst++;
  }
}

// testing section
let whiteTiger = new Animal;

console.log (whiteTiger);

whiteTiger.eat();
whiteTiger.drink();

console.log (whiteTiger);

whiteTiger.play();

console.log (whiteTiger);