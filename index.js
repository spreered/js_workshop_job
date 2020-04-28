let navbar = document.getElementById("navbar-menu")
let burger = document.getElementById("navbar-burger")
let next = document.querySelector("a.pagination-next")
let container = document.getElementById("job-pannel")
let form = document.getElementById("search-job")
let submit = form.querySelector('input[type=submit]')
let url
let page = 2

window.onload = jobGet

burger.onclick = function() {

  navbar.classList.toggle("is-active")
  burger.classList.toggle("is-active")

}

submit.onclick = function(eve) {

  eve.preventDefault()
  jobGet()

}

function jobGet() {

  page = 2
  let description = form.querySelector("input[name=description]").value
  let location = form.querySelector("input[name=location]").value
  let full_time = form.querySelector("input[name=full_time]").checked
  url = "https://still-spire-37210.herokuapp.com/positions.json?"
  
  let url_add = []
  
  if(description){
    url_add.push("description=" + description.replace(' ','+'))
  }

  if(location){
    url_add.push("location=" + location.replace(' ','+'))
  }

  if(full_time){
    url_add.push("full_time=true")
  }

  url += url_add.join("&")
  container.innerHTML = ''
  axiosGet(url)

}

next.onclick = function(eve) {

  eve.preventDefault() 
  axiosGet(url + `&page=${page++}`)

}

function axiosGet(url) {
  next.setAttribute('disabled',null)
  next.innerHTML = "Wait..."
  axios.get(url)
       .then(function(resp) {
          
          for(data of resp.data){
            container.innerHTML += formatHTML(data)
          }
          if(resp.data.length === 50){
            next.removeAttribute('disabled')
            next.innerHTML = "Next page"
          }else{
            next.setAttribute('disabled',null)
            next.innerHTML = "Done."
          }
          
        })

}

function formatHTML(elem){

  return `
  <tr>
    <td>
      <h4><a href=${elem.url}>${elem.title}</a></h4>
      <p class="source">
      <a class="company" href=${elem.company_url}>${elem.company}</a>
      <strong class="fulltime">${elem.type}</strong>
      </p>
    </td>
    <td class="meta">
      <span class="location">${elem.location}</span>
    </td>
  </tr>
  `
}