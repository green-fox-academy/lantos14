'use strict';

function newSharpie(color, width) {
  this.color = color;
  this.width = width;
  this.inkAmount = 100;
  this.use = function () {
    this.inkAmount -= width;
    console.log(this.inkAmount);
  };
}

let green = new newSharpie('green', 12);

function writeWithSharpie(sharpie) {
  while (sharpie.inkAmount > sharpie.width) {
    sharpie.use()
  }
  if (sharpie.inkAmount <= sharpie.width) {
    sharpie.inkAmount = 0;
  }
}

writeWithSharpie(green);
