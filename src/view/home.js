const viewHome = () => {
  const view = ` 
    <section class="container container-home">
      <h1 class="container-home__h1">Travelers</h1>
      <h3 class="container-home__h3 align-start">Join the adventure!</h3>
      <button id="logIn" class="button">Log In</button>
      <p class="container-home__p">------- or -------</p>
      <button id="signUp" class="button button--white">Sign Up</button>
    </section>
   `;

  const articleElem = document.createElement('article');
  articleElem.classList.add('wraper');
  articleElem.innerHTML = view;
  return articleElem;
};

const initHome = () => {
  const goLogin = document.getElementById('logIn');
  // eslint-disable-next-line no-return-assign
  goLogin.addEventListener('click', () => window.location.hash = '#/login');
  const goSign = document.getElementById('signUp');
  // eslint-disable-next-line no-return-assign
  goSign.addEventListener('click', () => window.location.hash = '#/register');
};

export { viewHome, initHome };
