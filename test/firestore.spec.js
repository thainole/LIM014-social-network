import MockFirebase from 'mock-cloud-firestore';

import {
  createNewPost, readAllPosts, updatePost, deletePost,
  updatLike, createComments, readAllComments, deleteComments,
} from '../src/controller/firestore.js';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        post001: {
          content: 'me gusta viajar',
          id: '001',
          name: 'Taylor',
          photo: '../img/icon.jpg',
          counterLikes: ['001'],
          date: '13 may. 2021 7:29 p. m.',
          orderDate: '20210413192948',
          postImgUrl: '../img/icon.jpg',
        },
        post002: {
          content: 'esta es una red social',
          id: '002',
          name: 'Thais',
          photo: '../img/icon.jpg',
          counterLikes: ['1312TS1988'],
          date: '12 may. 2021 7:29 p. m.',
          orderDate: '20210412192948',
          postImgUrl: '../img/icon.jpg',
        },
      },
    },
    comments: {
      __doc__: {
        comment001: {
          comment: 'Qué bonita foto',
          date: '17 may 2021 9:57 a. m',
          idCommentUser: '002',
          idpost: 'post002',
          nameComment: 'Thais',
          orderDate: '20210412192948',
          photoComment: '../img/icon.jpg',
        },
      },
    },
  },
};
global.firebase = new MockFirebase(fixtureData);

describe('addPost', () => {
  it('It should add a post', (done) => createNewPost('../img/icon.jpg', 'Taylor', '001', 'fearless', [], '')
    .then(() => readAllPosts(
      (data) => {
        const result = data.find((post) => post.content === 'fearless');
        expect(result.content).toBe('fearless');
        done();
      },
    )));
});
describe('updatePost', () => {
  it('It should update a post', (done) => updatePost('post001', 'Fearless Taylor`s version')
    .then(() => readAllPosts(
      (data) => {
        const result = data.find((post) => post.content === 'Fearless Taylor`s version');
        expect(result.content).toBe('Fearless Taylor`s version');
        done();
      },
    )));
});
describe('deletePost', () => {
  it('It should update a post', (done) => deletePost('post001')
    .then(() => readAllPosts(
      (data) => {
        const result = data.find((post) => post === 'post001');
        expect(result).toBe(undefined);
        done();
      },
    )));
});
describe('addLike', () => {
  it('It should update likes', (done) => updatLike('post002', '002')
    .then(() => readAllPosts(
      (data) => {
        const result = data.find((post) => post.counterLikes === '002');
        expect(result.counterLikes).toBe('002');
        done();
      },
    )));
});

describe('addComment', () => {
  it('It should add a comment', (done) => createComments('post002', '../img/icon.jpg', 'Thais', '002', 'fearless')
    .then(() => readAllComments(
      (data) => {
        const result = data.find((element) => element.comment === 'fearless');
        expect(result.comment).toBe('fearless');
        done();
      },
    )));
});
describe('deleteComment', () => {
  it('It should add a comment', (done) => deleteComments('comment001')
    .then(() => readAllComments(
      (data) => {
        const result = data.find((element) => element === 'comment001');
        expect(result).toBe(undefined);
        done();
      },
    )));
});

