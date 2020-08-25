document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelector('#navbar-burger').addEventListener('click', ()=>{
    const menu = document.querySelector('#navbar-menu');
    if (menu.classList.contains('is-active')){
      menu.classList.remove('is-active')
    }else{
      menu.classList.add('is-active')
    }
  })
})