'use strict';

const Panama = {
  cash: 0,
  name: 'Panama',
  tax: '1%',
  deposit: function (amt) {
  }
};

const Cyprus = {
  cash: 0,
  name: 'Cyprus',
  tax: '5%',
  deposit: function (amt) {
  }
};

const Shuffler = {
  cash: 10000,
  toggle: true,
  pick: function () {
    let i = 0;
    let choices = [Panama, Cyprus];
    
    if (this.toggle) {
      i = 0;
      this.toggle = false;
    } else {
      i = 1;
      this.toggle = true;
    }
    this.cash -= 1000;
    choices[i].cash += 1000;
    console.log(`${choices[i].name} got 1000`)
  }
};

Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000
Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000

console.log(Panama.cash); // 2000 
console.log(Cyprus.cash); // 2000 
