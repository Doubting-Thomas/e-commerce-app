import { displayMobileNav } from "./mobileNav";
import { scrollAnimation } from "./smoothScroll";
import { renderStickyNavbar } from "./stickyNav";
import { renderAllSections } from "./scrollAnimation";
import { renderCartDisplay, closeCartDisplay } from "./model";

function init() {
  displayMobileNav();
  scrollAnimation();
  renderStickyNavbar();
  renderAllSections();
  renderCartDisplay();
  closeCartDisplay();
}
init();
