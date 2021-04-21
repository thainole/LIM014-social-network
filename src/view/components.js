import { viewHome, initHome } from './home.js';
import Login from './login.js';
import Register from './register.js';
import Timeline from './timeline.js';

const components = {
  home: {
    view: viewHome,
    init: initHome,
  },
  login: Login,
  register: Register,
  timeline: Timeline,

};
export { components };
