import { displayMobileNav } from "./mobileNav.js";
import { scrollAnimation } from "./smoothScroll";
import { renderStickyNavbar } from "./stickyNav";
import { renderAllSections } from "./scrollAnimation";
import { renderCartDisplay, closeCartDisplay } from "./model.js";
import { addCart } from "./cart/addCart.js";
import { btnClearCart } from "./config.js";
import { clearCartItems } from "./cart/clearCart.js";

function init() {
  displayMobileNav();
  scrollAnimation();
  renderStickyNavbar();
  //renderAllSections();
  renderCartDisplay();
  closeCartDisplay();
  addCart();
}
init();

btnClearCart.addEventListener("click", function () {
  clearCartItems();
});
