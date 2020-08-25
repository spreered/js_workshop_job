window.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector("#navbar-burger");
  const menu = document.querySelector("#navbar-menu");
  burger.addEventListener("click", function () {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });
  // let document.querySelector('#navbar-burger').classList.add('is-active')
});
