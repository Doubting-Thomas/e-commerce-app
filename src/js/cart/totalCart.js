import {
  cartCount,
  //cartName,
  cartProductPrice,
  cartTotalPrice,
} from "../config";
import { cart, renderCartCount } from "../model.js";
import { addCart } from "./addCart";

//export const cartValue = [];
// cartPrice.forEach(function (price) {
//   price.slice(1).trim();
// });
//console.log(cartProductPrice);

//console.log(cartName);

// export function cartNames() {
//   const cartName = document.querySelectorAll(".cart__title");
//   console.log(cartName);

//   // cartName.forEach(function (name) {
//   //   console.log(name);
//   // });
// }
//cartNames();

// export function cartTotal() {
//   cartProductPrice.forEach(function (product) {
//     //cartValue.push(parseInt(product.textContent));
//     console.log(product);
//   });

//   const cartTotalValue = cartValue.reduce(function (sum, product) {
//     sum += product;
//     return sum;
//   }, 0);
//   console.log(cartTotalValue);

//   cartTotalPrice.textContent = cartTotalValue;
//   cartCount.textContent = cartValue.length;
//}

export function cartTotal() {
  const cartValue = [];
  const cartProductPrice = document.querySelectorAll(".cart__price");
  //console.log(cartProductPrice);

  cartProductPrice.forEach(function (price) {
    //console.log(price.textContent);
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
