import { userData, signOutAuth } from '../controller/auth.js';
import { createNewPost, readAllPosts } from '../controller/firestore.js';

const createPost = (elem) => {
  const publish = elem.querySelector('#button-publish');
  const postForm = elem.querySelector('#form-createpost');
  const user = userData();

  publish.addEventListener('click', (e) => {
    e.preventDefault();
    const postContent = elem.querySelector('#description').value;
    console.log(user.name, user.id, postContent);
    createNewPost(user.photo, user.name, user.id, postContent)
      .then(() => postForm.reset())
      .catch((err) => console.log(err));
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
    const container = document.querySelector('.timeline-posts');
    container.innerHTML = '';
    post.forEach((elem) => {
      container.innerHTML += `
      <div class="individual-post">
        <section class="user-infoGrey">
          <img class="image-circle" src=${elem.photo} alt="userimage">
          <h2 class="user-name">${elem.name}</h2>
          <h2 class="hide">${elem.id}</h2>
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
      </div>
  `;
    });
  });
  return articleElem;
};

export { viewTimeline };
