import { viewHome, initHome } from './home.js';
import { viewLogIn, logIn, signInWithGoogle } from './login.js';
import { viewRegister, signUp, signUpWithGoogle } from './register.js';
import { viewTimeline, logOut } from './timeline.js';

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
    signUpWithGoogle,
  },
  timeline: {
    view: viewTimeline,
    logOut,
  },
};
export { components };
