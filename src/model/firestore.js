const createNewPost = (photo, name, id, content) => firebase.firestore().collection('posts').add({
  photo,
  name,
  id,
  content,
});

const readAllPosts = () => firebase.firestore().collection('posts').onSnapshot((querySnapshot) => {
  const posts = [];
  querySnapshot.forEach((doc) => {
    posts.push(doc.data());
  });
  return posts;
});

export { createNewPost, readAllPosts };
