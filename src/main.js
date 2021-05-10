import { changeView } from './router.js';

const init = () => {
  console.log('iniciando');
  if (window.location.hash === '') {
    window.location.hash = '#/';
    console.log('hash');
  }
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', init);
