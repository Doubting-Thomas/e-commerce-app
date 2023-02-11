import { cartInfo } from "../config";
import { cart } from "../model/model";
import { addCartProducts } from "../model/cart/addCart.js";
import { updateUnits } from "../model/cart/totalCart.js";
import { removeCartProducts } from "../model/cart/removeCart.js";

// Assign the function to the window to use the onclick function
window.addCartProducts = addCartProducts;
window.updateUnits = updateUnits;
window.removeCartProducts = removeCartProducts;

export function cartMarkup() {
  cartInfo.innerHTML = "";
  cart.forEach((product) => {
    cartInfo.innerHTML += `
        <div class="cart__items u-margin-bottom-sm">
            <img src="${product.image}" class="cart__image" alt="cart-image" />
            <div>
              <h4 class="cart__title">${product.name}</h4>
              <h5><span>$</span> <span class="cart__price">${product.price}</span></h5>
              <span class="cart__delete" onclick="removeCartProducts(${product.id})">Delete</span>
            </div>
            <div>
              <button class="nav__btn btn-cart-close" onclick="updateUnits('increase', ${product.id})">
                <span class="cart__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"/></svg>
                </span>
              </button>
              <div class="cart__amount">${product.units}</div>
              <button class="nav__btn btn-cart-close" onclick="updateUnits('decrease', ${product.id})">
                <span class="cart__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                </span>
              </button>
            </div>
          </div>
        `;
  });
}
