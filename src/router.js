import components from './view/components.js';
import { authStateChanged } from './controller/auth.js';

// eslint-disable-next-line consistent-return
const changeView = (rute) => {
  const container = document.querySelector('#main');
  container.innerHTML = '';
  switch (rute) {
    case '#/':
      container.appendChild(components.home());
      break;

    case '#/login':
      container.appendChild(components.login());
      break;

    case '#/register':
      container.appendChild(components.register());
      break;

    case '#/timeline':
      // eslint-disable-next-line no-case-declarations
      authStateChanged((user) => {
        if (user !== null) {
          const userobj = {
            name: user.displayName,
            id: user.uid,
            photo: user.photoURL !== null ? user.photoURL : '../img/icon.jpg',
          };
          container.appendChild(components.timeline(userobj));
        }
      });
      break;
    case '#/profile':
      authStateChanged((user) => {
        if (user !== null) {
          const userobj = {
            name: user.displayName,
            id: user.uid,
            photo: user.photoURL !== null ? user.photoURL : '../img/icon.jpg',
          };
          container.appendChild(components.profile(userobj));
        }
      });
      break;
    default:
      container.appendChild(components.page404());
      break;
  }
};

export { changeView };
