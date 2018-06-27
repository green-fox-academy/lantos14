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


// catFilterBtn.addEventListener('click', () => {
//   catFilterDiv.innerHTML = '';

//   let btnCatList = [];

//   let scienceBtn = document.createElement('button');
//   scienceBtn.innerText = 'Science';
//   scienceBtn.setAttribute('class','sub-btn');
//   btnCatList.push(scienceBtn);
  
//   let natureBtn = document.createElement('button');
//   btnCatList.push(natureBtn);
//   natureBtn.innerText = 'Nature';
//   natureBtn.setAttribute('class','sub-btn');
 
//   let technoBtn = document.createElement('button');
//   btnCatList.push(technoBtn);
//   technoBtn.innerText = 'Technology';
//   technoBtn.setAttribute('class','sub-btn');
 
//   let compBtn = document.createElement('button');
//   btnCatList.push(compBtn);
//   compBtn.innerText = 'Computers';
//   compBtn.setAttribute('class','sub-btn');
 
//   let medBtn = document.createElement('button');
//   btnCatList.push(medBtn);
//   medBtn.innerText = 'Medical';
//   medBtn.setAttribute('class','sub-btn');

//   btnCatList.forEach(btn => {
//     btn.addEventListener('click', () => {
//       http.open('GET', `http://localhost:3000/api/full-list?category=${event.target.innerText}`, true);
//       http.onload = () => {
//         let response = JSON.parse(http.response);

//         fullListBody.innerHTML = '';

//         renderTable(response.fullList, fullListBody);
//       }
//       http.send();
//     });
//     catFilterDiv.appendChild(btn);
//   });
// });

// costFilterBtn.addEventListener('click', () => {
//   costFilterDiv.innerHTML = '';

//   let btnCostList = [];

//   let under50Btn = document.createElement('button');
//   under50Btn.innerText = '50';
//   under50Btn.setAttribute('class','sub-btn');
//   btnCostList.push(under50Btn);
  
//   let above100 = document.createElement('button');
//   above100.innerText = '100';
//   above100.setAttribute('class','sub-btn');
//   btnCostList.push(above100);
 
//   let above150 = document.createElement('button');
//   above150.innerText = '150';
//   above150.setAttribute('class','sub-btn');
//   btnCostList.push(above150);

//   btnCostList.forEach(btn => {
//     btn.addEventListener('click', () => {
//       http.open('GET', `http://localhost:3000/api/full-list?pgt=${event.target.innerText}`, true);
//       http.onload = () => {
//         let response = JSON.parse(http.response);

//         fullListBody.innerHTML = '';

//         renderTable(response.fullList, fullListBody);
//       }
//       http.send();
//     });
//     costFilterDiv.appendChild(btn);
//   });
// });












// buttonTitle.addEventListener('click', () => {

//   http.open('GET', "http://localhost:3000/api/titles", true);
//   http.onload = () => {
//     let response = JSON.parse(http.response);

//     while (ul1.firstChild) {
//       ul1.removeChild(ul1.firstChild);
//     }

//     response.bookNames.forEach(title => {
//       let newLi = document.createElement('li');
//       newLi.innerText = title.book_name;
//       ul1.appendChild(newLi);
//     })
//   }
//   http.send();
// });

// buttonFullList.addEventListener('click', () => {

//   http.open('GET', "http://localhost:3000/api/full-list", true);
//   http.onload = () => {
//     let response = JSON.parse(http.response);

//     while (fullListBody.firstChild) {
//       fullListBody.removeChild(fullListBody.firstChild);
//     }

//     response.fullList.forEach(book => {

//       let newTRow = document.createElement('tr');
//       let tdName = document.createElement('td');
//       let tdAut = document.createElement('td');
//       let tdCat = document.createElement('td');
//       let tdPub = document.createElement('td');
//       let tdCost = document.createElement('td');

//       tdName.innerText = book.book_name;
//       tdAut.innerText = book.aut_name;
//       tdCat.innerText = book.cate_descrip;
//       tdPub.innerText = book.pub_name;
//       tdCost.innerText = book.book_price;

//       newTRow.appendChild(tdName);
//       newTRow.appendChild(tdAut);
//       newTRow.appendChild(tdCat);
//       newTRow.appendChild(tdPub);
//       newTRow.appendChild(tdCost);

//       fullListBody.appendChild(newTRow);
//     });
//   }
//   http.send();
// });

// filterBtn.forEach(btn => {
// btn.addEventListener('click', () => {

//     http.open('GET', `http://localhost:3000/api/full-list?category=${event.target.innerText}`, true);
//     http.onload = () => {
//       let response = JSON.parse(http.response);

//       while (fullListBody.firstChild) {
//         fullListBody.removeChild(fullListBody.firstChild);
//       }

//       response.fullList.forEach(book => {

//         let newTRow = document.createElement('tr');
//         let tdName = document.createElement('td');
//         let tdAut = document.createElement('td');
//         let tdCat = document.createElement('td');
//         let tdPub = document.createElement('td');
//         let tdCost = document.createElement('td');

//         tdName.innerText = book.book_name;
//         tdAut.innerText = book.aut_name;
//         tdCat.innerText = book.cate_descrip;
//         tdPub.innerText = book.pub_name;
//         tdCost.innerText = book.book_price;

//         newTRow.appendChild(tdName);
//         newTRow.appendChild(tdAut);
//         newTRow.appendChild(tdCat);
//         newTRow.appendChild(tdPub);
//         newTRow.appendChild(tdCost);

//         fullListBody.appendChild(newTRow);
//       });
//     }
//     http.send();
//   });
// });