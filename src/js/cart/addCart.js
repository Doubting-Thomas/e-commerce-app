import { btnProducts } from "../config.js";
import { cart } from "../model.js";
import { cartInfo } from "../config.js";
import { cartTotal } from "./totalCart.js";

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

        cart.id = cartItemID.dataset.id;

        cartMarkup();
        cartTotal();
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
