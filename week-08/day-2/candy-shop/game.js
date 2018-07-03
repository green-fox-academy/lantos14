'use strict';

const candyCounter = document.querySelector('.candies');
const lollyCounter = document.querySelector('.lollypops');
const createCandyBtn = document.querySelector('.create-candies');
const buyLollyBtn = document.querySelector('.buy-lollypops');
const candyMeter = document.querySelector('.speed');
const candyRainBtn = document.querySelector('.candy-machine');
const body = document.querySelector('body');
let rainisOn = false;
// candy generator
let interval = setInterval(() => {
  let candyNum = parseInt(candyCounter.innerText);
  if (candyNum >= 10000) {
    let winScreen = document.createElement('h1');
    winScreen.innerHTML = `🍬🍬🍬🍬🍬🍬🍬🍬🍬🍬<br>Congratulations, you have diabetes<br>🍬🍬🍬🍬🍬🍬🍬🍬🍬🍬`;
    body.appendChild(winScreen);
    clearInterval(interval);
  } else {
  if (!rainisOn) {
    let growth = Math.floor((lollyCounter.innerText.length / 2) / 10)
    candyNum += growth;
    console.log(`${growth} candy is generated from lollypops`);
    candyCounter.innerText = candyNum;
    updateSpeed(growth);
  } else if (rainisOn) {
    let growth = Math.floor(lollyCounter.innerText.length / 2);
    candyNum += growth;
    console.log(`${growth} candy is generated from lollypops`);
    candyCounter.innerText = candyNum;
    updateSpeed(growth);
  }
}
}, 1000);
// create candy button
createCandyBtn.addEventListener('click', () => {
  let candyNum = parseInt(candyCounter.innerText);
  candyNum += 1000;
  candyCounter.innerText = candyNum;
  console.log(`10 candy is created with create btn`);
});
// buy lollipop 
buyLollyBtn.addEventListener('click', () => {
  let candyNum = parseInt(candyCounter.innerText);
  if (candyNum < 100) {
    console.log('You don\'t have enough candy to buy lollypop');
  } else {
    candyNum -= 100;
    lollyCounter.innerText += '🍭';
    candyCounter.innerText = candyNum;
  }
});
// grow speed sub-function
const updateSpeed = (candyNumPerSec) => {
  candyMeter.innerText = candyNumPerSec;
}

candyRainBtn.addEventListener('click', () => {
  rainisOn = true;
});

