class Sharpie {
  color: string;
  width: number;
  inkAmount: number;

  constructor (color: string, width: number) {
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
  }
  use() {
    this.inkAmount--;
  }
}

// testing section

let testSharpie = new Sharpie ('Red', 100)

console.log (testSharpie);

testSharpie.use();

console.log (testSharpie);