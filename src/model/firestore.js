const createNewPost = (photo, name, id, content) => firebase.firestore().collection('posts').add({
  photo,
  name,
  id,
  content,
});

const readAllPosts = (cb) => firebase.firestore().collection('posts')
  .onSnapshot((querySnapshot) => {
    const post = [];
    querySnapshot.forEach((doc) => {
      post.push({ idPost: doc.id, ...doc.data() });
      return cb(post);
    });
  });

export { createNewPost, readAllPosts };
