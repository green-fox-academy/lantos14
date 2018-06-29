'use strict';

const http = new XMLHttpRequest();
const flowTable = document.querySelector('#flow');
const toSubmitPageLink = document.querySelector('#submit-post-btn');

function formatTimestamp(timestamp) {
  return `${timestamp.slice(0,10)}, ${timestamp.slice(11,16)}`
}
// populate the post flow block
http.open("GET", "http://localhost:3000/posts", true);
http.onload = () => {
  let response = JSON.parse(http.response);
  console.log(response);
  response.posts.forEach (post => {
    // parent post div
    let newPostDiv = document.createElement('div');
    newPostDiv.setAttribute('class', 'post');
    // voteDiv add-ons
    let newVoteDiv = document.createElement('div');
    newVoteDiv.setAttribute ('class', 'vote-section');

    let newUpvoteImg = document.createElement('img');
    newUpvoteImg.setAttribute('src', './upvote.png');
    newUpvoteImg.setAttribute('class', 'up-vote vote-btn');

    let newScore = document.createElement('p');
    newScore.setAttribute('class', 'score-value');
    newScore.innerText = post.score;

    let newDownvoteImg = document.createElement('img');
    newDownvoteImg.setAttribute('src', './downvote.png');
    newDownvoteImg.setAttribute('class', 'down-vote vote-btn');
    
    // postContent add-ons
    let newPostContentDiv = document.createElement('div');
    newPostContentDiv.setAttribute('class', 'post-content');

    let newTitle = document.createElement('h2');
    newTitle.setAttribute('class', 'post-heading');
    newTitle.innerText = post.title;
    
    let newImg = document.createElement('img');
    newImg.setAttribute('src', `${post.url}`);
    
    let newOwnerP = document.createElement('p');
    newOwnerP.setAttribute('class', 'owner-p');
    newOwnerP.innerHTML = `posted by <em>${post.user_name}<em> on <em> ${formatTimestamp(post.timestamp)}<em>`;

    // appending
    newVoteDiv.appendChild(newUpvoteImg);
    newVoteDiv.appendChild(newScore);
    newVoteDiv.appendChild(newDownvoteImg);

    newPostContentDiv.appendChild(newTitle);
    newPostContentDiv.appendChild(newImg);
    newPostContentDiv.appendChild(newOwnerP);

    newPostDiv.appendChild(newVoteDiv);
    newPostDiv.appendChild(newPostContentDiv);

    flowTable.appendChild(newPostDiv);
  });
}
http.send();