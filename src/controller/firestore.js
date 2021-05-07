export const datePostDB = () => {
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
  console.log(month);
  const day = `0${new Date().getDate()}`.slice(-2);
  const hour = `0${new Date().getHours()}`.slice(-2);
  const minute = `0${new Date().getMinutes()}`.slice(-2);
  const second = `0${new Date().getSeconds()}`.slice(-2);
  // eslint-disable-next-line radix
  return parseInt(`${year}${month}${day}${hour}${minute}${second}`, 0);
};
const createNewPost = (photo, name, id, content) => firebase.firestore().collection('posts').add({
  photo,
  name,
  id,
  content,
  date: datePostDB(),
  orderDate: orderDate(),
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

export { createNewPost, readAllPosts };
