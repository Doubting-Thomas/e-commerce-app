import RenderCart from "./renderCart";
import { markup } from "./renderCart";

class addProducts extends RenderCart {
  parentEl = [];

  addProduct() {
    console.log(markup);
  }
}
export default addProducts;
export const addCart = new addProducts();
