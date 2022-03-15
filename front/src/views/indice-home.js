import { LitElement, html, css } from "lit";

import Base, { style } from "./Base.js";

class IndiceHome extends Base {
  static get styles() {
    return [style, css``];
  }

  static get properties() {
    return {
      indices: Array,
    };
  }

  constructor() {
    super();
    this.indices = [];
  }

  render() {
    return html`${this.indices.map(
      (indice) => html`<a href="#"> ${indice} </a> </br>`
    )}`;
  }
}

customElements.define("indice-home", IndiceHome);
