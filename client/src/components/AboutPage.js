import { LitElement, css, html } from "lit";

export class AboutPage extends LitElement {
  static styles = css`
    h1 {
      color: green;
    }
  `;

  constructor() {
    super();
  }
  render() {
    return html`<h1>About Page</h1>`;
  }
}

customElements.define("about-page", AboutPage);
