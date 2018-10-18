class Notifications extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {}

  attributeChangedCallback(name, oldValue, newValue) {}

  render() {
    this.innerHTML = `<h1>Notifications biatch</h1>`;
  }
}

window.customElements.define("kmd-notifications", Notifications);
