import { cartDisplay, cartContainer, closeCart, navCartIcon } from "./config";
import { items } from "./products";
console.log(items);

// export const state = {
//   cart: {},
// }

// const dataList = {
//   image: [],
//   title: [],
//   publisher: [],
//   socialRank: [],
// };
// let recipe = data.recipes;
// recipe.forEach(function (meals) {
//   dataList.image.push(meals.image_url);
//   dataList.title.push(meals.title);
//   dataList.publisher.push(meals.publisher);
//   dataList.socialRank.push(meals.social_rank);
// });
// console.log(dataList);

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

//console.log(cart);

//console.log(cart);

// let cartItemName = items;
// console.log(cartItemName);

// Functionality for the cart pop-up
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
