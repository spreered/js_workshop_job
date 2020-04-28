let menuBtn = document.querySelector("#navbar-burger")
let menuBody = document.querySelector("#navbar-menu")
menuBtn.addEventListener("click", menuRWD);

function menuRWD() {
    this.classList.toggle("is-active")
    menuBody.classList.toggle("is-active")
}