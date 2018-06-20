// task 1

const fruitList = ['apple', 'banana', 'cat', 'dog'];

let liList = document.querySelectorAll('li');

for (let i = 0; i < liList.length; i++) {
  liList[i].innerText = fruitList[i];
}

// task 2

document.querySelector('ul').style.background = 'limegreen';