import { navMenu } from "./config";
import { displayMobileNav, removeMobileNav } from "./mobileNav";
import { scrollAnimation } from "./smoothScroll";

function init() {
  displayMobileNav();
  scrollAnimation();
}
init();
