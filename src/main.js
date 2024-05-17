import p5 from 'p5';
import { startCountdown } from './countdown.js';

function setupP5() {
  new p5((p) => {
    p.setup = () => {
      const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
      canvas.parent('app'); // Attach the canvas to the div#app
      p.background(200);
      p.noStroke();
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };

    p.draw = () => {
      // Your drawing code here
      p.background(242, 239, 223);
      p.fill(208, 217, 212);
      p.ellipse(p.mouseX, p.mouseY, 20, 20);
    };
  });
}

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
    });
}

// Event listeners
window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("nav a")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
