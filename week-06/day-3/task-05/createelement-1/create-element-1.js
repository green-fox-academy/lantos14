'use strict';

// task 1
const asteroidList = document.querySelector('ul.asteroids');

const newLi = document.createElement('li');
newLi.innerText = 'The Green Fox';

asteroidList.appendChild(newLi);

// task 2
const newLi2 = document.createElement('li');
newLi2.innerText = 'The Lamplighter';

asteroidList.appendChild(newLi2);

// task 3
const containerDiv = document.querySelector('div.container');

const heading = document.createElement('heading');
heading.innerText = 'I can add elements to the DOM!';

containerDiv.appendChild(heading);

// task 4

const newImgTag = document.createElement('img');
newImgTag.setAttribute('src', 'https://i.imgur.com/xuDyBk6.png');
newImgTag.classList.add('smaller');
containerDiv.appendChild(newImgTag);


