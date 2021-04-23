// Sign Up

const signUpAuth = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    return user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return { errorCode, errorMessage };
  });
// Log In
const logInAuth = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    return user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return { errorCode, errorMessage };
  });

export { signUpAuth, logInAuth };
