'use strict';

const partyButton = document.querySelector('button');
let htmlBody = document.querySelector('body');

partyButton.onclick = () => {
  if (htmlBody.classList[0] === 'party') {
    htmlBody.classList.remove('party');
    partyButton.innerText = 'Party';
  } else {
    htmlBody.setAttribute('class', 'party');
    partyButton.innerText = 'End Party';
  }
}