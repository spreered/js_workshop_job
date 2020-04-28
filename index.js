let navbtn = document.querySelector('.navbar-burger')
let navmenu = document.querySelector('.navbar-menu')

navbtn.addEventListener("click", function(){
  navbtn.classList.toggle("is-active");
  navmenu.classList.toggle("is-active");
})