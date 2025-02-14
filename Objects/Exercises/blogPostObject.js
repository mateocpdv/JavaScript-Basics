// title
// body
// author
// views
// comments
//    (author, body)
// isLive

// let post = {
//   title: 'a',
//   body: 'b',
//   author: 'c',
//   views: 1,
//   comments: [{ author: 'a', body: 'b' }],
//   comments: [{ author: 'a', body: 'b' }],
//   isLive: true,
// };

let post = new Post('a', 'b', 'c');

console.log(post);

// Constructor Function

function Post(title, body, author) {
  this.title = title;
  this.author = author;
  this.body = body;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}
