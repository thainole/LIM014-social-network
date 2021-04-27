import { components } from '../view/components.js';

// eslint-disable-next-line consistent-return
const changeView = (rute) => {
  const container = document.getElementById('main');
  const containerHeader = document.getElementById('header');
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
    case '#/timeline': { return container.appendChild(components.timeline()); }

    default:
      break;
  }
};

export { changeView };
