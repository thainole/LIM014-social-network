export default () => {
  const viewLogin = `<h1> holaaaa </h1>
  <p>soy login</p> `;

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