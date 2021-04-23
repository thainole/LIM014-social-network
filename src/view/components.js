import { viewHome, initHome } from './home.js';
import { viewLogIn, logIn, signInWithGoogle } from './login.js';
import { viewRegister, signUp } from './register.js';
import Timeline from './timeline.js';

const components = {
  home: {
    view: viewHome,
    init: initHome,
  },
  login: {
    view: viewLogIn,
    logIn,
    signInWithGoogle,

  },
  register: {
    view: viewRegister,
    signUp,
  },
  timeline: Timeline,

};
export { components };
