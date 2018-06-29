'use strict';

const http = new XMLHttpRequest();
const flowTable = document.querySelector('#flow');

function formatTimestamp(timestamp) {
  return `${timestamp.slice(0,10)}, ${timestamp.slice(11,16)}`
}
http.open("GET", "http://localhost:3000/posts", true);
http.onload = () => {
  let response = JSON.parse(http.response);
  console.log(response);
  response.posts.forEach (post => {
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'post');
    let newTitle = document.createElement('h2');
    newTitle.setAttribute('class', 'post-heading');
    newTitle.innerText = post.title;
    let newImg = document.createElement('img');
    newImg.setAttribute('src', `${post.url}`);
    let newOwnerP = document.createElement('p');
    newOwnerP.setAttribute('class', 'owner-p');
    newOwnerP.innerHTML = `posted by <em>${post.user_name}<em> on <em> ${formatTimestamp(post.timestamp)}<em>`;

    newDiv.appendChild(newTitle);
    newDiv.appendChild(newImg);
    newDiv.appendChild(newOwnerP);
    flowTable.appendChild(newDiv);
  });
}
http.send();