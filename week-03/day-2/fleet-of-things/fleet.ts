import {Thing} from "./thing";

class Fleet {
  private things: Thing[];

  constructor(){
    this.things = [];
  }
    add(thing: Thing){
        this.things.push(thing);
    }
  // added a print function for presenting the data
  print(): void {
    for (let i: number = 0; i < this.things.length; i++) {
      if (this.things[i].getCompleted()) {
        console.log (`${i+1}. [x] ${this.things[i].getName()}\n`)
        } else {
        console.log (`${i+1}. [ ] ${this.things[i].getName()}\n`)
        }
      }
    }
}

export {Fleet};