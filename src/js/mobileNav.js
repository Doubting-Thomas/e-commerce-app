import {
  navMenu,
  navContainer,
  btnHero,
  navx,
  navCartIcon,
  navBookmarksIcon,
} from "./config";

export function displayMobileNav() {
  navMenu.addEventListener("click", function () {
    navContainer.classList.toggle("nav__open");
    btnHero.classList.toggle("hide");
    // btnHero.style.display = "none";
    navBookmarksIcon.classList.toggle("hidden");
    navCartIcon.classList.toggle("hidden");
  });
}

// export function removeMobileNav() {
//   navx.addEventListener("click", function () {
//     navContainer.classList.toggle("nav__open");
//     btnHero.style.display = "block";
//     navCartIcon.style.display = "block";
//     navBookmarksIcon.style.display = "block";
//   });
// }
