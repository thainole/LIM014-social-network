import { components } from '../view/components.js';

// eslint-disable-next-line consistent-return
const changeView = (rute) => {
  const container = document.getElementById('main');
  container.innerHTML = '';

  switch (rute) {
    case '#/':
      container.appendChild(components.home.view());
      components.home.init();
      break;
    case '#/login':
      container.appendChild(components.login.view());
      components.login.logIn();
      components.login.signInWithGoogle();
      break;
    case '#/register':
      container.appendChild(components.register.view());
      components.register.signUp();
      components.register.signUpWithGoogle();
      break;
    case '#/timeline':
      container.appendChild(components.timeline.view());
      components.timeline.logOut();
      components.timeline.createPost();
      /* components.timeline.getPosts(); */
      break;
    default:
      // mostrar 404 page
      break;
  }
};

export { changeView };
