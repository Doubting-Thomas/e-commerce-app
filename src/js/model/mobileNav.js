import {
  navMenu,
  navContainer,
  btnHero,
  navCartIcon,
  navBookmarksIcon,
} from "../config";

// Functionality for the menu navigation
export function displayMobileNav() {
  navMenu.addEventListener("click", function () {
    navContainer.classList.toggle("nav__open");
    btnHero.classList.toggle("hide");
    navBookmarksIcon.classList.toggle("hidden");
    navCartIcon.classList.toggle("hidden");
  });
}
