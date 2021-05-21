import { logInAuth, signInGoogle } from '../controller/auth.js';

const logIn = (elem) => {
  const goLogIn = elem.querySelector('form');
  goLogIn.addEventListener('submit', (e) => {
    e.preventDefault();
    const logInPassword = elem.querySelector('#logIn-password').value;
    const logInEmail = elem.querySelector('#logIn-email').value;
    const elemDiv = elem.querySelector('.error');

    logInAuth(logInEmail, logInPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.emailVerified) {
          window.location.hash = '#/timeline';
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

const signInWithGoogle = (elem) => {
  const signInButton = elem.querySelector('#logIn-google');
  signInButton.addEventListener('click', () => {
    const elemDiv = elem.querySelector('.error');
    // eslint-disable-next-line no-return-assign
    signInGoogle().then(() => window.location.hash = '#/timeline')
    // eslint-disable-next-line no-return-assign
      .catch(() => elemDiv.textContent = '⚠️ An error occurred. Please try again.');
  });
};

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

  logIn(articleElem);
  signInWithGoogle(articleElem);

  return articleElem;
};

export { viewLogIn };
