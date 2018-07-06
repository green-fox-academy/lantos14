'use strict';

const flowTable = document.querySelector('#flow');
const toSubmitPageLink = document.querySelector('#submit-post-btn');

function formatTimestamp(timestamp) {
  return `${timestamp.slice(0, 10)}, ${timestamp.slice(11, 16)}`
}

const fillFlow = () => {
  const http = new XMLHttpRequest();
  http.open("GET", "http://localhost:3000/posts", true);
  http.onload = () => {
    let response = JSON.parse(http.response);
    response.posts.forEach(post => {
      // parent post div
      let newPostDiv = document.createElement('div');
      newPostDiv.setAttribute('class', 'post');
      newPostDiv.setAttribute('id', `post${post.id}`);
      newPostDiv.setAttribute('data-id', `${post.id}`);
      // voteDiv add-ons
      let newVoteDiv = document.createElement('div');
      newVoteDiv.setAttribute('class', 'vote-section');
      newVoteDiv.setAttribute('data-id', `${post.id}`);

      let newUpvoteImg = document.createElement('img');
      newUpvoteImg.setAttribute('src', './upvote.png');
      newUpvoteImg.setAttribute('class', 'up-vote vote-btn');
      newUpvoteImg.setAttribute('data-id', `${post.id}`);
      newUpvoteImg.addEventListener('click', (e) => {
        let postId = e.target.dataset.id;

        let httpUpvote = new XMLHttpRequest();

        httpUpvote.open("PUT", `http://localhost:3000/posts/${postId}/upvote`, true);
        httpUpvote.onload = () => {
          const newScoreResponse = JSON.parse(httpUpvote.response)
          const updatedScore = newScoreResponse.message[0].score;
          const actualScoreP = document.querySelector(`.score-value[data-id='${postId}']`)

          actualScoreP.innerText = updatedScore;
        }
        httpUpvote.send();
      });

      const newScore = document.createElement('p');
      newScore.setAttribute('class', 'score-value');
      newScore.setAttribute('data-id', `${post.id}`);
      newScore.innerText = post.score;

      let newDownvoteImg = document.createElement('img');
      newDownvoteImg.setAttribute('src', './downvote.png');
      newDownvoteImg.setAttribute('class', 'down-vote vote-btn');
      newDownvoteImg.setAttribute('data-id', `${post.id}`);
      newDownvoteImg.addEventListener('click', (e) => {
        const postId = e.target.dataset.id;

        let httpDownvote = new XMLHttpRequest();

        httpDownvote.open("PUT", `http://localhost:3000/posts/${postId}/downvote`, true);
        httpDownvote.onload = () => {
          const newScoreResponse = JSON.parse(httpDownvote.response)
          const updatedScore = newScoreResponse.message[0].score;
          const actualScoreP = document.querySelector(`.score-value[data-id='${postId}']`)

          actualScoreP.innerText = updatedScore;
        }
        httpDownvote.send();
      });

      // postContent add-ons
      let newPostContentDiv = document.createElement('div');
      newPostContentDiv.setAttribute('class', 'post-content wrapped');
      newPostContentDiv.setAttribute('data-id', `${post.id}`);

      let newTitle = document.createElement('h2');
      newTitle.setAttribute('class', 'post-heading');
      newTitle.setAttribute('data-id', `${post.id}`);
      newTitle.innerText = post.title;

      let BtnRoll = document.createElement('img');
      BtnRoll.innerText = `...`;
      BtnRoll.setAttribute('class', 'roll-btn');
      BtnRoll.setAttribute('data-id', `${post.id}`);
      BtnRoll.setAttribute('src', 'expand.png');
      BtnRoll.addEventListener('click', (e) => {
        const parent = document.querySelector(`.post-content[data-id='${post.id}']`);
        if (parent.className === 'post-content') {
          parent.className += ' wrapped';
        } else {
          parent.className = 'post-content';
        }
      });

      let newImg = document.createElement('img');
      newImg.setAttribute('src', `${post.url}`);
      newImg.setAttribute('class', `post-image`);
      newImg.setAttribute('data-id', `${post.id}`);

      // mod and del btn line

      let newBtnline = document.createElement('div');
      newBtnline.setAttribute('class', 'btn-line');
      // modify btn
      let newModifyBtn = document.createElement('button');
      newModifyBtn.innerText = 'modify';
      newModifyBtn.setAttribute('class', 'btnMod');
      newModifyBtn.setAttribute('data-opened', 'false');
      newModifyBtn.setAttribute('data-id', `${post.id}`);
      newModifyBtn.addEventListener('click', (e) => {
        let modDiv = document.querySelector(`.mod-input-div[data-id='${post.id}']`)

        if (newModifyBtn.dataset.opened === 'false') {
          modDiv.style.display = 'block';
          newModifyBtn.dataset.opened = 'true';
        } else {
          modDiv.style.display = 'none';
          newModifyBtn.dataset.opened = 'false';
        }
      });
      // del btn
      let newDelBtn = document.createElement('button');
      newDelBtn.setAttribute('data-id', `${post.id}`);
      newDelBtn.innerText = 'delete';
      newDelBtn.addEventListener('click', (e) => {
        let postID = e.target.dataset.id;

        let httpDel = new XMLHttpRequest();
        httpDel.open('DELETE', `http://localhost:3000/posts/${postID}`);
        httpDel.send();

        flowTable.innerHTML = '';
        fillFlow();
      });

      newBtnline.appendChild(newModifyBtn);
      newBtnline.appendChild(newDelBtn);

      let newOwnerP = document.createElement('p');
      newOwnerP.setAttribute('class', 'owner-p');
      newOwnerP.setAttribute('data-id', `${post.id}`);
      newOwnerP.innerHTML = `posted by <em>${post.user_name}<em> on <em> ${formatTimestamp(post.timestamp)}<em>`;

      // modify input fields

      let inputDiv = document.createElement('div');
      inputDiv.setAttribute('class', 'mod-input-div');
      inputDiv.setAttribute('data-id', `${post.id}`);
      inputDiv.style.display = "none"

      let fieldset = document.createElement('fieldset');
      let legend = document.createElement('legend');
      legend.innerText = 'Change your post below';

      let modInputTitle = document.createElement('input');
      modInputTitle.setAttribute('type', 'text');
      modInputTitle.setAttribute('data-id', `${post.id}`);
      modInputTitle.setAttribute('name', 'mod-title');
      modInputTitle.setAttribute('placeholder', 'New title here');

      let modInputUrl = document.createElement('input');
      modInputUrl.setAttribute('type', 'text');
      modInputUrl.setAttribute('data-id', `${post.id}`);
      modInputUrl.setAttribute('name', 'mod-title-url');
      modInputUrl.setAttribute('placeholder', 'New url here');
      let BtnMod = document.createElement('button');
      BtnMod.setAttribute('data-id', `${post.id}`);
      BtnMod.innerText = 'Change it!';

      // listening for modification

      BtnMod.addEventListener('click', (e) => {

        let modPostId = e.target.dataset.id;
        
        let httpMod = new XMLHttpRequest();

        httpMod.open('PUT', `http://localhost:3000/posts/${modPostId}`, true);
        httpMod.setRequestHeader('Content-type', 'application/json');

        let modTitle = document.querySelector(`input[name='mod-title'][data-id='${post.id}'`).value;
        let modUrl = document.querySelector(`input[name='mod-title-url'][data-id='${post.id}'`).value;
        let currPostTitle = e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[0]
        let currPostUrl = e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[2]

        console.log(currPostTitle);
        console.log(currPostUrl);

        console.log(document.querySelector(`.post-heading[data-id='${post.id}'`));
        console.log(document.querySelector(`.post-image[data-id='${post.id}'`));
        httpMod.onload = () => {



          // let currPostTitle = document.querySelector(`.post-heading[data-id='${post.id}'`);
          // let currPostUrl = document.querySelector(`img[data-id='${post.id}'`);
          

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
      // appending

      fieldset.appendChild(legend);
      fieldset.appendChild(modInputTitle);
      fieldset.appendChild(modInputUrl);
      fieldset.appendChild(BtnMod);
      inputDiv.appendChild(fieldset);

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
}

// populate the post flow block
fillFlow()
