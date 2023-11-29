class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
    <a href="#mainContent" class="skip-link" tabindex="0">Menuju ke konten</a>
    <div class="header">
      <h1>Gacha Yu-Gi-Oh! Apps</h1>
    </div>
    <nav id="drawer" class="nav-dekstop">
      <ul>
        <ol><a href="/#" tabindex="0">Home</a></ol>
        <ol><a href="/#/inventory" tabindex="0">Inventory</a></ol>
        <ol id="favoriteButton"><a href="/#/favorite" tabindex="0">Favorite</a></ol>
      </ul>
    </nav>
    <button id="menu" tabindex="0" aria-label="Hamburger Button">☰</button>
  </header>
    `;
  }
}

customElements.define('header-drawer', Header);
