//import { cart } from "../model";
import { cartInfo } from "../config";
import { cart } from "../model/model";
import { addCartProducts } from "../model/cart/addCart.js";
import { updateUnits } from "../model/cart/totalCart.js";
import { removeCartProducts } from "../model/cart/removeCart.js";
//../../views/productsView

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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path
                      d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
                    />
                  </svg>
                </span>
              </button>
              <div class="cart__amount">${product.units}</div>
              <button class="nav__btn btn-cart-close" onclick="updateUnits('decrease', ${product.id})">
                <span class="cart__icon">
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
  });
}
