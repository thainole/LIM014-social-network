/* eslint-disable prefer-promise-reject-errors */
import { signUpAuth, logInAuth, signInGoogle } from '../src/model/auth.js';
import firebase from '../__mocks__/firebase.js';

// jest.mock('firebase');

global.firebase = firebase;

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof signUpAuth).toBe('function');
  });
  it('User should sign up with email and password', () => {
    console.log('2', firebase.auth().createUserWithEmailAndPassword());
    firebase.auth().createUserWithEmailAndPassword().mockImplementation(() => Promise.resolve({}));

    signUpAuth('email', 'password').then((result) => {
      expect(result).toBeDefined();
    });
  });
  it('Error of sign up with email and password', () => {
    const er = {
      errorCode: 'auth/wrong-password',
      errorMessage: 'The password is invalid or the user does not have a password.',
    };
    firebase.auth().createUserWithEmailAndPassword().mockImplementation(() => Promise.reject(er));
    signUpAuth('email', 'password').then((result) => {
      expect(result).toBe(er);
    });
  });
});

describe('logInAuth', () => {
  it('User should sign In with email and password', () => {
    expect(typeof logInAuth).toBe('function');
  });
  it('User should sign in with email and password', () => {
    logInAuth('email', 'password').then((result) => {
      expect(typeof result).toBe('object');
    });
  });
});

describe('signInGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof signInGoogle).toBe('function');
  });
  it('User should sign in with google', () => {
    signInGoogle().then((result) => {
      expect(typeof result).toBe('object');
    });
  });
});
