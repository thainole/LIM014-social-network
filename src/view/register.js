export default () => {
  const viewRegister = `<h2> holaaaa </h2>
  <p>soy el register</p> `;

  const articleElem = document.createElement('article');
  articleElem.innerHTML = viewRegister;
  return articleElem;
};
