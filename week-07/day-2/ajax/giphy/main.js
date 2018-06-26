'use strict';

// my 1st solution
window.onload = function () {

  let httpRequest = new XMLHttpRequest();

  httpRequest.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=UjapoSIcdWX7MDDvmrAIWSyuE5SiBV9W&q=kitten&limit=25&offset=0&rating=G&lang=en', true);
  httpRequest.send(null); // to send the open

  httpRequest.onreadystatechange = function () {

    if (httpRequest.readyState == 4 && httpRequest.status == 200) {

      let response = JSON.parse(httpRequest.response);
      console.log(response);

      for (let j = 0; j < response.data.length; j++) {

        let urlStill = response.data[j].images.downsized_still.url;
        let urlMove = response.data[j].images.downsized.url;
        let body = document.querySelector('body');

        let img = document.createElement('img');
        img.setAttribute('src', urlStill);
        img.addEventListener('click', () => {
          if (img.src === urlStill) {
            img.setAttribute('src', urlMove);
          } else {
            img.setAttribute('src', urlStill);
          }
        })
        body.appendChild(img);
      }
    }
  }
}
