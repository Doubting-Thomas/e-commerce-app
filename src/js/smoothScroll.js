import { navContainer, pageLinks } from "./config";

// Functionality for smooth scrolling
export function scrollAnimation() {
  pageLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const href = link.getAttribute("href");

      if (href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({
          behavior: "smooth",
        });
      }

      // Close menu navigation
      link.classList.contains("nav__link")
        ? navContainer.classList.toggle("nav__open")
        : [];
    });
  });
}
