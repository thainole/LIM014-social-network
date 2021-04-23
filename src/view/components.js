import { viewHome, initHome } from './home.js';
import Login from './login.js';
import { viewRegister, signUp } from './register.js';
import Timeline from './timeline.js';

const components = {
  home: {
    view: viewHome,
    init: initHome,
  },
  login: Login,
  register: {
    view: viewRegister,
    signUp,
  },
  timeline: Timeline,

};
export { components };
