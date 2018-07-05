'use strict';

const http = new XMLHttpRequest();
const flowTable = document.querySelector('#flow');
const toSubmitPageLink = document.querySelector('#submit-post-btn');

function formatTimestamp(timestamp) {
  return `${timestamp.slice(0, 10)}, ${timestamp.slice(11, 16)}`
}
// populate the post flow block
http.open("GET", "http://localhost:3000/posts", true);
http.onload = () => {
  let response = JSON.parse(http.response);
  response.posts.forEach(post => {
    // parent post div
    let newPostDiv = document.createElement('div');
    newPostDiv.setAttribute('class', 'post');
    newPostDiv.setAttribute('id', `post${post.id}`);
    // voteDiv add-ons
    let newVoteDiv = document.createElement('div');
    newVoteDiv.setAttribute('class', 'vote-section');

    let newUpvoteImg = document.createElement('img');
    newUpvoteImg.setAttribute('src', './upvote.png');
    newUpvoteImg.setAttribute('class', 'up-vote vote-btn');
    newUpvoteImg.addEventListener('click', () => {
      let postId = event.currentTarget.parentElement.parentElement.getAttribute('id').slice(4);

      let httpUpvote = new XMLHttpRequest();

      httpUpvote.open("PUT", `http://localhost:3000/posts/${postId}/upvote`, true);
      httpUpvote.onload = () => {

        let newScoreResponse = JSON.parse(httpUpvote.response)
        const newScore = newScoreResponse.message[0].score;

        const actualPost = document.querySelector(`#post${postId}`)
        actualPost.children[0].children[1].innerText = newScore;
      }
      httpUpvote.send();
    });

    let newScore = document.createElement('p');
    newScore.setAttribute('class', 'score-value');
    newScore.innerText = post.score;

    let newDownvoteImg = document.createElement('img');
    newDownvoteImg.setAttribute('src', './downvote.png');
    newDownvoteImg.setAttribute('class', 'down-vote vote-btn');
    newDownvoteImg.addEventListener('click', () => {
      let postId = event.currentTarget.parentElement.parentElement.getAttribute('id').slice(4);

      let httpDownvote = new XMLHttpRequest();

      httpDownvote.open("PUT", `http://localhost:3000/posts/${postId}/downvote`, true);
      httpDownvote.onload = () => {

        let newScoreResponse = JSON.parse(httpDownvote.response)
        const newScore = newScoreResponse.message[0].score;

        const actualPost = document.querySelector(`#post${postId}`)
        actualPost.children[0].children[1].innerText = newScore;
      }
      httpDownvote.send();
    });

    // postContent add-ons
    let newPostContentDiv = document.createElement('div');
    newPostContentDiv.setAttribute('class', 'post-content wrapped');

    let newTitle = document.createElement('h2');
    newTitle.setAttribute('class', 'post-heading');
    newTitle.innerText = post.title;

    let BtnRoll = document.createElement('img');
    BtnRoll.innerText = `...`;
    BtnRoll.setAttribute('class', 'roll-btn');
    BtnRoll.setAttribute('src', 'expand.png');
    BtnRoll.addEventListener('click', () => {
      let parent = event.currentTarget.parentElement;
      if (parent.className === 'post-content') {
        parent.className += ' wrapped';
      } else {
        parent.className = 'post-content';
      }
    });

    let newImg = document.createElement('img');
    newImg.setAttribute('src', `${post.url}`);

    let newBtnline = document.createElement('div');
    newBtnline.setAttribute('class', 'btn-line');
    let newModifyBtn = document.createElement('button');
    newModifyBtn.innerText = 'modify';
    newModifyBtn.setAttribute('class', 'btnMod');
    newModifyBtn.setAttribute('data-opened', 'false');
    newModifyBtn.addEventListener('click', (e) => {
      let modDiv = e.target.parentElement.parentElement.children[5];
      
      if (newModifyBtn.dataset.opened === 'false') {
        modDiv.style.display = 'block';
        newModifyBtn.dataset.opened = 'true';
      } else {
        modDiv.style.display = 'none';
        newModifyBtn.dataset.opened = 'false';
      }

    });

    let newDelBtn = document.createElement('a');
    newDelBtn.innerText = 'delete';
    newDelBtn.addEventListener('click', () => {
      alert('Are you sure');
    });

    newBtnline.appendChild(newModifyBtn);
    newBtnline.appendChild(newDelBtn);

    let newOwnerP = document.createElement('p');
    newOwnerP.setAttribute('class', 'owner-p');
    newOwnerP.innerHTML = `posted by <em>${post.user_name}<em> on <em> ${formatTimestamp(post.timestamp)}<em>`;

    let inputDiv = document.createElement('div');
    inputDiv.setAttribute('class', 'mod-input-div');
    inputDiv.style.display = "none"

    let fieldset = document.createElement('fieldset');
    let legend = document.createElement('legend');
    legend.innerText = 'Change your post below';

    let modInputTitle = document.createElement('input');
    modInputTitle.setAttribute('type', 'text');
    modInputTitle.setAttribute('id', 'mod-title-input');
    modInputTitle.setAttribute('name', 'mod-title');
    modInputTitle.setAttribute('placeholder', 'New title here');

    let modInputUrl = document.createElement('input');
    modInputUrl.setAttribute('type', 'text');
    modInputUrl.setAttribute('id', 'mod-title-url');
    modInputUrl.setAttribute('name', 'mod-title-url');
    modInputUrl.setAttribute('placeholder', 'New url here');
    let BtnMod = document.createElement('button');
    BtnMod.innerText = 'Change it!';

    // listening for modification

    BtnMod.addEventListener('click', (e) => {

      let modPostId = e.target.parentElement.parentElement.parentElement.parentElement.getAttribute('id').slice(4);

      let httpMod = new XMLHttpRequest();

      httpMod.open('PUT', `http://localhost:3000/posts/${modPostId}`, true);
      httpMod.setRequestHeader('Content-type', 'application/json');

      let modTitle = e.target.parentElement.children[1].value;
      let modUrl = e.target.parentElement.children[2].value;

      httpMod.onload = () => {

        let currPostTitle = e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[0]
        let currPostUrl = e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[2]

        if (modTitle === '') {
          modTitle = undefined;
        } else {
          currPostTitle.innerText = e.target.parentElement.children[1].value
        }

        if (modUrl === '') {
          modUrl = undefined;
        } else {
          currPostUrl.setAttribute('src', `${e.target.parentElement.children[2].value}`)
        }

        e.target.parentElement.parentElement.style.display = 'none';
        newModifyBtn.dataset.opened = 'false'
      }

      httpMod.send(JSON.stringify({
        modTitle,
        modUrl
      }));
    });

    fieldset.appendChild(legend);
    fieldset.appendChild(modInputTitle);
    fieldset.appendChild(modInputUrl);
    fieldset.appendChild(BtnMod);
    inputDiv.appendChild(fieldset);

    // appending
    newVoteDiv.appendChild(newUpvoteImg);
    newVoteDiv.appendChild(newScore);
    newVoteDiv.appendChild(newDownvoteImg);

    newPostContentDiv.appendChild(newTitle);
    newPostContentDiv.appendChild(BtnRoll);
    newPostContentDiv.appendChild(newImg);
    newPostContentDiv.appendChild(newBtnline);
    newPostContentDiv.appendChild(newOwnerP);
    newPostContentDiv.appendChild(inputDiv);

    newPostDiv.appendChild(newVoteDiv);
    newPostDiv.appendChild(newPostContentDiv);

    flowTable.appendChild(newPostDiv);
  });
}
http.send();

