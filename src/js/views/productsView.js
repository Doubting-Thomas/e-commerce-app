import { items } from "../products";
import { cartInfo, productsMarkup } from "../config";
import { btnProducts } from "../config";
import { cart } from "../model";

// Assign the function to the window to use the onclick function
window.addCartProducts = addCartProducts;

export function renderProducts() {
  items.forEach(function (item) {
    productsMarkup.innerHTML += `
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"> <path d="M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 336 54V452z"/></svg>
          </span>
        </button>
      </div>

      <h3 class="products__title u-margin-bottom-sm">${item.name}</h3>
      <h4 class="products__price u-margin-bottom-sm"><span>$</span>${item.price}</h4>
      <button class="btn btn--products" onclick="addCartProducts(${item.id})">Add to Cart</button>
    </div>
  `;
  });
}

// Add to cart
// function addToCart(id) {
//   // Check if product exists in the cart
//   if (
//     cart.some(function (item) {
//       item.id === id;
//     })
//   ) {
//     alert("Item already in cart!");
//     // If you want to increase the number in the cart though
//     changeNumberOfUnits("plus", id);
//   } else {
//     // Find the product that has the id clicked on
//     const item = products.find(function (product) {
//       product.id === id;
//     });
//     console.log(item);

//     // Push the item into the cart and add a new property
//     // For the number of units
//     cart.push({
//       ...item,
//       numberOfUnits: 1,
//     });

//     // Update the cart count and cart total
//     updateCart();
//   }
// }

function addCartProducts(id) {
  if (cart.some((product) => product.id === id)) {
    alert("Already added to cart");
  } else {
    const product = items.find((item) => item.id === id);
    //console.log(id);
    //console.log(product);
    // console.log(product.id);
    cart.push({
      ...product,
      units: 1,
    });
    console.log(cart);
  }

  cartMarkup();
}

export function cartMarkup() {
  // const markup = document.createElement("div");
  // markup.classList.add("cart__items");
  cart.forEach((product) => {
    cartInfo.innerHTML = `
        <div class="cart__items u-margin-bottom-sm">
            <img src="${product.image}" class="cart__image" alt="cart-image" />
            <div>
              <h4 class="cart__title">${product.name}</h4>
              <h5><span>$</span> <span class="cart__price">${product.price}</span></h5>
              <span class="cart__delete" data-id=${product.id}>Delete</span>
            </div>
            <div>
              <button class="nav__btn btn-cart-close">
                <span class="cart__icon" data-id="${product.id}">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path
                      d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
                    />
                  </svg>
                </span>
              </button>
              <p class="cart__amount">${product.units}</p>
              <button class="nav__btn btn-cart-close">
                <span class="cart__icon" data-id="${product.id}">
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
