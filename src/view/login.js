export default () => {
  const viewLogin = ` 
  <div class="wraper">
  <section class="container container-login">
    <h1 class="container-home__h1">Travelers</h1>
    <h3 class="container-home__h3">Welcome back!</h3>
    <button class="button button--white">Sign In with <i class="fab fa-google"></i></button>
    <div class="margin--button align-end">
      <i class="far fa-envelope "></i>
      <input type="text" class="input" placeholder="E-mail">
    </div>
    <div class="margin--button">
      <i class="fas fa-unlock-alt"></i>
      <input type="password" class="input" placeholder="Password">
    </div>
    <button class="button align-end" id="buttonSingin">Sign in</button>
    <article class="align-start">
      <h4 class="container-home__h4 ahref"> Don't have an account?</h4>
      <a class="ahref" href="#/register"> Sign Up </a>        
    </article>
  </section>
</div>`;

  const articleElem = document.createElement('article');
  articleElem.innerHTML = viewLogin;
  return articleElem;
};

// {/* <button class="button button--white">Sign Up with <i class="fab fa-google"></i></button>
//     <div class="margin--button">
//       <i class="far fa-envelope"></i>
//       <input type="text" class="input" placeholder="E-mail">
//     </div>
//     <div class="margin--button">
//       <i class="fas fa-unlock-alt"></i>
//       <input type="text" class="input" placeholder="Password">
//     </div>
//  */}
