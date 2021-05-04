/* export const viewHeader = `
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
</article>`;

export const viewCreatePost = `
<form id="form-createpost" class="create-post">
  <input type="text" id="description" class="input-post" cols="30"
  rows="10" placeholder="What's the new?"></input>
  <div class="container-submit">
    <i class="far fa-image"></i>
    <button id="button-publish" class="button-small">publish</button>
  </div>
</form>
`; */

/* const viewUsersPosts = (post) => {
  const postContainer = [];
  post.forEach((elem) => postContainer.push(`<section class="user-infoGrey">
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
`));
  return postContainer.join();
};

export { viewUsersPosts }; */

// linea 29 hacer ternario para comprobar si es el mismo usuario con el current user
// si es así, agregar los 3 puntitos de editar/eliminar
// falta fecha !!!!!!!!
