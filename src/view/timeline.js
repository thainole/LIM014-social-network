// import { viewUsersPosts } from './components-timeline';
import { authStateChanged, userData, signOutAuth } from '../model/auth.js';
import { createNewPost, readAllPosts } from '../model/firestore.js';

const viewTimeline = () => {
  authStateChanged();
  const user = userData();
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
        <input type="text" id="description" class="input-post" cols="30" rows="10" placeholder="What's the new?"></input>
        <div class="container-submit">
            <i class="far fa-image"></i>
            <button id="button-publish" class="button-small">publish</button>
        </div>
      </form> 
      <article class="timeline-posts">
      </article>
    </div>
  </section>
`;
  const articleElem = document.createElement('article');
  articleElem.innerHTML = view;
  return articleElem;
};

const createPost = () => {
  const publish = document.getElementById('button-publish');
  const postForm = document.getElementById('form-createpost');
  const user = userData();

  publish.addEventListener('click', (e) => {
    e.preventDefault();
    const postContent = document.getElementById('description').value;
    console.log(user.name, user.id, postContent);
    createNewPost(user.photo, user.name, user.id, postContent)
      .then(() => postForm.reset())
      .catch((err) => console.log(err));
  });
};

const readPosts = () => {
  const allPosts = readAllPosts().then((res) => res);
  console.log(allPosts);
};

const logOut = () => {
  const goLogOut = document.getElementById('logOut');
  goLogOut.addEventListener('click', signOutAuth());
};

export {
  viewTimeline, logOut, createPost, readPosts,
};
