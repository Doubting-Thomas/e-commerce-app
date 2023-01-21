import { displayMobileNav } from "./mobileNav";
import { scrollAnimation } from "./smoothScroll";
import { renderStickyNavbar } from "./stickyNav";

function init() {
  displayMobileNav();
  scrollAnimation();
  renderStickyNavbar();
}
init();
