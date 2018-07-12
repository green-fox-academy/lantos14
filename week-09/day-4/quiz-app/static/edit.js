'use strict';

// grabbing elements
const btnEdit = document.querySelector('#send-quest');
const inputValues = document.querySelectorAll('input[type="text"]');
const radioValues = document.querySelectorAll('input[type="radio"]');
const deleteDiv = document.querySelector('#delete-div');

// sub functions
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

const fillDelList = () => {
  deleteDiv.innerHTML = '';
  const httpQList = new XMLHttpRequest();
  httpQList.open('GET', 'http://localhost:3000/questions', true);
  httpQList.onload = () => {
    let questions = JSON.parse(httpQList.response);
    questions.forEach(element => {
      let divQ = document.createElement('div');
      divQ.setAttribute('class', 'del-question');
      let par = document.createElement('p');
      par.innerText = element.question;
      let btn = document.createElement('button');
      btn.innerText = 'Delete';
      btn.dataset.idq = element.id;

      divQ.appendChild(par);
      divQ.appendChild(btn);
      deleteDiv.appendChild(divQ);
    });
  }
  httpQList.send();
}

// delete req
const delReq = (id) => {
  const httpDelList = new XMLHttpRequest();
  httpDelList.open('DELETE', `http://localhost:3000/questions/${id}`);
  httpDelList.send();
}

// filling up delete list 
fillDelList();

// event listeners
btnEdit.addEventListener('click', (e) => {
  e.preventDefault();
  const httpPost = new XMLHttpRequest();
  httpPost.open('POST', 'http://localhost:3000/questions', true);
  httpPost.setRequestHeader('Content-type', 'application/json');
  let postData = getFormValues(inputValues);
  let checkRadioList = getRadioValues(radioValues);
  console.log('postData: ', postData);
  console.log('checkRadioList: ', checkRadioList);
  httpPost.send(JSON.stringify({
    question: postData[0],
    a1: { text: postData[1], correct: checkRadioList[0] },
    a2: { text: postData[2], correct: checkRadioList[1] },
    a3: { text: postData[3], correct: checkRadioList[2] },
    a4: { text: postData[4], correct: checkRadioList[3] },
  }));

  fillDelList();
});

deleteDiv.addEventListener('click', (e) => {
  if (e.target.dataset.idq) {
    delReq(e.target.dataset.idq);
    fillDelList();
  }
});
