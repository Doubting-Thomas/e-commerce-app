// import { cart } from "../model";
// import { updateCartView } from "../views/productsView";
import { cart } from "../model";
import { updateCartView } from "./updateCart";

export function removeCartProducts(id) {
  const index = cart.find((product) => {
    product.id === id;
    //console.log(id);
  });

  cart.splice(index, 1);

  updateCartView();
}
