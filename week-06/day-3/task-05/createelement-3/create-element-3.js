'use strict';

const petList = [{"pet_name":"Wattled crane","owner":"Bryant"},
{"pet_name":"Devil, tasmanian","owner":"Alejandro"},
{"pet_name":"Mynah, common","owner":"Nelie"},
{"pet_name":"Dolphin, common","owner":"Mariele"},
{"pet_name":"Gray duiker","owner":"Maddalena"},
{"pet_name":"Crab (unidentified)","owner":"Lucine"},
{"pet_name":"Ant (unidentified)","owner":"Lorianna"},
{"pet_name":"Bison, american","owner":"Tommie"},
{"pet_name":"Yellow mongoose","owner":"Vivyan"},
{"pet_name":"Carpet snake","owner":"Veda"},
{"pet_name":"Lesser mouse lemur","owner":"Isidor"}];

// task 1

const petsDiv = document.querySelector('div#pets');

for (let i = 0; i < petList.length; i++) {
  let newpetArticle = document.createElement('article');
  
  let newH3 = document.createElement('h3');
  newH3.innerText = petList[i].owner;
  let newP = document.createElement('p');
  newP.innerText = petList[i].pet_name;

  newpetArticle.appendChild(newH3)
  newpetArticle.appendChild(newP);

  petsDiv.appendChild(newpetArticle);
}