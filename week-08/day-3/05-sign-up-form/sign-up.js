'use strict';

const pswField = document.querySelector('#pswd');
const pswAgainField = document.querySelector('#pswd-conf');

const validatePsw = () => {
  if (pswField.value !== pswAgainField.value) {
    console.log(pswField.value);
    console.log(pswAgainField.value);
    
    pswAgainField.setCustomValidity("Passwords doesn't match, please try again!");
  } else {
    pswAgainField.setCustomValidity('');
  }
}

pswAgainField.addEventListener('change', () => {
  validatePsw();
});

pswAgainField.addEventListener('onkeyup', () => {
  validatePsw();
});