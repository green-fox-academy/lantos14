'use strict';

const inputTitle = document.querySelector('#title-input');
const inputUrl = document.querySelector('#url-input');
const submitNewBtn = document.querySelector('#submit-post-btn');

submitNewBtn.addEventListener('click', () => {
  const httpMod = new XMLHttpRequest;
  
  httpMod.open('PUT', `http://localhost:3000/posts/${id}`, true);
  httpMod.setRequestHeader('Content-type', 'application/json');
  httpMod.onload = () => {

  }
  httpMod.send(JSON.stringify({
      modTitle: inputTitle.value,
      modUrl: inputUrl.value
    }));

window.location.replace("http://localhost:3000");
alert(`your post has been changed`)
});
