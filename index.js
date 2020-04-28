// console.log('lalalalala');

let ham = document.querySelector('#navbar-burger')
var menu = document.querySelector('#navbar-menu')

ham.addEventListener('click', function () {
  menu.classList.toggle('is-active');
})