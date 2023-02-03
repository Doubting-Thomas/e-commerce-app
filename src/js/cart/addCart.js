import { btnClearCart, btnProducts, cartDelete, cartName } from "../config.js";
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

        // Get the position of the image
        let imgPath = imgSrc.slice(21);
        cart.image = imgPath;

        let cartItemName =
          e.target.parentElement.firstChild.nextElementSibling
            .nextElementSibling.nextElementSibling.textContent;
        cart.name = cartItemName;

        let cartItemValue =
          e.target.parentElement.firstChild.nextElementSibling
            .nextElementSibling.nextElementSibling.nextElementSibling
            .textContent;

        let cartItemPrice = cartItemValue.slice(1).trim();
        cart.price = cartItemPrice;

        // const markup = document.createElement("div");
        // markup.classList.add("cart__items");

        // markup.innerHTML = `
        // <div class="cart__items">
        //     <img src="${cart.image}" class="cart__image" alt="cart-image" />
        //     <div>
        //       <h4 class="cart__title">${cart.name}</h4>
        //       <h5><span>$</span> <span class="cart__price">${cart.price}</span></h5>
        //       <span class="cart__delete">Delete</span>
        //     </div>
        //     <div>
        //       <i class="fas fa-chevron-up"></i>
        //       <p class="item-amount">1</p>
        //       <i class="fas fa-chevron-up"></i>
        //     </div>
        //   </div>
        // `;

        // cartInfo.appendChild(markup);
        cartMarkup();
        // Update the total count
        cartTotal();
        //clearCart();
      }
    });
  });
}

export function cartMarkup() {
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

  cartInfo.appendChild(markup);
}

// export function clearCart() {
//   //indexcarts = cart;
//   //console.log(indexcarts.name);

//   // Get the ids of the items in the cart
//   let cartItems = cart.map((item) => item.price);
//   // Loop over the items
//   cartItems.forEach((price) => removeCart(price));

//   // cartInfo.children.length > 0
//   //   ? cartInfo.removeChild(cartInfo.children[0])
//   //   : [];

//   //cartInfo.children.length <= 0 ? (cartTotalPrice.textContent = "") : [];
// }

//export function clearCartHandler() {
// btnClearCart.addEventListener("click", function () {
//   clearCart();
// });
// //}

// export function removeCart() {
//   cart.forEach(function (item) {
//     //item.price !== price;
//     console.log(item.price);
//   });
//   // Update the values as you delete
//   //cartTotal();
// }
//removeCart();
