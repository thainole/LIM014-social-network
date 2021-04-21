export default () => {
  const view = ` <div class="wraper">
  <section class="container container-home">
    <h1 class="container-home__h1">Travelers</h1>
    <h3 class="container-home__h3 align-start">Join the adventure!</h3>
    <button id="login" class="button">Log In</button>
    <p class="container-home__p">------- or -------</p>
    <button id="signUp" class="button button--white">Sign Up</button>
  </section>
</div> `;

  const articleElem = document.createElement('article');
  articleElem.innerHTML = view;
  return articleElem;
};
