const datePostDB = () => {
  const datePost = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };
  const timePost = {
    hour12: 'true',
    hour: 'numeric',
    minute: 'numeric',
  };
  const date = new Date().toLocaleDateString('es-Es', datePost);
  const time = new Date().toLocaleTimeString('es-Es', timePost);
  const dateTime = `${date} ${time}`;

  return dateTime;
};

const orderDate = () => {
  const year = new Date().getFullYear();
  const month = `0${new Date().getMonth()}`.slice(-2);
  const day = `0${new Date().getDate()}`.slice(-2);
  const hour = `0${new Date().getHours()}`.slice(-2);
  const minute = `0${new Date().getMinutes()}`.slice(-2);
  const second = `0${new Date().getSeconds()}`.slice(-2);
  // eslint-disable-next-line radix
  return parseInt(`${year}${month}${day}${hour}${minute}${second}`, 0);
};

const createNewPost = (photo, name, id, content, counterLikes, postImgUrl) => firebase.firestore().collection('posts').add({
  photo,
  name,
  id,
  content,
  counterLikes,
  date: datePostDB(),
  orderDate: orderDate(),
  postImgUrl,
});

const readAllPosts = (cb) => firebase.firestore().collection('posts')
  .orderBy('orderDate', 'desc')
  .onSnapshot((querySnapshot) => {
    const post = querySnapshot.docs.map((doc) => ({
      idPost: doc.id,
      ...doc.data(),
    }
    ));
    cb(post);
  });

const deletePost = (idPost) => firebase.firestore().collection('posts').doc(idPost).delete();

const updatePost = (idpost, valueEdited) => firebase.firestore().collection('posts').doc(idpost).update({
  content: valueEdited,
});

const updatLike = (idpost, counterLikes) => firebase.firestore().collection('posts').doc(idpost).update({
  counterLikes,
});

const uploadImage = (file, location) => {
  const storageRef = firebase.storage().ref(`${location}/${file.name}`);
  return storageRef.put(file);
};

const createComments = (idpost, photoComment, nameComment, idCommentUser, comment) => firebase.firestore().collection('comments').add({
  idpost,
  photoComment,
  nameComment,
  idCommentUser,
  comment,
  date: datePostDB(),
  orderDate: orderDate(),
});

// READ COMMENTS
const readAllComments = (cb) => firebase.firestore().collection('comments')
  .orderBy('orderDate', 'desc')
  .onSnapshot((querySnapshot) => {
    const comment = querySnapshot.docs.map((doc) => ({
      idComment: doc.id,
      ...doc.data(),
    }));
    // console.log(comment);// array de TODOS los coments ingresados
    cb(comment);
  });

const deleteComments = (idcomment) => firebase.firestore().collection('comments').doc(idcomment).delete();

export {
  createNewPost,
  readAllPosts,
  updatePost,
  deletePost,
  updatLike,
  uploadImage,
  createComments,
  readAllComments,
  deleteComments,
};
