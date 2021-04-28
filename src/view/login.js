import { logInAuth, signInGoogle } from '../model/auth.js';

const viewLogIn = () => {
  const view = `
  <section class="container container-form">
    <h1 class="container-home__h1">Travelers</h1>
    <h3 class="container-home__h3">Welcome back!</h3>
    <button id="logIn-google" class="button button--white">Sign In with <i class="fab fa-google"></i></button>
    <form id="logIn-form">
      <div class="margin--button align-end">
        <i class="far fa-envelope "></i>
        <input type="email" id="logIn-email" class="input" placeholder="E-mail" required>
      </div>
      <div class="margin--button">
        <i class="fas fa-unlock-alt"></i>
        <input type="password"  id="logIn-password" class="input" placeholder="Password" minlength=6 required>
      </div>
      <div class="error"></div>
      <button class="button align-end" id="buttonSingin">Sign in</button>
    </form>
    <article class="align-start">
      <h4 class="container-home__h4 ahref"> Don't have an account?</h4>
      <a class="ahref" href="#/register"> Sign Up </a>
    </article>
  </section>
  `;

  const articleElem = document.createElement('article');
  articleElem.classList.add('wraper');
  articleElem.innerHTML = view;
  return articleElem;
};

const logIn = () => {
  const goLogIn = document.getElementById('logIn-form');
  goLogIn.addEventListener('submit', (e) => {
    e.preventDefault();
    const logInPassword = document.getElementById('logIn-password').value;
    const logInEmail = document.getElementById('logIn-email').value;
    const elemDiv = document.querySelector('.error');

    logInAuth(logInEmail, logInPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user.emailVerified) {
          window.location.hash = '#/timeline';
          /* return {
            email: user.email,
            userName: user.displayName,
            userPhoto: user.photoURL,
            userToken: user.refreshToken,
          } */
        } else {
          elemDiv.textContent = '⚠️ Please verify your email and try again.';
        }
      })
      .catch((error) => {
        if (error.code === 'auth/wrong-password') {
          elemDiv.textContent = '⚠️ Your password is wrong. Try again.';
        } else if (error.code === 'auth/user-not-found') {
          elemDiv.textContent = '⚠️ The email you entered does not match to any account. Try again.';
        } else {
          elemDiv.textContent = '⚠️ An error occurred. Please try again.';
        }
      });
  });
};
const signInWithGoogle = () => {
  const signInButton = document.getElementById('logIn-google');
  signInButton.addEventListener('click', () => {
    // eslint-disable-next-line no-return-assign
    signInGoogle().then(() => window.location.hash = '#/timeline')
      .catch(() => console.log('error 404'));
  });
};

export { viewLogIn, logIn, signInWithGoogle };
