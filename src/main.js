// Este es el punto de entrada de tu aplicacion
import { changeView } from './control/router.js';

const navigateHome = () => {
  const goLogin = document.getElementById('login');
  const goSign = document.getElementById('signUp');
  // eslint-disable-next-line no-return-assign
  goLogin.addEventListener('click', () => window.location.hash = '#/login');
  // eslint-disable-next-line no-return-assign
  goSign.addEventListener('click', () => window.location.hash = '#/register');
};

const init = () => {
  changeView(window.location.hash);
  navigateHome();
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', init);
