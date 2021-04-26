// importamos la funcion que vamos a testear
import { signUpAuth, logInAuth, signInGoogle } from '../src/model/auth.js';
import firebase from '../__mocks__/firebase.js';

jest.mock('firebase');

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof signUpAuth).toBe('function');
  });
  it('User should sign up with email and password', () => {
    
    signUpAuth('email', 'password').then((result) => {
      expect(typeof result).toBe('object');
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
