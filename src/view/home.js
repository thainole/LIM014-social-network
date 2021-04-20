export default () => {
  const view = ` <div class="wraper">
  <section class="container-home">
    <h1 class="container-home__h1">Travelers</h1>
    <h3 class="container-home__h3">Join the adventure!</h3>
    <article class="container-center">
      <button id="login" class="button">Log In</button>
      <p class="container-home__p">------- or -------</p>
      <button id="signUp" class="button button--white">Sign Up</button>
    </article>
  </section>
</div> `;

  const articleElem = document.createElement('article');
  articleElem.innerHTML = view;
  return articleElem;
};
