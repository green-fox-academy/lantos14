'use strict';

// get elements

const content = document.querySelector('#content');
const question = document.querySelector('#question');
const answerOne = document.querySelector('#one');
const answerTwo = document.querySelector('#two');
const answerThree = document.querySelector('#three');
const answerFour = document.querySelector('#four');

// add 1st question

const getQuestion = () => {
  const httpQuestion = new XMLHttpRequest();
  httpQuestion.open('GET', 'http://localhost:3000/game', true);
  httpQuestion.onload = () => {
    let res = JSON.parse(httpQuestion.response);
    populateDom(res);
  }
  httpQuestion.send();
}
// populate HTML
const populateDom = (resObj) => {
  question.innerText = resObj.question;
  answerOne.innerText = resObj.answers[0].answer;
  answerTwo.innerText = resObj.answers[1].answer;
  answerThree.innerText = resObj.answers[2].answer;
  answerFour.innerText = resObj.answers[3].answer;
}

getQuestion();


