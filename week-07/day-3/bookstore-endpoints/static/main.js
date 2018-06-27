'use strict';

const http = new XMLHttpRequest();
const buttonTitle = document.querySelector('#titles');
const buttonFullList = document.querySelector('#full-list-btn');
const filterBtn = document.querySelectorAll('.filter-btn');
const ul1 = document.querySelector('#list1');
const fullListBody = document.querySelector('#full-list-tbody');

buttonTitle.addEventListener('click', () => {

  http.open('GET', "http://localhost:3000/api/titles", true);
  http.onload = () => {
    let response = JSON.parse(http.response);

    while (ul1.firstChild) {
      ul1.removeChild(ul1.firstChild);
    }

    response.bookNames.forEach(title => {
      let newLi = document.createElement('li');
      newLi.innerText = title.book_name;
      ul1.appendChild(newLi);
    })
  }
  http.send();
});

buttonFullList.addEventListener('click', () => {

  http.open('GET', "http://localhost:3000/api/full-list", true);
  http.onload = () => {
    let response = JSON.parse(http.response);

    while (fullListBody.firstChild) {
      fullListBody.removeChild(fullListBody.firstChild);
    }

    response.fullList.forEach(book => {

      let newTRow = document.createElement('tr');
      let tdName = document.createElement('td');
      let tdAut = document.createElement('td');
      let tdCat = document.createElement('td');
      let tdPub = document.createElement('td');
      let tdCost = document.createElement('td');

      tdName.innerText = book.book_name;
      tdAut.innerText = book.aut_name;
      tdCat.innerText = book.cate_descrip;
      tdPub.innerText = book.pub_name;
      tdCost.innerText = book.book_price;

      newTRow.appendChild(tdName);
      newTRow.appendChild(tdAut);
      newTRow.appendChild(tdCat);
      newTRow.appendChild(tdPub);
      newTRow.appendChild(tdCost);

      fullListBody.appendChild(newTRow);
    });
  }
  http.send();
});

filterBtn.forEach(btn => {
btn.addEventListener('click', () => {

    http.open('GET', `http://localhost:3000/api/full-list?category=${event.target.innerText}`, true);
    http.onload = () => {
      let response = JSON.parse(http.response);

      while (fullListBody.firstChild) {
        fullListBody.removeChild(fullListBody.firstChild);
      }

      response.fullList.forEach(book => {

        let newTRow = document.createElement('tr');
        let tdName = document.createElement('td');
        let tdAut = document.createElement('td');
        let tdCat = document.createElement('td');
        let tdPub = document.createElement('td');
        let tdCost = document.createElement('td');

        tdName.innerText = book.book_name;
        tdAut.innerText = book.aut_name;
        tdCat.innerText = book.cate_descrip;
        tdPub.innerText = book.pub_name;
        tdCost.innerText = book.book_price;

        newTRow.appendChild(tdName);
        newTRow.appendChild(tdAut);
        newTRow.appendChild(tdCat);
        newTRow.appendChild(tdPub);
        newTRow.appendChild(tdCost);

        fullListBody.appendChild(newTRow);
      });
    }
    http.send();
  });
});