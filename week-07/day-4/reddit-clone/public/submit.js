'use strict';

const inputTitle = document.querySelector('#title-input');
const inputUrl = document.querySelector('#url-input');
const submitNewBtn = document.querySelector('#submit-post-btn');

submitNewBtn.addEventListener('click', () => {
  const httpSubmit = new XMLHttpRequest;
  
  httpSubmit.open('POST', 'http://localhost:3000/posts', true);
  httpSubmit.setRequestHeader('Content-type', 'application/json');
  httpSubmit.onload = () => { }
  httpSubmit.send(JSON.stringify({
      title: inputTitle.value,
      url: inputUrl.value
    }));

window.location.replace("http://localhost:3000");
alert(`your post has been recorded in history`)
});
