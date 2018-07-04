'use strict';

const radBtnAll = document.querySelectorAll('.radio-btn');
const btnCats = document.querySelector('#catBtn');
const btnSign = document.querySelector('#signBtn');
const radioCheckSignNo = document.querySelector('#no');
const fishSelect = document.querySelector('#fish');

// listener for enabling sign up button
const enableSignUp = value => {
  if ((value === 'dog' || value === 'cat' || value === 'yes') && !radioCheckSignNo.checked) {
    btnSign.disabled = false;
  } else if (radioCheckSignNo.checked && fishSelect.checked) {
    btnSign.disabled = false;
  } else {
    btnSign.disabled = true;
  }
}
// adding listeners to every radio input
radBtnAll.forEach(btn => {
  btn.addEventListener('change', e => {
    enableSignUp(e.path[0].value);
  });
});
// sign up button alert
btnSign.addEventListener('click', () => {
  if (radioCheckSignNo.checked && fishSelect.checked) {
    alert("Sigh, we still added you to the cat facts list");
  } else {
    alert("Thank you, you've successfully signed up for cat facts");
  }
});
