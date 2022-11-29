class navBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
       
        `;
  }
}
//se define primero el nombre con el cual se va a ocupar en el html, despues el nombre de la clase
window.customElements.define("nav-bar", navBar);

