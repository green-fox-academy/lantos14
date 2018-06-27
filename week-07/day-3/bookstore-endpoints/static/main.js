'use strict';

const http = new XMLHttpRequest();
const buttonTitle = document.querySelector('#titles');
const ul1 = document.querySelector('#list1');
const buttonFullList = document.querySelector('#full-list-btn');
const fullListBody = document.querySelector('#full-list-tbody');

const inputCat = document.querySelector("#cat-input");
const inputPrice = document.querySelector("#price-input");
const searchBtn = document.querySelector('#search-by-input');


const renderTable = function (BookList, appendable) {
  BookList.forEach(book => {

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

    appendable.appendChild(newTRow);
  });
}

buttonFullList.addEventListener('click', () => {

  http.open('GET', "http://localhost:3000/api/full-list", true);
  http.onload = () => {
    let response = JSON.parse(http.response);

    fullListBody.innerHTML = '';

    renderTable(response.fullList, fullListBody);

  }
  http.send();
});

searchBtn.addEventListener('click', () => {
  http.open('GET', `http://localhost:3000/api/full-list?category=${inputCat.value}&pgt=${inputPrice.value}`, true);
      http.onload = () => {
        
        let response = JSON.parse(http.response);

        fullListBody.innerHTML = '';

        renderTable(response.fullList, fullListBody);
      }
      http.send();
});
