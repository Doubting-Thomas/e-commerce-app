import { btnProducts, cartName } from "../config.js";
import RenderCart from "./renderCart";
import { cart } from "../model.js";
import { cartInfo } from "../config.js";
import { cartTotal } from "./totalCart.js";
import { cartCount, cartProductPrice, cartTotalPrice } from "../config";
import { cartItems } from "../config.js";
//class addProducts extends RenderCart {
//addHandlerRender() {
export function addCart() {
  btnProducts.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      if (e.target.classList.contains("btn--products")) {
        let imgSrc =
          e.target.parentElement.firstChild.nextElementSibling.firstChild
            .nextElementSibling.src;
        //console.log(imgSrc);

        // Get the position of the image
        let imgPath = imgSrc.slice(21);
        cart.image = imgPath;

        let cartItemName =
          e.target.parentElement.firstChild.nextElementSibling
            .nextElementSibling.nextElementSibling.textContent;
        //console.log(cartItemName);
        cart.name = cartItemName;

        let cartItemValue =
          e.target.parentElement.firstChild.nextElementSibling
            .nextElementSibling.nextElementSibling.nextElementSibling
            .textContent;

        let cartItemPrice = cartItemValue.slice(1).trim();
        cart.price = cartItemPrice;

        const markup = document.createElement("div");
        markup.classList.add("cart__items");

        markup.innerHTML = `
        <div class="cart__items">
            <img src="${cart.image}" class="cart__image" alt="cart-image" />
            <div>
              <h4 class="cart__title">${cart.name}</h4>
              <h5><span>$</span> <span class="cart__price">${cart.price}</span></h5>
              <span class="cart__delete">Delete</span>
            </div>
            <div>
              <i class="fas fa-chevron-up"></i>
              <p class="item-amount">1</p>
              <i class="fas fa-chevron-up"></i>
            </div>
          </div>
        `;
        //console.log(markup);
        //cartInfo.insertAdjacentHTML("afterbegin", markup);
        cartInfo.appendChild(markup);
        // Update the total count
        cartTotal();
      }
    });
  });
}
// const cartName = document.querySelectorAll(".cart__title");
// console.log(cartName);
// export function cartTotal() {
//   const cartValue = [];
//   const cartProductPrice = document.querySelectorAll(".cart__price");
//   //console.log(cartProductPrice);

//   cartProductPrice.forEach(function (price) {
//     //console.log(price.textContent);
//     cartValue.push(parseInt(price.textContent));
//     console.log(cartValue);

//     const cartTotalValue = cartValue.reduce(function (sum, product) {
//       sum += product;
//       return sum;
//     }, 0);
//     console.log(cartTotalValue);

//     cartTotalPrice.textContent = cartTotalValue;
//     cartCount.textContent = cartValue.length;
//   });
// }

// export function cartTotal() {
//   cartProductPrice.forEach(function (product) {
//     //cartValue.push(parseInt(product.textContent));
//     console.log(product);
//   });
// }
// cartTotal();

//export const addCartItem = new addProducts();
