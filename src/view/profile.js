import {
  createPost,
  navSlide,
  logOut,
  postTemplate,
  postFunctions,
  postLikes,
  createPostComments,
  readComments,
} from './timeline.js';
import { readAllPosts } from '../controller/firestore.js';

const viewProfile = (user) => {
  const view = `
  <article class="container-header">
    <h1 class="h1">Travelers</h1>
    <i class="fas fa-bars hamburger-menu"></i>
    <nav>
      <ul class="nav-links">
        <li><a class="links" href="#/timeline">Home</a></li>
        <li><a class="links" href="#/profile">Profile</a></li>
        <li id="logOut"><a class="links" href="#/">Log out</a></li>
      </ul>
    </nav>
  </article>
  <section class="profile-desktop">
    <article class="user-info profile">
      <img alt="userimage" src="${user.photo}">
      <h2 class="user-name profile-name">${user.name}</h2>
    </article>
    <div>
      <form id="form-createpost" class="create-post">
        <textarea id="description" class="input-post" cols="30" rows="10" placeholder="What's the new?"></textarea>
        <div class="error"></div>
        <div class="container-submit">
            <input type="file" id="uploadInput" accept="image/png, image/jpeg, image/jpg">
            <button id="button-publish" class="button-small">Publish</button>
        </div>
      </form>
      <article class="timeline-posts"></article>
    </div>
  </section>
  `;
  const articleElem = document.createElement('article');
  articleElem.innerHTML = '';
  articleElem.innerHTML = view;

  navSlide(articleElem);
  createPost(articleElem);
  logOut(articleElem);

  readAllPosts((post) => {
    const container = articleElem.querySelector('.timeline-posts');
    container.innerHTML = '';
    post.forEach((elem) => {
      if (elem.id === user.id) {
        const divElem = document.createElement('div');
        divElem.classList.add('individual-post');
        divElem.innerHTML = postTemplate(elem, user);
        postFunctions(divElem, elem);
        postLikes(divElem, elem, user);
        createPostComments(divElem);
        readComments(divElem, user);
        container.appendChild(divElem);
      }
    });
  });

  return articleElem;
};

export { viewProfile };
