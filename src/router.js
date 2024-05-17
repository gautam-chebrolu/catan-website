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
      });
  }
  
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
  