document.addEventListener("DOMContentLoaded", () => {
  setupRouter();
  setupMobileMenu();
});

// Route configuration
const routes = {
  "/": {
    title: "Dashboard",
    heading: "Dashboard"
  },
  "/dashboard": {
    title: "Dashboard",
    heading: "Dashboard"
  },
  "/saved": {
    title: "Saved",
    heading: "Saved"
  },
  "/digest": {
    title: "Digest",
    heading: "Digest"
  },
  "/settings": {
    title: "Settings",
    heading: "Settings"
  },
  "/proof": {
    title: "Proof",
    heading: "Proof"
  }
};

// Router setup
function setupRouter() {
  const content = document.getElementById("app-content");
  const navLinks = document.querySelectorAll(".kn-nav__link");

  function renderPage(route) {
    // Normalize route: "/" maps to "/dashboard"
    const normalizedRoute = route === "/" || route === "/index.html" ? "/dashboard" : route;
    const routeConfig = routes[normalizedRoute] || routes["/dashboard"];
    document.title = `${routeConfig.title} - Job Notification Tracker`;

    const pageHTML = `
      <div class="kn-page-placeholder">
        <h1 class="kn-page-placeholder__heading">${routeConfig.heading}</h1>
        <p class="kn-page-placeholder__subtext">This section will be built in the next step.</p>
      </div>
    `;

    if (content) {
      content.innerHTML = pageHTML;
    }

    // Update active nav link
    navLinks.forEach((link) => {
      const linkRoute = link.getAttribute("data-route") || link.getAttribute("href");
      // Normalize link route for comparison
      const normalizedLinkRoute = linkRoute === "/" ? "/dashboard" : linkRoute;
      
      if (normalizedLinkRoute === normalizedRoute) {
        link.classList.add("kn-nav__link--active");
      } else {
        link.classList.remove("kn-nav__link--active");
      }
    });
  }

  function getCurrentRoute() {
    const path = window.location.pathname;
    return path === "/" || path === "/index.html" ? "/dashboard" : path;
  }

  // Handle initial load
  renderPage(getCurrentRoute());

  // Handle navigation clicks
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      let route = link.getAttribute("data-route") || link.getAttribute("href");
      // Normalize: if clicking dashboard link from root, use "/dashboard"
      if (route === "/" || !route) {
        route = "/dashboard";
      }
      window.history.pushState({}, "", route);
      renderPage(route);
      // Close mobile menu if open
      const toggle = document.querySelector(".kn-nav__toggle");
      const navList = document.querySelector(".kn-nav__list");
      if (toggle && navList) {
        toggle.setAttribute("aria-expanded", "false");
        navList.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Handle browser back/forward
  window.addEventListener("popstate", () => {
    renderPage(getCurrentRoute());
  });
}

// Mobile menu setup
function setupMobileMenu() {
  const toggle = document.querySelector(".kn-nav__toggle");
  const navList = document.querySelector(".kn-nav__list");

  if (!toggle || !navList) return;

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", !isExpanded);
    navList.setAttribute("aria-expanded", !isExpanded);
  });

  // Close menu when clicking outside (optional enhancement)
  document.addEventListener("click", (e) => {
    if (
      navList.getAttribute("aria-expanded") === "true" &&
      !toggle.contains(e.target) &&
      !navList.contains(e.target)
    ) {
      toggle.setAttribute("aria-expanded", "false");
      navList.setAttribute("aria-expanded", "false");
    }
  });
}

