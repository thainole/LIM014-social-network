const createNewPost = (photo, name, id, content) => firebase.firestore().collection('posts').add({
  photo,
  name,
  id,
  content,
});

const readAllPosts = () => firebase.firestore().collection('posts').onSnapshot();

export { createNewPost, readAllPosts };
