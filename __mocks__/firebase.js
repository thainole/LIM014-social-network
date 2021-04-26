export default {

  auth: () => ({
    createUserWithEmailAndPassword: jest.fn(),
    signInWithPopup: jest.fn(),
    signInWithEmailAndPassword: jest.fn(),

  }),

};
