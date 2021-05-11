import {
  userData,
  signOutAuth,
} from '../controller/auth.js';
import {
  createNewPost,
  readAllPosts,
  updatePost,
  deletePost,
  updatLike,
} from '../controller/firestore.js';

const createPost = (elem) => {
  const publish = elem.querySelector('#button-publish');
  const postForm = elem.querySelector('#form-createpost');
  const user = userData();

  publish.addEventListener('click', (e) => {
    e.preventDefault();
    const postContent = elem.querySelector('#description').value;
    const elemDiv = elem.querySelector('.error');
    const userLike = false;
    if (postContent.charAt(0) === ' ' || postContent === '') {
      elemDiv.textContent = '⚠️You must fill the field before publishing.';
    } else {
      createNewPost(user.photo, user.name, user.id, postContent, userLike, 0)
        .then(() => {
          elemDiv.classList.add('hide');
          postForm.reset();
        })
        .catch((err) => console.log(err));
    }
  });
};

const navSlide = (elem) => {
  const burger = elem.querySelector('.hamburger-menu');
  const navElem = elem.querySelector('.nav-links');
  const links = elem.querySelectorAll('.links');

  const toggleFn = () => navElem.classList.toggle('nav-active');
  burger.addEventListener('click', toggleFn);
  links.forEach((link) => link.addEventListener('click', toggleFn));
};

const logOut = (elem) => {
  const goLogOut = elem.querySelector('#logOut');
  goLogOut.addEventListener('click', signOutAuth());
};

const viewTimeline = (user) => {
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

  readAllPosts((post) => { // cb(posts)
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
                  <i class="fas fa-ellipsis-h"></i>
                </button>
            </article>
          </section>
          <section class="post-info-container">
            <div class="post-info">
              <p id="${elem.idPost}" class="publishedText">${elem.content}</p>
              <section class="saveIcons">
                <span class="saveOrNot hide">¿Do you want to save changes?</span>
                <span idSaveIcon="${elem.idPost}" class="saveIcon hide"><i class="fas fa-check"></i></span>
                <span idSaveIcon1="${elem.idPost}" class="saveIcon1 hide"><i class="fas fa-times"></i></span>
              </section>  
            </div>
            <div class="container-submit">
              <div>
                <i class="${elem.userLike ? 'fas' : 'far'} fa-star"></i>
                <p>${elem.counterLikes ? elem.counterLikes : ''}</p>
              </div>  
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
          <li idpost="${elem.idPost}" class="edit-post">edit</li>
          <strong>|</strong>
          <li class="delete-post" >delete</li>
          </ul>`;
          container2.innerHTML = modal;
          containerList.appendChild(container2);
          container2.classList.toggle('hide');

          const deleteBtn = divElem.querySelector('.delete-post');
          deleteBtn.addEventListener('click', () => {
            const modalMenu = divElem.querySelector('.modal-menu');
            modalMenu.classList.add('hide');
            const newModal = `<ul class="delete-menu">
            <p>Remove post?</p>
            <div>
              <li id="yes">Yes</li>
              <strong>|</strong>
              <li id="no">No</li>
            </div>`;
            container2.innerHTML = '';
            container2.innerHTML = newModal;
            const yesBtn = divElem.querySelector('#yes');
            const noBtn = divElem.querySelector('#no');
            yesBtn.addEventListener('click', () => deletePost(elem.idPost)
              .then((res) => res)
              .catch((err) => console.error(err)));
            noBtn.addEventListener('click', () => container2.classList.add('hide'));
          });

          const editPostButton = divElem.querySelector('.edit-post');
          editPostButton.addEventListener('click', () => {
            const publishedText = divElem.querySelector('.publishedText');
            const saveEditPostIcon = divElem.querySelector('.saveIcon');
            const discardEditPostIcon = divElem.querySelector('.saveIcon1');
            const question = divElem.querySelector('.saveOrNot');
            publishedText.contentEditable = 'true';
            publishedText.focus();
            saveEditPostIcon.classList.remove('hide');
            discardEditPostIcon.classList.remove('hide');
            question.classList.remove('hide');
          });
          const saveEditPostIcon = divElem.querySelector('.saveIcon');
          const discardEditPostIcon = divElem.querySelector('.saveIcon1');

          saveEditPostIcon.addEventListener('click', () => {
            const publishedText = divElem.querySelector('.publishedText');
            const idPosts = editPostButton.getAttribute('idpost');
            const textPostEdited = publishedText.innerText.trim();
            if (textPostEdited !== '') {
              publishedText.contentEditable = 'false';
              const question = divElem.querySelector('.saveOrNot');
              saveEditPostIcon.classList.add('hide');
              discardEditPostIcon.classList.add('hide');
              container2.classList.toggle('hide');
              question.classList.add('hide');
              updatePost(idPosts, textPostEdited);
            }
          });
          discardEditPostIcon.addEventListener('click', () => {
            const publishedText = divElem.querySelector('.publishedText');
            const textPostEdited = publishedText.innerText.trim();
            if (textPostEdited !== '') {
              publishedText.contentEditable = 'false';
              const question = divElem.querySelector('.saveOrNot');
              saveEditPostIcon.classList.add('hide');
              discardEditPostIcon.classList.add('hide');
              container2.classList.toggle('hide');
              question.classList.add('hide');
              console.log(publishedText);
            }
          });
        });
      }
      const startLike = divElem.querySelector('.fa-star');
      startLike.addEventListener('click', () => {
        let like = elem.userLike;
        let counter = elem.counterLikes;
        if (!like) {
          /* console.log('entre al if', startLike.classList); */
          startLike.classList.replace('far', 'fas');
          like = true;
          counter += 1;
          updatLike(elem.idPost, like, counter);
        } else if (like) {
          startLike.classList.replace('fas', 'far');
          like = false;
          counter -= 1;
          updatLike(elem.idPost, like, counter);
        }
      });
      container.appendChild(divElem);
    });
  });

  return articleElem;
};

export { viewTimeline };
