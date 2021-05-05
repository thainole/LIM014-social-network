const createNewPost = (photo, name, id, content) => firebase.firestore().collection('posts').add({
  photo,
  name,
  id,
  content,
});

const readAllPosts = (cb) => firebase.firestore().collection('posts')
  .onSnapshot((querySnapshot) => {
    const post = querySnapshot.docs.map((doc) => ({
      idPost: doc.id,
      ...doc.data(),
    }
    ));
    cb(post);
  });

export { createNewPost, readAllPosts };
