let act = document.querySelector('#navbar-burger');
let menu = document.querySelector('#navbar-menu');
// console.log(menu)
  act.addEventListener('click', function(e) {
       e.stopPropagation()
       menu.classList.toggle('is-active');
       act.classList.toggle('is-active');
      },false);