
import { cartInfo } from "../../config";
import { cart } from "../model";
import { removeCartProducts } from "./removeCart";
import { updateCartView } from "./updateCart";

export function clearCartItems() {
  let items = cart.map(function (item) {
    item.id;
  });

  items.forEach(function (id) {
    removeCartProducts(id);
  });

  while (cartInfo.children.length > 0) {
    cartInfo.removeChild(cartInfo.children[0]);
  }

  updateCartView();
}
