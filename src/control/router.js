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
    case '#/login': { return container.appendChild(components.login()); }
    case '#/register':
      container.appendChild(components.register.view());
      components.register.signUp();
      break;
    case '#/timeline': { return container.appendChild(components.timeline()); }
    default:
      break;
  }
};

export { changeView };
