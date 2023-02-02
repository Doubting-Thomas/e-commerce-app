import {
  cartCount,
  //cartName,
  cartProductPrice,
  cartTotalPrice,
} from "../config";
import { cart, renderCartCount } from "../model.js";
import { addCart } from "./addCart";

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
