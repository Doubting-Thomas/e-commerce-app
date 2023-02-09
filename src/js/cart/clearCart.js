import { cart } from "../model";
import { cartCount, cartInfo, cartTotalPrice } from "../config";
import { cartTotal } from "./totalCart";
import { removeCartProducts } from "../views/productsView";
import { updateCartView } from "../views/productsView";

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

  // cartCount.textContent = "";
  // cartTotalPrice.textContent = "";
  updateCartView();
}
