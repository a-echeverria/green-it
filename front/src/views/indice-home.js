import { LitElement, html, css } from "lit";
import IndiceApi from "../api/indice";

import Base, { style } from "./Base.js";

class IndiceHome extends Base {
  static get styles() {
    return [style, css``];
  }

  static get properties() {
    return {
      indice: Object,
      searchHandler: Function,
    };
  }

  constructor() {
    super();
    this.indice = {};
    this.searchHandler = async () => {
      const value = this.inputEl.value;
      const req = await IndiceApi.get({ name: value });
      this.indice = req.data;
    };
  }

  get inputEl() {
    return this.shadowRoot.getElementById("search");
  }

  render() {
    return html`
      <div class="container">
        <p>Qu'est-ce que l'illectronisme ?</p>
        <p>
          Contrairement à ce que le terme peut laisser penser, l’illectronisme
          ne désigne pas seulement les personnes totalement incapables de se
          servir d’un ordinateur. Les synonymes « inhabileté numérique »,
          « illettrisme numérique » et « illettrisme électronique » nuancent la
          définition de l’illectronisme en tant que difficulté pour accéder aux
          ressources électroniques et pour s’en servir.
        </p>
        <p>Qu'est-ce que la fragilité numérique ?</p>
        <p>
          L’indice de fragilité numérique révèle les territoires où la
          population est le plus à risque d’exclusion. De nombreux facteurs sont
          à l’origine de l’exclusion numérique. Ils sont regroupés en quatre
          axes qui constituent les principales causes de l’exclusion numérique.
          Au sein de chaque axe, on retrouve plusieurs variables utilisées pour
          le calcul.
        </p>
        <div>
          <p>Rechercher par nom de commune !</p>
          <p><i>(Le nom de la commune doit être complet, e.g Paris 13e arrondissement, Poitiers...)</i></p>
          <input type="text" id="search">
          <button @click="${this.searchHandler}"">Rechercher</button>
          <div>
            ${
              !this.indice
                ? "La ville n'a pas été trouvée"
                : html` <ul>
                    <li>Commune: ${this.indice.commune}</li>
                    <li>Département: ${this.indice.departement}</li>
                    <li>Région: ${this.indice.region}</li>
                    <li>Score de la commune: ${this.indice.score_com}</li>
                    <li>Score du département: ${this.indice.score_dep}</li>
                    <li>Score de la Région: ${this.indice.score_reg}</li>
                  </ul>`
            }
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("indice-home", IndiceHome);