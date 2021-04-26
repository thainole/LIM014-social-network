export default () => {
  const viewTime = `
  <section class="container-header">
    <h1>Travelers</h1>
    <i class="fas fa-bars"></i>
    <nav class="nav">
      <ul>
        <li><a href="#/timeline">Home</a></li>
        <li><a href="#/profile">Profile</a></li>
        <li><a href="#/">Log out</a></li>
      </ul>
    </nav>
  </section>  
  <section class="container-timeline">
    <article>Perfil del usuario</article>
    <article>esto es el lado de los post
      <div>

      </div>
    </article>
  </section>
  `;

  const articleElem = document.createElement('article');
  articleElem.innerHTML = viewTime;
  return articleElem;
};
