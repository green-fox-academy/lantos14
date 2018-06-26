
'use strict'

const http = new XMLHttpRequest();

const input = document.querySelector("#search-term");
const p = document.querySelector('#test');
const leftList = document.querySelector('#left');
const rightList = document.querySelector('#right');

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

        newLi.addEventListener('click', () => subFunc(e.films));

        leftList.appendChild(newLi);
      }
    });
    console.log(response);
  }
  http.send();
});

let subFunc = (list) => {
  for (let i = 0; i < list.length; i++) {
    while (rightList.firstChild) {
      rightList.removeChild(rightList.firstChild);
    }
    const http = new XMLHttpRequest;
    http.open('GET', list[i], true)
    http.onload = () => {
      console.log(http.responseText);

      const subResponse = JSON.parse(http.responseText);
      let newFilm = document.createElement('li');
      newFilm.innerText = subResponse.title;
      rightList.appendChild(newFilm);
    }
    http.send();
  }
}
