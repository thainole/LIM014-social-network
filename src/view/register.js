export default () => {
  const viewRegister = `<h1> holaaaa </h1>
  <p>soy el register</p> `;

  const articleElem = document.createElement('article');
  articleElem.innerHTML = viewRegister;
  return articleElem;
};
