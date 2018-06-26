
'use strict'

const http = new XMLHttpRequest();

const input = document.querySelector("#search-term");
const p = document.querySelector('#test');
const leftList = document.querySelector('#left');

const button = document.querySelector('button');

button.addEventListener('click', () => {
  while (leftList.firstChild) {
    leftList.removeChild(leftList.firstChild);
  }
  
  http.open('GET', "https://swapi.co/api/people/", true);
  http.onload = () => {
    const response = JSON.parse(http.responseText);
    response.results.forEach(e => {
      if (e.name.includes(input.value)) {
        let newLi = document.createElement('li');
        newLi.innerText = e.name;
        newLi.setAttribute('class',`${e.height}`)
        newLi.addEventListener('click', () => {
          http.open('GET', 'https://swapi.co/api/vehicles/', true);
          http.onload = () => {
            const subresponse = JSON.parse(http.responseText);
            console.log('subGET');
            console.log(subresponse);
          }
        });
        leftList.appendChild(newLi);
      }
    });
    console.log(response);
  }
  http.send();
});

