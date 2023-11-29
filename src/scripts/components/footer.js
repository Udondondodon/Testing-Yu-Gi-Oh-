class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
        <p>Copyright © 2023 - Yu-Gi-Oh! Cards</p>
    </footer>
  `;
  }
}

customElements.define('footer-element', Footer);
