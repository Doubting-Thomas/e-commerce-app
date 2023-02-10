import { displayMobileNav } from "./model/mobileNav.js";
import { scrollAnimation } from "./model/smoothScroll";
import { renderStickyNavbar } from "./model/stickyNav";
import { renderAllSections } from "./model/scrollAnimation";
import { renderCartDisplay, closeCartDisplay } from "./model/model.js";
import { btnClearCart } from "./config.js";
import { renderProducts } from "./views/productsView.js";
import { clearCartItems } from "./model/cart/clearCart.js";

function init() {
  displayMobileNav();
  scrollAnimation();
  renderStickyNavbar();
  //renderAllSections();
  renderCartDisplay();
  closeCartDisplay();
  //addCart();
  renderProducts();
}
init();

btnClearCart.addEventListener("click", function () {
  clearCartItems();
});
