const posts = [
  { title: 'First Post', body: 'This is the first post' },
  { title: 'Second Post', body: 'This is the second post' }
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach(post => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(data, callback) {
  setTimeout(() => {
    posts.push(data);
    callback();
  }, 2000);
}

createPost({ title: 'Third Post', body: 'This is the third post' }, getPosts);
