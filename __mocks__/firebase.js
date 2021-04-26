export default {
  auth: () => ({
    createUserWithEmailAndPassword: (email, password) => Promise.resolve({user: })
    signInWithPopup: () => jest.fn(),
    signInWithEmailAndPassword: () => jest.fn(),
  }),
};
