class favouriteActress {
  private name:string; // cannot be accessed outside of object
  protected bestFilm:string;
  age:number;

  constructor (name:string, bestFilm: string, age:number) {
    this.name = name;
    this.bestFilm = bestFilm;
    this.age = age;
  }

  statement():string {
    return `${this.name}'s best movie is ${this.bestFilm}`
  }
}

let jessicaAlba = new favouriteActress('Jessica Alba', 'Honey',42);

console.log (jessicaAlba);
console.log (jessicaAlba.statement());