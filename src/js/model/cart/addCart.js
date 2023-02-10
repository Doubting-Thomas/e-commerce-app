import { updateCartView } from "./updateCart";
import { cart } from "../model";
import { items } from "../../products.js";
//import { updateCartView } from "./updateCart";

export function addCartProducts(id) {
  if (cart.some((product) => product.id === id)) {
    console.log("Already added to cart");
    //updateUnits("increase", id);
    return;
  } else {
    const product = items.find((item) => item.id === id);
    cart.push({
      ...product,
      //units: 1,
    });
    console.log(cart);
  }

  updateCartView();
}
