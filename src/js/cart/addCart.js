import { btnProducts } from "../config.js";
import { items } from "../products";
import RenderCart from "./renderCart";
//import { markup } from "./renderCart";
import { cart, state, products } from "../model.js";
import { cartInfo } from "../config.js";
import { btnHero } from "../config.js";

// state.cart.img = items.name;
// console.log(state.cart.img);
// cart.name = items.id;
// console.log(cart.name);
//const btnyeah = document.querySelector(".btn--products");
//console.log(btnyeah);
console.log(btnHero);
// btnyeah.addEventListener("click", function (e) {
//   //e.preventDefault();
//   console.log("click");
// });

const btnintro = document.querySelector(".btn--intro");
btnintro.addEventListener("click", function (e) {
  //e.preventDefault();
  console.log("click");
});

// const btnProd = document.querySelector(".btn--prod");
// btnProd.addEventListener("click", function (e) {
//   //e.preventDefault();
//   console.log("click");
// });

// const btns = document.querySelectorAll(".btn--products");
// console.log(btns);

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     console.log(e.target);
//   });
// });
class addProducts extends RenderCart {
  //parentEl = document.querySelectorAll("");

  addHandlerRender() {
    console.log(cart);

    btnProducts.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        //for (let i = 0; i <= products.length; i++) {
        if (e.target.classList.contains("btn--products")) {
          let imgSrc =
            e.target.parentElement.firstChild.nextElementSibling.firstChild
              .nextElementSibling.src;
          console.log(imgSrc);

          // Get the position of the image
          let imgPath = imgSrc.slice(21);
          cart.image = imgPath;
          // let imgPos = imgSrc.indexOf("a");
          // let imgPath = imgSrc.slice(imgPos);
          // console.log(imgPath);

          // // const cartItem = {};
          // cartItem.img = imgPath;

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
          console.log(cartItemPrice);
        }
        //console.log(e.target.previousElementSibling);

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
    // btnyeah.addEventListener("click", function (e) {
    //   console.log("click");
    // });
  }
}
//export default addProducts;
export const addCartItem = new addProducts();
