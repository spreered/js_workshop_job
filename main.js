window.addEventListener('DOMContentLoaded',function(){
const burger = document.querySelector('#navbar-burger')
const menu = document.querySelector('#navbar-menu')
burger.addEventListener('click',function(){
  burger.classList.toggle('is-active')
  menu.classList.toggle('is-active')
  })

const form = document.forms['search-job']

form.addEventListener('submit',function(e){
  e.preventDefault()
  // form.elements[0].value
  // form.elements[1].value
  // form.elements[2].checked
  fetchJob()
  })

  
  function fetchJob(){
    if (form.elements[2].checked){
      fetch(`https://still-spire-37210.herokuapp.com/positions.json?utf8=%E2%9C%93&description=${form.elements[0].value}&location=${form.elements[1].value}&full_time=on`)
      .then((resquest) => resquest.json())
      .then(posts => console.log(posts))
    } else {
      fetch(`https://still-spire-37210.herokuapp.com/positions.json?utf8=%E2%9C%93&description=${form.elements[0].value}&location=${form.elements[1].value}`)
      .then((resquest) => resquest.json())
      .then(posts => console.log(posts))
    }
  }
})
