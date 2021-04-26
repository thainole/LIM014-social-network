// Sign Up

const signUpAuth = (email, password, name) => firebase.auth()
  .createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    const userName = name;
    return {
      email: user.email,
      userName,
      userPhoto: user.photoURL,
      userToken: user.refreshToken,
    };
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return `${errorCode} ${errorMessage}`;
  });
  // Sign in with Google
const signInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
    .then((userCredential) => {
    // Signed in with g
      const user = userCredential.user;
      return {
        user,
        email: user.email,
        userName: user.displayName,
        userPhoto: user.photoURL,
        userToken: user.refreshToken,
      };
    })
    .catch((err) => err);
};
// Log In
const logInAuth = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    return {
      email: user.email,
      userName: user.displayName,
      userPhoto: user.photoURL,
      userToken: user.refreshToken,
    };
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return `${errorCode} ${errorMessage}`;
  });

export { signUpAuth, logInAuth, signInGoogle };
