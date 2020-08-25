window.addEventListener('DOMContentLoaded', function(){
  const navbarBurger = document.getElementById('navbar-burger');
   const navbarMenu = document.getElementById('navbar-menu');

  navbarBurger.addEventListener('click', function(){
    navbarBurger.classList.toggle('is-active');
    navbarMenu.classList.toggle('is-active');
  });
});