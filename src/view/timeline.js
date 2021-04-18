export default () => {
  const viewTime = `<h1> holaaaa </h1>
  <p>soy para chismear</p> `;

  const articleElem = document.createElement('article');
  articleElem.innerHTML = viewTime;
  return articleElem;
};
