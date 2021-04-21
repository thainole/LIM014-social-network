import Home, { init as HomeInit } from './home.js';
import Login from './login.js';
import Register from './register.js';
import Timeline from './timeline.js';

const components = {
  home2: {
    view: Home,
    init: HomeInit,
  },
  home: Home,
  login: Login,
  register: Register,
  timeline: Timeline,

};
export { components };
