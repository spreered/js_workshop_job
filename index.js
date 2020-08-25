const burger = document.querySelector('#navbar-burger')

burger.addEventListener('click',(e)=>{
  const burgerMenu = document.querySelector('#navbar-menu')
  e.target.classList.toggle('is-active')
  burgerMenu.classList.toggle('is-active')
})