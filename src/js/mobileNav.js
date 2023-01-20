import { navMenu, navContainer } from "./config";

export function mobileNav() {
  navMenu.addEventListener("click", function () {
    navContainer.classList.toggle("nav__open");
  });
}
