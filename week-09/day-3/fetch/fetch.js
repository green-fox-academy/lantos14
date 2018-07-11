'use strict'

const div = document.querySelector('div');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  fetch('http://api.icndb.com/jokes/random')
  .then(response => response.json())
  .then(jsonFile => {
    let jokeP = document.createElement('h2');
    jokeP.innerText = jsonFile.value.joke;
    div.appendChild(jokeP);
  })
  .catch(error => console.error(error))
});
