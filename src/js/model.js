import { cartDisplay, cartContainer, closeCart, navCartIcon } from "./config";
// Functionality for the cart pop-up
export function renderCartDisplay() {
  navCartIcon.addEventListener("click", function () {
    cartDisplay.classList.toggle("transparent");
    cartContainer.classList.toggle("reveal");
    console.log("togglers");
  });
}

export function closeCartDisplay() {
  closeCart.addEventListener("click", function () {
    cartDisplay.classList.remove("transparent");
    cartContainer.classList.remove("reveal");
  });
}
