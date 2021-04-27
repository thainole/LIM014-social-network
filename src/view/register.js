import { signUpAuth, signInGoogle } from '../model/auth.js';

const viewRegister = () => {
  const view = `
    <section class="container container-form ">
      <h1 class="container-home__h1">Travelers</h1>
      <h3 class="container-home__h3">Let´s create your account!</h3>
      <button id ="signUp-google" class="button button--white">Sign Up with <i class="fab fa-google"></i></button>
      <form id='signUp-form'>
        <div class="margin--button">
          <i class="fas fa-user"></i>
          <input type="text" class="input" placeholder="Name" id="signUpName" required>
        </div>
        <div class="margin--button">
          <i class="far fa-envelope"></i>
          <input type="text" id="signUp-email" class="input" placeholder="E-mail" required>
        </div>
        <div class="margin--button">
          <i class="fas fa-unlock-alt"></i>
          <input type="password" id="signUp-password" class="input" minlength="6" placeholder="Password" required>
        </div>
        <div class="hide error">
          <p>*The email is already registered or is not written correctly. Please try again.</p>
        </div>
        <button type="submit" class="button align-end" id="signUp-button">Sign Up</button>
      </form>
      <article class="align-start">
        <h4 class="container-home__h4 ahref"> Already a member?</h4>
        <a class="ahref" href="#/login"> Sign In </a>
      </article>
    </section>
  `;

  const articleElem = document.createElement('article');
  articleElem.classList.add('wraper');
  articleElem.innerHTML = view;
  return articleElem;
};

const signUp = () => {
  const goSignUp = document.getElementById('signUp-form');
  goSignUp.addEventListener('submit', (e) => {
    e.preventDefault();
    const signUpPassword = document.getElementById('signUp-password').value;
    const signUpEmail = document.getElementById('signUp-email').value;
    // const signUpName = document.getElementById('signUpName').value;
    const elemDiv = document.querySelector('.error');
    signUpAuth(signUpEmail, signUpPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        window.location.hash = '#/timeline';
        return {
          email: user.email,
          userPhoto: user.photoURL,
          userToken: user.refreshToken,
        };
      })
      .catch(() => elemDiv.classList.remove('hide'),
        elemDiv.classList.add('show'));
  });
};

const signUpWithGoogle = () => {
  const signInButton = document.getElementById('signUp-google');
  signInButton.addEventListener('click', () => {
    // eslint-disable-next-line no-return-assign
    signInGoogle()
      .then((userCredential) => {
        // Signed in with g
        const user = userCredential.user;
        window.location.hash = '#/timeline';
        return {
          user,
          email: user.email,
          userName: user.displayName,
          userPhoto: user.photoURL,
          userToken: user.refreshToken,
        };
      })
      .catch((err) => err);
  });
};

export { viewRegister, signUp, signUpWithGoogle };
