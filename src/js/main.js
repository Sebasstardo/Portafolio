class navBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <nav>
            <ul>
                <li><a href="./index.html">Inicio</a></li>
                <li><a href="./portafolio.html">Portafolio</a></li>
                <li><a href="./skills.html">Skills</a></li>                
                <li><a href="">Estudio</a></li>
                <li><a href="">Contacto</a></li>
            </ul>  
        </nav>     
        `;
  }
}
//se define primero el nombre con el cual se va a ocupar en el html, despues el nombre de la clase
window.customElements.define("nav-bar", navBar);
