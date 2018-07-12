'use strict';

const getFormValues = (inputs) => {
  let result = [];

  for (let i = 0; i < inputs.length; i++) {
    result.push(inputs[i].value)
  }
  return result;
}

const getRadioValues = (inputs) => {
  let result = [];

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      result.push('1');
    } else {
      result.push('0');
    }
  }
  return result;
}

const btnEdit = document.querySelector('#send-quest');
const inputValues = document.querySelectorAll('input[type="text"]');
const radioValues = document.querySelectorAll('input[type="radio"]');

btnEdit.addEventListener('click', (e) => {
  e.preventDefault();
  const httpPost = new XMLHttpRequest();
  httpPost.open('POST', 'http://localhost:3000/questions', true);
  httpPost.setRequestHeader('Content-type', 'application/json');
  let postData =  getFormValues(inputValues);
  let checkRadioList =  getRadioValues(radioValues);
  console.log('postData: ', postData);
  console.log('checkRadioList: ', checkRadioList);
  httpPost.send(JSON.stringify({
    question: postData[0],
    a1: {text: postData[1], correct: checkRadioList[0]},
    a2: {text: postData[2], correct: checkRadioList[1]},
    a3: {text: postData[3], correct: checkRadioList[2]},
    a4: {text: postData[4], correct: checkRadioList[3]},
  }));
});

// sub functions

