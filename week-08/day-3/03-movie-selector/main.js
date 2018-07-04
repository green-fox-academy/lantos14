'use strict';

const genreMenu = document.querySelector('#genre');
const movieMenu = document.querySelector('#movies');
const result = document.querySelector('span');

const changeMovieList = (genre) => {  
  // clear earlier choice
  document.querySelectorAll(`#movies option`).forEach(opt => {
    opt.style.display = "none";
  }); 
  // show selected movies
  document.querySelectorAll(`.${genre}`).forEach(opt => {
    opt.style.display = "inherit";
  }); 
}

genreMenu.addEventListener('change', (e) => {
  changeMovieList(e.target.value);
});

movieMenu.addEventListener('change', (e) => {
  result.innerText = `${movieMenu.selectedOptions[0].innerText}`
});
