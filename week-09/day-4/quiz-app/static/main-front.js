'use strict';

// get elements

const content = document.querySelector('#content');
const question = document.querySelector('#question');
const answerList = document.querySelectorAll('.answers');
const answerOne = document.querySelector('#one');
const answerTwo = document.querySelector('#two');
const answerThree = document.querySelector('#three');
const answerFour = document.querySelector('#four');
const counter = document.querySelector('#counter');

const score = document.querySelector('#score');

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
  answerOne.className = 'answers';
  answerOne.dataset.correct = resObj.answers[0].is_correct;
  answerTwo.innerText = resObj.answers[1].answer;
  answerTwo.className = 'answers';
  answerTwo.dataset.correct = resObj.answers[1].is_correct;
  answerThree.innerText = resObj.answers[2].answer;
  answerThree.className = 'answers';
  answerThree.dataset.correct = resObj.answers[2].is_correct;
  answerFour.innerText = resObj.answers[3].answer;
  answerFour.className = 'answers';
  answerFour.dataset.correct = resObj.answers[3].is_correct;
}

getQuestion();

content.addEventListener('click', (e) => {
  colorAnswers();
  handleScore(e.target);
  setTimeout(getQuestion, 3000);
});

// sub functions

const colorAnswers = () => {
  answerList.forEach(p => {
    if (p.dataset.correct === '1') {
      p.className += ' green';
    } else {
      p.className += ' red';
    }
  });
}

const handleScore = (clickedAnswer) => {
  if (clickedAnswer.dataset.correct === '1') {
    score.innerText = parseInt(score.innerText) + 1;
  }
}

function countDown(i) {
  counter.innerText = i;

  setInterval(() => {
    if (counter.innerText === parseInt(counter.innerText) === '0') {
      clearInterval();
      counter.innerText = '';
    } else {
      counter.innerText = parseInt(counter.innerText) - 1;
    }
  }, 1000);
}
