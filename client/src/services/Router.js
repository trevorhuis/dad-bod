import { HomePage } from "../components/HomePage";
import { AboutPage } from "../components/AboutPage";

export const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
];

export const Router = {
  init: function init() {
    window.addEventListener("popstate", () => {
      Router.go(location.pathname, false);
    });
    // Enhance current links in the document
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        const href = a.getAttribute("href");
        Router.go(href);
      });
    });

    // Go to the initial route
    Router.go(location.pathname + location.search);
  },
  go: (route, addToHistory = true) => {
    if (addToHistory) {
      history.pushState(null, "", route);
    }
    let pageElement = null;

    for (const r of routes) {
      if (r.path === route) {
        pageElement = new r.component();
      }
    }

    if (pageElement == null) {
      pageElement = document.createElement("h1");
      pageElement.textContent = "Page not found";
    }

    function updatePage() {
      document.querySelector("main").innerHTML = "";
      document.querySelector("main").appendChild(pageElement);
    }
    updatePage();
  },
};
