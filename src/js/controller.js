import { displayMobileNav } from "./mobileNav.js";
import { scrollAnimation } from "./smoothScroll";
import { renderStickyNavbar } from "./stickyNav";
import { renderAllSections } from "./scrollAnimation";
import { renderCartDisplay, closeCartDisplay } from "./model.js";
import { displayCart } from "./cart/renderCart.js";

function init() {
  displayMobileNav();
  scrollAnimation();
  renderStickyNavbar();
  renderAllSections();
  renderCartDisplay();
  closeCartDisplay();
  //renderCart.renderProducts();
  displayCart.renderProducts();
}
init();
