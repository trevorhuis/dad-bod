import { Router } from "./services/Router";

window.addEventListener("DOMContentLoaded", (event) => {
  app.Router.init();
  navigator.serviceWorker.register("/sw.js");
});

window.app = {
  Router,
};
