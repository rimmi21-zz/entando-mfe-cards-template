import ReactDOM from "react-dom";
import React from "react";
import App from "../App";

class cardsSection extends HTMLElement {
  connectedCallback() {
    this.mountPoint = document.createElement("span");
    this.render();
  }

  render() {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      this.appendChild(this.mountPoint)
    );
  }
}

customElements.get("cards-widget-app") ||
  customElements.define("cards-widget-app", cardsSection);
