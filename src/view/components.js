import { viewHome } from './home.js';
import { viewLogIn } from './login.js';
import { viewRegister } from './register.js';
import { viewTimeline } from './timeline.js';
import { error404 } from './error404.js';

export default {
  home: viewHome,
  login: viewLogIn,
  register: viewRegister,
  timeline: viewTimeline,
  error404,
};
