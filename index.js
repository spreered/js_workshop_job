let btn = document.querySelector('.navbar-burger')
let menu = document.querySelector('.navbar-menu')
let form = document.querySelector('form')
let input = document.querySelectorAll('input')
let html = {}
btn.addEventListener('click',function(){
  btn.classList.toggle('is-active')
  menu.classList.toggle('is-active')
  return false
})
form.addEventListener('submit',function(){
  let description = document.getElementsByName('description')[0].value;
  let country = document.getElementsByName('location')[0].value;
  let full_time = document.getElementsByName('full_time')[0].checked;
  html['workshop'] = `https://jobs.github.com/position.json?description=${description}&location=${country}&full_time=${full_time}`
  console.log(html.workshop)
  event.preventDefault()
  return false
})
fetch('https://still-spire-37210.herokuapp.com/positions.json')
  .then( (resp) => {
    console.log(resp.json())
  })



