'use strict';

const http = new XMLHttpRequest();
const button = document.querySelector('button');
const ul = document.querySelector('#list');

button.addEventListener('click', () => {

  http.open('GET', "http://localhost:3000/api/titles", true);
  http.onload = () => {
    let response = JSON.parse(http.response);
    response.bookNames.forEach(title => {
      let newLi = document.createElement('li');
      newLi.innerText = title.book_name;
      ul.appendChild(newLi);
    })
  }
  http.send();
});