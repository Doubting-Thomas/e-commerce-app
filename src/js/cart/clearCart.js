import { cart } from "../model";
import { cartCount, cartInfo, cartTotalPrice } from "../config";
import { removeCartItems } from "./removeCart";
import { cartTotal } from "./totalCart";

export function clearCartItems() {
  let items = cart.map(function (item) {
    item.id;
  });

  items.forEach(function (id) {
    removeCartItems(id);
  });

  while (cartInfo.children.length > 0) {
    cartInfo.removeChild(cartInfo.children[0]);
  }

  cartCount.textContent = "";
  cartTotalPrice.textContent = "";
}
