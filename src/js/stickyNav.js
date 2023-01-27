import { navContainer } from "./config";

// Functionality for a sticky navigation bar
export function renderStickyNavbar() {
  const sectionHero = document.querySelector(".hero");
  const navbarHeight = navContainer.getBoundingClientRect().height;
  const observer = new IntersectionObserver(
    function (entries) {
      // Destructuring to get the first value
      const [entry] = entries;

      entry.isIntersecting
        ? navContainer.classList.remove("sticky")
        : navContainer.classList.add("sticky");
    },
    {
      root: null,
      threshold: 0,
      rootMargin: `${navbarHeight}px`,
    }
  );
  observer.observe(sectionHero);
}
