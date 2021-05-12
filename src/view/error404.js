const error404 = () => {
  const view = `
  <section>
  <h1>OOPS, 404 NOT FOUND!</h1>
  </section> `;

  const articleElem = document.createElement('article');
  articleElem.classList.add('wraper');
  articleElem.innerHTML = view;
  return articleElem;
};
export { error404 };
