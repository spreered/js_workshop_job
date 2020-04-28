let hb = document.querySelector("#navbar-burger");
let nav = document.querySelector("#navbar-menu");

hb.addEventListener("click", onClick);

function onClick() {
  hb.classList.toggle("is-active");
  nav.classList.toggle("is-active");
}
