let navbar = document.getElementById("navbar-menu")
let burger = document.getElementById("navbar-burger")

burger.onclick = function() {
  list = navbar.classList
  if(list.contains("is-active")){
    list.remove("is-active")
    burger.classList.remove("is-active")
  }else{
    list.add("is-active")
    burger.classList.add("is-active")
  }
}