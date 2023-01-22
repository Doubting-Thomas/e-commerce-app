// Functionality for revealing sections on scroll

export function renderAllSections() {
  const allSections = document.querySelectorAll(".scroll");
  function displaySection(entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  }

  const observer = new IntersectionObserver(displaySection, {
    root: null,
    threshold: 0.1,
  });
  allSections.forEach(function (section) {
    observer.observe(section);
    section.classList.add("section--hidden");
  });
}
