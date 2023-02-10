import { cart } from "../model";
import { cartTotalPrice } from "../../config";
import { cartCount } from "../../config";
//import { updateCartView } from "../../views/productsView";
//import { updateCartView } from "../model/cart/updateCart";
import { updateCartView } from "./updateCart";

//Update cart amount
export function updateUnits(action, id) {
  cart = cart.map((product) => {
    //let updatedUnits = product.units;
    //let defaultUnits = product.units;

    if (product.id === id) {
      if (action === "increase") {
        product.units++;
        //defaultUnits++;
      } else if (action === "decrease" && product.units > 1) {
        product.units--;
        //defaultUnits--;
      }
    }

    return {
      ...product,
      units: product.units,
    };
  });

  updateCartView();
}

// Update the cart total
export function cartTotal() {
  let cartPrice = 0;
  let cartItems = 0;

  cart.forEach((product) => {
    cartPrice += product.price * product.units;
    cartItems += product.units;
  });

  cartTotalPrice.textContent = cartPrice;
  cartCount.textContent = cartItems;
}
