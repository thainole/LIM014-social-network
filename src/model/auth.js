// Sign Up with email and password
const signUpAuth = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

// Sign in with Google
const signInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

// Log In
const logInAuth = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

// Sign Out
const signOutAuth = () => firebase.auth().signOut();

// Current user info
const userData = () => {
  const user = firebase.auth().currentUser;
  if (user === null) {
    console.log('soy null linea 22 auth');
  }
  const userPhoto = user.photoURL !== null ? user.photoURL : '../img/tay.jpg';
  return {
    name: user.displayName,
    id: user.uid,
    photo: userPhoto,
  };
};

// On auth state changed
const authStateChanged = () => firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    window.location.hash = '#/timeline';
    console.log(user);
  } else if (user === null) {
    console.log(user);
    // window.location.hash = '#/';
  }
});

export {
  signUpAuth,
  logInAuth,
  signInGoogle,
  signOutAuth,
  userData,
  authStateChanged,
};
