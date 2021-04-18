export default () => {
  const viewLogin = `<h1> holaaaa </h1>
  <p>soy login</p> `;

  const articleElem = document.createElement('article');
  articleElem.innerHTML = viewLogin;
  return articleElem;
};
