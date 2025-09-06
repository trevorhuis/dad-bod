import { LitElement, html, css } from "lit";

export class HomePage extends LitElement {
  static styles = css`
    h1 {
      color: red;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`<h1>Home Page</h1>`;
  }
}

customElements.define("home-page", HomePage);
