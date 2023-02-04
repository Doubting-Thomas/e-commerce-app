import { cart } from "../model";
import { cartInfo } from "../config";
import { removeCartItems } from "./removeCart";

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
}
