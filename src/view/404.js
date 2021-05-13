const view404 = () => {
  const view = `
  <section class="wraper pad">
    <article class="page-404 container">
      <h1>Oops...</h1>
      <img src="../img/404.gif" alt="404-gif">
      <h2>Looks like the page you searched for is in another destination!</h2>
      <h3>To go back to the main page, please click the button below </h3>
      <button class="button">Home</button>
    </article>
  </section>`;

  const articleElem = document.createElement('article');
  articleElem.innerHTML = '';
  articleElem.innerHTML = view;

  const goHome = articleElem.querySelector('.button');
  // eslint-disable-next-line no-return-assign
  goHome.addEventListener('click', () => window.location.hash = '#/');

  return articleElem;
};

export { view404 };
