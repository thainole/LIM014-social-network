// import { viewHeader, viewUser, viewCreatePost } from './components-timeline';

export default () => {
  const view = `
  <article class="container-header">
    <h1>Travelers</h1>
    <i class="fas fa-bars"></i>
    <nav class="hide">
    <ul>
        <li><a href="#/timeline">Home</a></li>
        <li><a href="#/profile">Profile</a></li>
        <li><a href="#/">Log out</a></li>
    </ul>
    </nav>
  </article>
  <article class="container-post">
      <div class="user-info">
        <img class="image-circle" alt="userimage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZBtF5fnm5knTM69pdtFzMJ8Wq4KqAyzxo-A&usqp=CAU">
        <h2 class="user-name">user</h2>
      </div>
  </article>
  <article class="create-post">
    <textarea name="post" class="input-post" cols="30" rows="10" placeholder=" What's the new? "></textarea>
    <div class="container-submit">
        <i class="far fa-image"></i>
        <button class="button-small">publish</button>
    </div>
  </article> 
  <section class="timeline-posts">
    <div class="user-infoGrey">
      <img class="image-circle"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZBtF5fnm5knTM69pdtFzMJ8Wq4KqAyzxo-A&usqp=CAU" alt="userimage">
      <h2 class="user-name">Yrem Vera</h2>
    </div>
    <article class="post-info-container">
      <div class="post-info">
        <p>diva regia empoderada patrona de mi destino lorem2Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae commodi distinctio natus est neque omnis beatae eligendi inventore magnam illum?</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZBtF5fnm5knTM69pdtFzMJ8Wq4KqAyzxo-A&usqp=CAU"
            alt="img" class="image-post">
      </div>
      <div class="container-submit">
          <i class="fas fa-star">5</i>
          <i class="fas fa-share-square"></i>
      </div>
    </article>
  </section>  
`;
  const articleElem = document.createElement('article');
  articleElem.innerHTML = view;
  return articleElem;
};
