import {
  cartDisplay,
  cartContainer,
  closeCart,
  navCartIcon,
  cartCount,
} from "./config";
import { items } from "./products";

// export let cart = {
//   id: "",
//   name: "",
//   price: "",
//   image: "",
// };

// items.forEach(function (item) {
//   cart.id = item.id;
//   cart.name = item.name;
//   cart.price = item.price;
//   cart.image = item.image;
// });

// export let cart = {
//   id: [],
//   name: [],
//   price: [],
//   image: [],
// };

// export let cart = {
//   id: "",
//   name: "",
//   price: "",
//   image: "",
// };

//export let products = items;

// products.forEach(function (item) {
//   cart.id.push(item.id);
//   cart.name.push(item.name)
//   cart.price.push(item.price)
//   cart.image.push(item.image)
//   // cart.id = item.id;
//   // cart.name = item.name;
//   // cart.price = item.price;
//   // cart.image = item.image;
// });

// products.forEach(function (item) {
//   cart.id.push(item.id);
//   cart.name.push(item.name);
//   cart.price.push(item.price);
//   cart.image.push(item.image);
//   //cart.id = item.id;
//   //cart.name = item.name;
//   // cart.price = item.price;
//   // cart.image = item.image;
// });

export let cart = [];

// Functionality for the cart container pop-up
export function renderCartDisplay() {
  navCartIcon.addEventListener("click", function () {
    cartDisplay.classList.toggle("transparent");
    cartContainer.classList.toggle("reveal");
  });
}

export function closeCartDisplay() {
  closeCart.addEventListener("click", function () {
    cartDisplay.classList.remove("transparent");
    cartContainer.classList.remove("reveal");
  });
}

// Functionality to display cart number when adding items to cart
export function renderCartCount() {
  cartCount.classList.remove("hidden");
}
