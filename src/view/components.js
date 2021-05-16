import { viewHome } from './home.js';
import { viewLogIn } from './login.js';
import { viewRegister } from './register.js';
import { viewTimeline } from './timeline.js';
import { viewProfile } from './profile.js';
import { view404 } from './404.js';

export default {
  home: viewHome,
  login: viewLogIn,
  register: viewRegister,
  timeline: viewTimeline,
  profile: viewProfile,
  page404: view404,
};
