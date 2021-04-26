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
        <input type="text" id="logIn-email" class="input" placeholder="E-mail" required>
      </div>
      <div class="margin--button">
        <i class="fas fa-unlock-alt"></i>
        <input type="password"  id="logIn-password" class="input" placeholder="Password" required>
      </div>
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
    logInAuth(logInEmail, logInPassword)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });
};
const signInWithGoogle = () => {
  const signInButton = document.getElementById('logIn-google');
  signInButton.addEventListener('click', () => {
    // e.preventDefault();
    signInGoogle().then((res) => {
      console.log(res);
      console.log('google sign in');
    })
      .catch((err) => console.log(err));
  });
};

// window.location.hash = '#/timeline'
export { viewLogIn, logIn, signInWithGoogle };
