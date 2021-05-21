import { signUpAuth, signInGoogle, signOutAuth } from '../controller/auth.js';

const signUp = (elem) => {
  const goSignUp = elem.querySelector('form');
  goSignUp.addEventListener('submit', (e) => {
    e.preventDefault();
    const signUpPassword = elem.querySelector('#signUp-password').value;
    const signUpEmail = elem.querySelector('#signUp-email').value;
    const signUpName = elem.querySelector('#signUpName').value;
    const elemDiv = elem.querySelector('.error');

    signUpAuth(signUpEmail, signUpPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        user.updateProfile({
          displayName: signUpName,
        });
        const config = {
          url: 'http://localhost:5000/#/login',
        };
        user.sendEmailVerification(config)
          .then(() => {
            // eslint-disable-next-line no-alert
            alert('We have sent an you an e-mail. Please verify it and confirm that it is you.');
          })
          .catch((err) => {
            console.log(err);
            // containerVerify.innerHTML = '⚠️ There has been a mistake when user was creating';
          });
        // eslint-disable-next-line max-len
        // containerVerify.innerHTML = 'We have sent an you an e-mail. Please verify it and confirm that it is you ';
        signOutAuth();
        window.location.hash = '#/';
      })
      // eslint-disable-next-line no-return-assign
      .catch((err) => (err.code === 'auth/email-already-in-use'
        ? elemDiv.textContent = '⚠️ The email is already registered. Please try another one.'
        : elemDiv.textContent = '⚠️ An error occurred. Please try again.'));
  });
};

const signUpWithGoogle = (elem) => {
  const signInButton = elem.querySelector('#signUp-google');
  signInButton.addEventListener('click', () => {
    // eslint-disable-next-line no-return-assign
    const elemDiv = elem.querySelector('.error');
    signInGoogle()
      .then((userCredential) => {
        const user = userCredential.user;
        window.location.hash = '#/timeline';
        return {
          user,
          userEmail: user.email,
          userName: user.displayName,
          userPhoto: user.photoURL,
          userToken: user.refreshToken,
        };
      })// eslint-disable-next-line no-return-assign
      .catch(() => elemDiv.textContent = '⚠️ An error occurred. Please try again.');
  });
};

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
          <input type="email" id="signUp-email" class="input" placeholder="E-mail" required>
        </div>
        <div class="margin--button">
          <i class="fas fa-unlock-alt"></i>
          <input type="password" id="signUp-password" class="input" minlength=6 maxlength=15 placeholder="Password" required>
        </div>
        <div class="error"></div>
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

  signUp(articleElem);
  signUpWithGoogle(articleElem);
  return articleElem;
};

export { viewRegister };
