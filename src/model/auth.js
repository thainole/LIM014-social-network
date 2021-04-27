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

export { signUpAuth, logInAuth, signInGoogle };
