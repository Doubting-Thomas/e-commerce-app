import { btnProducts } from "../config.js";
import { items } from "../products";
import RenderCart from "./renderCart";
//import { markup } from "./renderCart";
import { cart, state, products } from "../model.js";
import { cartInfo } from "../config.js";
import { btnHero } from "../config.js";

class addProducts extends RenderCart {
  addHandlerRender() {
    btnProducts.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        if (e.target.classList.contains("btn--products")) {
          let imgSrc =
            e.target.parentElement.firstChild.nextElementSibling.firstChild
              .nextElementSibling.src;
          console.log(imgSrc);

          // Get the position of the image
          let imgPath = imgSrc.slice(21);
          cart.image = imgPath;

          let cartItemName =
            e.target.parentElement.firstChild.nextElementSibling
              .nextElementSibling.nextElementSibling.textContent;
          console.log(cartItemName);
          cart.name = cartItemName;

          let cartItemValue =
            e.target.parentElement.firstChild.nextElementSibling
              .nextElementSibling.nextElementSibling.nextElementSibling
              .textContent;

          let cartItemPrice = cartItemValue.slice(1).trim();
          cart.price = cartItemPrice;
        }

        let markup;
        markup = `
          <div class="cart__items u-margin-bottom-sm">
            <img src="${cart.image}" class="cart__image" alt="cart-image" />
            <div>
              <h4 class="cart__title">${cart.name}</h4>
              <h5 class="cart__price">${cart.price}</h5>
              <span class="cart__delete">Delete</span>
            </div>
            <div>
              <i class="fas fa-chevron-up"></i>
              <p class="item-amount">1</p>
              <i class="fas fa-chevron-up"></i>
            </div>
          </div>
        </div>
        `;
        console.log(markup);
        cartInfo.insertAdjacentHTML("afterbegin", markup);
        //}
      });
    });
  }
}
export const addCartItem = new addProducts();
