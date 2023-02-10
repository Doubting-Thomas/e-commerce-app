import { items } from "../products";
import { cartInfo, productsMarkup } from "../config";
import { cart } from "../model/model";
// // Assign the function to the window to use the onclick function
// window.addCartProducts = addCartProducts;
// window.updateUnits = updateUnits;
// window.removeCartProducts = removeCartProducts;

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

// export function addCartProducts(id) {
//   if (cart.some((product) => product.id === id)) {
//     console.log("Already added to cart");
//     //updateUnits("increase", id);
//     return;
//   } else {
//     const product = items.find((item) => item.id === id);
//     cart.push({
//       ...product,
//       //units: 1,
//     });
//     console.log(cart);
//   }

//   updateCartView();
// }

// export function cartMarkup() {
//   cartInfo.innerHTML = "";
//   cart.forEach((product) => {
//     cartInfo.innerHTML += `
//         <div class="cart__items u-margin-bottom-sm">
//             <img src="${product.image}" class="cart__image" alt="cart-image" />
//             <div>
//               <h4 class="cart__title">${product.name}</h4>
//               <h5><span>$</span> <span class="cart__price">${product.price}</span></h5>
//               <span class="cart__delete" onclick="removeCartProducts(${product.id})">Delete</span>
//             </div>
//             <div>
//               <button class="nav__btn btn-cart-close" onclick="updateUnits('increase', ${product.id})">
//                 <span class="cart__icon">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
//                     <path
//                       d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
//                     />
//                   </svg>
//                 </span>
//               </button>
//               <div class="cart__amount">${product.units}</div>
//               <button class="nav__btn btn-cart-close" onclick="updateUnits('decrease', ${product.id})">
//                 <span class="cart__icon">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
//                     <path
//                       d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
//                     />
//                   </svg>
//                 </span>
//               </button>
//             </div>
//           </div>
//         `;
//   });
// }

// export function updateCartView() {
//   cartMarkup();
//   cartTotal();

//   localStorage.setItem("Cart", JSON.stringify(cart));
// }

// // Update cart amount
// export function updateUnits(action, id) {
//   cart = cart.map((product) => {
//     //let updatedUnits = product.units;
//     //let defaultUnits = product.units;

//     if (product.id === id) {
//       if (action === "increase") {
//         let defaultUnits = product.units;
//         //product.units++;
//         defaultUnits++;
//       } else if (action === "decrease" && product.units > 1) {
//         //product.units--;
//         defaultUnits--;
//       }
//     }

//     return {
//       ...product,
//       units: product.units,
//     };
//   });

//   updateCartView();
// }

// // Update the cart total
// export function cartTotal() {
//   let cartPrice = 0;
//   let cartItems = 0;

//   cart.forEach((product) => {
//     cartPrice += product.price * product.units;
//     cartItems += product.units;
//   });

//   cartTotalPrice.textContent = cartPrice;
//   cartCount.textContent = cartItems;
// }

// export function removeCartProducts(id) {
//   const index = cart.findIndex((product) => {
//     product.id === id;
//     //console.log(id);
//   });

//console.log(index);
// cart = cart.filter((produuuuuuct) => {
//   produuuuuuct.id !== id;
// });
// const cartID = cart.map((product) => {
//   product.id === id;
//   console.log(id);
// });

//   cart.splice(index, 1);
//   // const id = action.payload;
//   //     const existingItem = state.items.find((item) => item.id === id);
//   //     state.totalQuantity--;
//   //     if (existingItem.quantity === 1) {
//   //       state.items = state.items.filter((item) => item.id !== id);

//   // const existingItem = cart.find((item) => item.id === id);
//   // if (existingItem.units < 1) {
//   //   console.log("hm");
//   // }
//   updateCartView();
// }

// // Save cart to local storage
