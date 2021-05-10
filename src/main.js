import { changeView } from './router.js';

const init = () => {
  if (window.location.hash === '') {
    window.location.hash = '#/';
  }
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', init);
