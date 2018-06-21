import { blogSpot, blogNote01, blogNote02, blogNote03 } from "./blogSpot";

class Blog {
  postList: blogSpot [];

  add(blogNote) {
    this.postList.push (blogNote);
  }
}

let myFirstBlog = new Blog

myFirstBlog.add(blogNote01);
myFirstBlog.add(blogNote02);
myFirstBlog.add(blogNote03);
// importing does not work
console.log(myFirstBlog);