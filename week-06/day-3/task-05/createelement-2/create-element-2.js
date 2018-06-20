'use strict';

// task 1

const parentUl = document.querySelector('ul');
const childToRemove = document.querySelector('li');

parentUl.removeChild(childToRemove);

// task 2

// list placed from the html file
const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true
  }
]

for (let i = 0; i < planetData.length; i++) {
  if (planetData[i].asteroid) {
    let addedElement = document.createElement('li');
    addedElement.setAttribute('class', planetData[i].category);
    addedElement.innerText = planetData[i].content;
    parentUl.appendChild(addedElement);
  }
}