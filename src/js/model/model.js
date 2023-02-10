import { cartDisplay, cartContainer, closeCart, navCartIcon } from "../config";
import { updateCartView } from "./cart/updateCart";

export let cart = JSON.parse(localStorage.getItem("Cart")) || [];
updateCartView();

// Functionality for the cart container pop-up
export function renderCartDisplay() {
  navCartIcon.addEventListener("click", function () {
    cartDisplay.classList.toggle("transparent");
    cartContainer.classList.toggle("reveal");
  });
}

export function closeCartDisplay() {
  closeCart.addEventListener("click", function () {
    cartDisplay.classList.remove("transparent");
    cartContainer.classList.remove("reveal");
  });
}

// Functionality to display cart number when adding items to cart
// export function renderCartCount() {
//   cartCount.classList.remove("hidden");
// }

// export function hideCartCount() {
//   cartCount.classList.add('hidden')
// }
