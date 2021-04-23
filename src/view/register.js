import { signUpAuth } from '../model/auth.js';

const viewRegister = () => {
  const view = `
  <div class="wraper">
    <section class="container container-form ">
      <h1 class="container-home__h1">Travelers</h1>
      <h3 class="container-home__h3">Let´s create your account!</h3>
      <button id ="signUp-google" class="button button--white">Sign Up with <i class="fab fa-google"></i></button>
      <form id='signUp-form'>
        <div class="margin--button">
          <i class="fas fa-user"></i>
          <input type="text" class="input" placeholder="Name" required>
        </div>
        <div class="margin--button">
          <i class="far fa-envelope"></i>
          <input type="text" id="signUp-email" class="input" placeholder="E-mail" required>
        </div>
        <div class="margin--button">
          <i class="fas fa-unlock-alt"></i>
          <input type="password" id="signUp-password" class="input" minlength="6" placeholder="Password" required>
        </div>
        <button type="submit" class="button align-end" id="signUp-button">Sign Up</button>
      </form>
      <article class="align-start">
        <h4 class="container-home__h4 ahref"> Already a member?</h4>
        <a class="ahref" href="#/login"> Sign In </a>        
      </article>
    </section>
  </div>`;

  const articleElem = document.createElement('article');
  articleElem.innerHTML = view;
  return articleElem;
};

const signUp = () => {
  const goSignUp = document.getElementById('signUp-form');
  goSignUp.addEventListener('submit', (e) => {
    e.preventDefault();
    const signUpPassword = document.getElementById('signUp-password').value;
    const signUpEmail = document.getElementById('signUp-email').value;
    signUpAuth(signUpEmail, signUpPassword)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });
};

// window.location.hash = '#/timeline'
export { viewRegister, signUp };
