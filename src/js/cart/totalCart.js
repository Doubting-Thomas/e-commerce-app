import {
  cartCount,
  cartTotalPrice,
} from "../config";
import { renderCartCount } from "../model.js";

export function cartTotal() {
  const cartValue = [];
  const cartProductPrice = document.querySelectorAll(".cart__price");

  cartProductPrice.forEach(function (price) {
    cartValue.push(parseInt(price.textContent));
    console.log(cartValue);

    const cartTotalValue = cartValue.reduce(function (sum, product) {
      sum += product;
      return sum;
    }, 0);
    console.log(cartTotalValue);

    // Display the total value in the cart container
    cartTotalPrice.textContent = cartTotalValue;
    cartCount.textContent = cartValue.length;
    renderCartCount();
  });
}
