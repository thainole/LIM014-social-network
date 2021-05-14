import MockFirebase from 'mock-cloud-firestore';

import { createNewPost, readAllPosts } from '../src/controller/firestore.js';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        post001: {
          content: 'me gusta viajar',
          id: '1312TS1989',
          name: 'Thais',
          photo: '../img/icon.jpg',
        },
        post002: {
          content: 'esta es una red social',
          id: '270420141D4L',
          name: 'Thais',
          photo: '../img/icon.jpg',
        },
      },
    },
  },
};
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
