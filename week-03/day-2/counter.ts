class Counter {
  countNum: number;

  constructor() {
    this.countNum = 0;
  }

  public add(newNum?: number): void {
    if (newNum === undefined) {
      this.countNum++;
    } else {this.countNum += newNum;
    }
  }
  
  public get() {
    console.log(`${this.countNum}`);
  }

  public reset() {
    this.countNum = 0;
  }
}

// testing zone

let awesomeCounter = new Counter;

awesomeCounter.get();

awesomeCounter.add(10);
awesomeCounter.add();
awesomeCounter.get();

awesomeCounter.reset();
awesomeCounter.get();

