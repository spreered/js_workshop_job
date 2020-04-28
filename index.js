let btn = document.querySelector('.navbar-burger')
let menu = document.querySelector('.navbar-menu')
btn.addEventListener('click',function(){
  btn.classList.toggle('is-active')
  menu.classList.toggle('is-active')
})