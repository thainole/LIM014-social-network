export default () => {
  const view =`<h1> holaaaa </h1>
  <p>soy login</p> `;

const articleElem = document.createElement('article')
articleElem.innerHTML = view;
return articleElem;
}