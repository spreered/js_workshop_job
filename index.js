let btn = document.querySelector("#navbar-burger");
let menu = document.querySelector("#navbar-menu")

btn.addEventListener("click", function (e) {
  e.preventDefault();
  menu.classList.toggle("is-active");
})