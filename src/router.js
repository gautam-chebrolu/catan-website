import { setupP5 } from './main.js';
import { startCountdown } from './countdown.js';
import { setupP5_bios } from './bios_sketch.js';

// Router
function navigateTo(url) {
    history.pushState(null, null, url);
    router();
  }
  
  function router() {
    const routes = {
      "/": "/index.html",
      "/bios": "/bios.html",
    };
  
    const path = window.location.pathname;
    const route = routes[path] || "/index.html";
  
    fetch(route)
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("app").innerHTML = html;
        window.scrollTo(0, 0);
        if (path === '/') {
          setupP5();
          startCountdown();
        }
        if (path === '/bios') {
          setupP5_bios();
        }
      });
  }
  
// Event listeners
window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("nav a")) {
      e.preventDefault();
      const url = e.target.href;
      if (url.startsWith(window.location.origin)) {
        navigateTo(url);
      } else {
        window.open(url, "_blank");
      }
    }
  });
  router();
});

export { navigateTo, router };
