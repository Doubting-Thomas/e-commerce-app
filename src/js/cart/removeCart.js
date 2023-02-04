import { cart } from "../model";

export function removeCartItems(id) {
  cart.filter(function (product) {
    product.id !== id;
  });
}