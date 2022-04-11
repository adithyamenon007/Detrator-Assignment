"use strict";

let navbarHelper = document.querySelector(".flex-remover");
if (window.innerWidth <= 991) {
  navbarHelper.classList.remove("centerify");
} else if (window.innerWidth > 991) {
  navbarHelper.classList.add("centerify");
}

window.addEventListener("resize", (removecenter) => {
  if (window.innerWidth <= 991) {
    navbarHelper.classList.remove("centerify");
    document.getElementById("sale-modal-image").style.objectFit = "contain";
  } else if (window.innerWidth > 991) {
    navbarHelper.classList.add("centerify");
  }
});
