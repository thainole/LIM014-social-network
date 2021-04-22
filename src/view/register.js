export default () => {
  const viewRegister = `
  <div class="wraper">
    <section class="container container-signup ">
      <h1 class="container-home__h1">Travelers</h1>
      <h3 class="container-home__h3">Let´s create your account!</h3>
      <button class="button button--white">Sign Up with <i class="fab fa-google"></i></button>
      <div class="margin--button align-end">
        <i class="fas fa-user"></i>
        <input type="text" class="input" placeholder="Name">
      </div>
      <div class="margin--button align-end">
        <i class="far fa-envelope "></i>
        <input type="text" class="input" placeholder="E-mail">
      </div>
      <div class="margin--button">
        <i class="fas fa-unlock-alt"></i>
        <input type="password" class="input" minlength="6" placeholder="Password">
      </div>
      <button class="button align-end" id="buttonSingin">Sign Up</button>
      <article class="align-start">
        <h4 class="container-home__h4 ahref"> Already a member?</h4>
        <a class="ahref" href="#/login"> Sign In </a>        
      </article>
    </section>
  </div>`;

  const articleElem = document.createElement('article');
  articleElem.innerHTML = viewRegister;
  return articleElem;
};
