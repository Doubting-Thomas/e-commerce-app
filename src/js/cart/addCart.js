import { btnClearCart, btnProducts, cartDelete, cartName } from "../config.js";
import RenderCart from "./renderCart";
import { cart } from "../model.js";
import { cartInfo } from "../config.js";
import { cartTotal } from "./totalCart.js";
import { cartCount, cartProductPrice, cartTotalPrice } from "../config";
import { cartItems } from "../config.js";
import { removeCartItems } from "./removeCart.js";
import { clearCartItems } from "./clearCart.js";
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

        let cartItemID =
          e.target.parentElement.firstChild.nextElementSibling
            .nextElementSibling.nextElementSibling.nextElementSibling
            .nextElementSibling;

        //cart.id = cartItemID;
        cart.id = cartItemID.dataset.id;

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
        console.log(cart.id);
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
              <span class="cart__delete" data-id=${cart.id}>Delete</span>
            </div>
            <div>
              <button class="nav__btn btn-cart-close">
                <span class="cart__icon" data-id="${cart.id}">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path
                      d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
                    />
                  </svg>
                </span>
              </button>
              <p class="item-amount">1</p>
              <button class="nav__btn btn-cart-close">
                <span class="cart__icon" data-id="${cart.id}">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path
                      d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
                    />
                  </svg>
                </span>
              </button>
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

// export function removeCart(id) {
//   cart.filter(function (product) {
//     product.id !== id;
//   });
// }
//removeCart();

// clearCart() {
//   // Get the ids of the items in the cart
//   let cartItems = cart.map((item) => item.id);
//   // Loop over the items
//   cartItems.forEach((id) => this.removeItem(id));

//   // Remove all items at once
//   while (cartContent.children.length > 0) {
//     cartContent.removeChild(cartContent.children[0]);
//   }
// }

// export function clearCartItems() {
//   let items = cart.map(function (item) {
//     item.id;
//   });

//   items.forEach(function (id) {
//     removeCart(id);
//   });

//   while (cartInfo.children.length > 0) {
//     cartInfo.removeChild(cartInfo.children[0]);
//   }
// }

btnClearCart.addEventListener("click", function () {
  clearCartItems();
  //console.log("cleared");
});

// Select cartclear and use event bubbling on cart-content
// Also to reduce or decrease items in the cart
// cartContent.addEventListener("click", (event) => {
//   // Remove item from the cart list
//   if (event.target.classList.contains("remove-item")) {
//     let removeItem = event.target;
//     let id = removeItem.dataset.id;
//     this.removeItem(id);
//     // Remove it from the DOM as well
//     cartContent.removeChild(parentElement.parentElement);
//   }

cartInfo.addEventListener("click", function (event) {
  if (event.target.classList.contains("cart__delete")) {
    let deleteItem = event.target;
    console.log(deleteItem);
    let id = deleteItem.dataset.id;
    console.log(id);
    removeCartItems(id);

    cartInfo.removeChild(cartInfo.firstElementChild);
  }
});
