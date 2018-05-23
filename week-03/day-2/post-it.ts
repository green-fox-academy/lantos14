class postIt {
  backgroundColor: string;
  text: string;
  textColor: string;

  constructor (backgroundColor: string, text: string, textColor: string) {
    this.backgroundColor = backgroundColor;
    this.text = text;
    this.textColor = textColor;
  }
}

let post1 = new postIt ('orange', 'Idea 1', 'green');

let post2 = new postIt ('pink', 'Awesome', 'black');

let post3 = new postIt ('yellow', 'Superb!', 'green');

console.log (post1, post2, post3);