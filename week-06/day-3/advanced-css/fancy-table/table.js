'use strict';

const currencyList = document.querySelectorAll('.currency');
// works only with 5 digit numbers
for (let i = 0; i < currencyList.length; i++) {
  currencyList[i].innerHTML = `$ ${currencyList[i].innerHTML.slice(0,2)},${currencyList[i].innerHTML.slice(2)}.00`
}