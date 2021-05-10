import components from './view/components.js';
import { authStateChanged } from './controller/auth.js';

// eslint-disable-next-line consistent-return
const changeView = (rute) => {
  const container = document.querySelector('#main');
  container.innerHTML = '';
  console.log('ruta', rute);
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
      const authstatecb = (user) => {
      /*   console.log(user); */
        if (user !== null) {
          const userobj = {
            name: user.displayName,
            id: user.uid,
            photo: user.photoURL !== null ? user.photoURL : '../img/icon.jpg',
          };
          container.appendChild(components.timeline(userobj));
        } else { console.log(user, 'else'); }
      };
      authStateChanged(authstatecb);
      break;

    default:
      // mostrar 404 page
      break;
  }
};

export { changeView };
