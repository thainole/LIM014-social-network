const createNewPost = (photo, name, id, content) => firebase.firestore().collection('posts').add({
  photo,
  name,
  id,
  content,
});

const readAllPosts = (callback) => firebase.firestore().collection('posts')
  .onSnapshot((querySnapshot) => {
    console.log('Colección(querySnapshot)', querySnapshot);
    const post = [];
    querySnapshot.forEach((doc) => {
      console.log('info de los posts (doc) dentro del querySnapshot', doc.data());
      post.push({ id: doc.id, ...doc.data() });
    });
    callback(post);
  });

export { createNewPost, readAllPosts };
