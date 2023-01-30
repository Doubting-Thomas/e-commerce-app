import { items } from "../products";
import { productsMarkup } from "../config";

export let markup = "";
// Display all products in the app
export default class RenderCart {
  renderProducts() {
    console.log(items);
    // let markup = "";

    items.forEach(function (item) {
      markup += `
      <div class="products__box">
        <div class="products__image u-margin-bottom-sm">
          <img
            src="${item.image}"
            alt="products-image"
            class="products__img"
          />
      </div>

      <div class="products__bookmark u-margin-bottom-md">
        <button class="products__btn">
          <span class="products__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 336 54V452z"/></svg>
          </span>
        </button>
      </div>

      <h3 class="products__title u-margin-bottom-sm">${item.name}</h3>
      <h4 class="products__price u-margin-bottom-sm">${item.price}</h4>
      <button class="btn btn--products" data-id="${item.id}">Add to Cart</button>
    </div>
    `;
    });
    productsMarkup.innerHTML = markup;
  }
}
//export default new RenderCart();
export const displayCart = new RenderCart();

// class addProducts {
//   // constructor() {
//   //   this.RenderCarts = new RenderCart();
//   // }

//   addCarts() {
//     // this.RenderCarts.renderProducts;

//     console.log(markup);
//   }
// }
// export const addBag = new addProducts();
