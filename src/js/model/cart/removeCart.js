import { cart } from "../model";
import { updateCartView } from "./updateCart";

export function removeCartProducts(id) {
  const index = cart.find((product) => {
    product.id === id;
  });

  cart.splice(index, 1);

  updateCartView();
}
