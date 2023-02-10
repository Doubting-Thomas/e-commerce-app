import { cartMarkup } from "../../views/cartView";
import { cartTotal } from "./totalCart";
import { cart } from "../model";

export function updateCartView() {
  cartMarkup();
  cartTotal();

  localStorage.setItem("Cart", JSON.stringify(cart));
}
