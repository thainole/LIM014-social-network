import { userData, signOutAuth } from '../controller/auth.js';
import { createNewPost, readAllPosts } from '../controller/firestore.js';

const createPost = (elem) => {
  const publish = elem.querySelector('#button-publish');
  const postForm = elem.querySelector('#form-createpost');
  const user = userData();

  publish.addEventListener('click', (e) => {
    e.preventDefault();
    const postContent = elem.querySelector('#description').value;
    const elemDiv = elem.querySelector('.error');
    if (postContent.charAt(0) === ' ' || postContent === '') {
      elemDiv.textContent = '⚠️You must fill the field before publishing.';
    } else {
      createNewPost(user.photo, user.name, user.id, postContent)
        .then(() => {
          elemDiv.classList.add('hide');
          postForm.reset();
        })
        .catch((err) => console.log(err));
    }
  });
};

const logOut = (elem) => {
  const goLogOut = elem.querySelector('#logOut');
  goLogOut.addEventListener('click', signOutAuth());
};
const viewTimeline = (user) => {
  const view = `
  <article class="container-header">
    <h1>Travelers</h1>
    <i class="fas fa-bars"></i>
    <nav>
      <ul>
        <li><a href="#/timeline">Home</a></li>
        <li><a href="#/profile">Profile</a></li>
        <li id="logOut"><a href="#/">Log out</a></li>
    </ul>
    </nav>
  </article>
  <section class="container-timelineDesktop">
    <article class="user-info">
      <img class="image-circle" alt="userimage" src="${user.photo}">
      <h2 class="user-name">${user.name}</h2>
    </article>
    <div>
      <form id="form-createpost" class="create-post">
        <textarea id="description" class="input-post" cols="30" rows="10" placeholder="What's the new?"></textarea>
        <div class="error"></div>
        <div class="container-submit">
            <i class="far fa-image"></i>
            <button id="button-publish" class="button-small">publish</button>
        </div>
      </form>
      <article class="timeline-posts"></article>
    </div>
  </section>
`;
  const articleElem = document.createElement('article');
  articleElem.innerHTML = '';
  articleElem.innerHTML = view;

  createPost(articleElem);
  logOut(articleElem);

  readAllPosts((post) => {
    const container = articleElem.querySelector('.timeline-posts');
    container.innerHTML = '';
    post.forEach((elem) => {
      const divElem = document.createElement('div');
      divElem.classList.add('individual-post');
      divElem.innerHTML = `
          <section class="user-headGrey">
            <article class="user-infoG">
              <img class="image-circle" src=${elem.photo} alt="userimage">
              <div>
              <h2 class="user-name">${elem.name}</h2>
              <p>${elem.date}</p>
              </div>
            </article>
            <article class="userSelect" >
                <button class="buttonMenu ${elem.id === user.id ? 'show' : 'hide'}">
                <i class="fas fa-ellipsis-h"></i></button>
            </article>
          </section>
          <section class="post-info-container">
            <div class="post-info">
              <p>${elem.content}</p>
            </div>
            <div class="container-submit">
              <i class="fas fa-star">5</i>
              <i class="fas fa-share-square"></i>
            </div>
          </section>

  `;
      if (elem.id === user.id) {
        const menuPost = divElem.querySelector('.show');
        const containerList = divElem.querySelector('.userSelect');
        const container2 = document.createElement('div');
        container2.classList.add('hide');
        menuPost.addEventListener('click', (e) => {
          e.preventDefault();
          const modal = `<ul class="modal-menu">
          <li class="edit-post">edit</li>
          <li class="delete-post" >delete</li>
          </ul>`;
          container2.innerHTML = modal;
          containerList.appendChild(container2);
          container2.classList.toggle('hide');
        });
      }
      container.appendChild(divElem);
    });
  });

  return articleElem;
};

export { viewTimeline };
