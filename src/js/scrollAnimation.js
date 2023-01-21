export function renderAllSections() {
  const allSections = document.querySelectorAll(".scroll");
  function displaySection(entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
  }

  const observer = new IntersectionObserver(displaySection, {
    root: null,
    threshold: 0.10,
  });
  allSections.forEach(function (section) {
    observer.observe(section);
    section.classList.add("section--hidden");
  });
}
