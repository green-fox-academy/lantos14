
// task 1

let image = document.querySelector('img');
console.log (image.getAttribute('src'));

// task 2

image.setAttribute('src', 'http://www.clker.com/cliparts/b/s/a/r/8/z/green-fox-outline-hi.png');

// task 3

let bestSiteLink = document.querySelector('a');

bestSiteLink.setAttribute('href','https://www.greenfoxacademy.com/');

// task 4

let wrongButton = document.querySelector('.this-one');

wrongButton.innerHTML = 'Don\'t Click Me';