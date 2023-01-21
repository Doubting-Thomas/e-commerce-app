import { displayMobileNav } from "./mobileNav";
import { scrollAnimation } from "./smoothScroll";
import { renderStickyNavbar } from "./stickyNav";
import { renderAllSections } from "./scrollAnimation";

function init() {
  displayMobileNav();
  scrollAnimation();
  renderStickyNavbar();
  renderAllSections();
}
init();
