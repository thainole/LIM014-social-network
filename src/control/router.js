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
    case '#/register': { return container.appendChild(components.register()); }
    case '#/timeline': { return container.appendChild(components.timeline()); }
    default:
      break;
  }
};

export { changeView };
