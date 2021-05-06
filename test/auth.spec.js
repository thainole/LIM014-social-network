import {
  signUpAuth,
  logInAuth,
  signInGoogle,
  signOutAuth,
} from '../src/controller/auth.js';

// configurando firebase mock
const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
// const mockfirestore = new firebasemock.MockFirestore();
// mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
  // () => mockfirestore,
);

describe('Function logInAuth', () => {
  it('User should log in', () => logInAuth('yrem1@gmail.com', '123456')
    .then((user) => {
      expect(user.email).toBe('yrem1@gmail.com');
    }));
});
describe('Function signUpAuth', () => {
  it('User should log in', () => signUpAuth('yrem1@gmail.com', '123456')
    .then((user) => {
      expect(user.email).toBe('yrem1@gmail.com');
    }));
});
describe('Function signInGoogle', () => {
  it('User should log in with Google', () => {
    signInGoogle().then((user) => {
      expect(user.isAnonymus).toBe(false);
    });
  });
});
describe('Function signOut', () => {
  it('User should log out succesfully', () => {
    signOutAuth().then((user) => {
      expect(user).toBe(null);
    });
  });
});
