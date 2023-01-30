import { displayMobileNav } from "./mobileNav.js";
import { scrollAnimation } from "./smoothScroll";
import { renderStickyNavbar } from "./stickyNav";
import { renderAllSections } from "./scrollAnimation";
import { renderCartDisplay, closeCartDisplay } from "./model.js";
import { displayCart } from "./cart/renderCart.js";
import { addCart } from "./cart/addCart.js";
import RenderCart from "./cart/renderCart.js";

function init() {
  displayMobileNav();
  scrollAnimation();
  renderStickyNavbar();
  renderAllSections();
  renderCartDisplay();
  closeCartDisplay();
  displayCart.renderProducts();
  //addCart.addProduct();
  addCart.addProduct();
  //addBag.renderProducts()
  //displayCart.addCarts();
  //const displayCart = new RenderCart();
  //displayCart.renderProducts();

  //renderCart.renderProducts();
  //displayCart.renderProducts();
}
init();
