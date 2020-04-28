let navbar = document.getElementById("navbar-menu")
let burger = document.getElementById("navbar-burger")

burger.onclick = function() {
  list = navbar.classList
  if(list.contains("is-active")){
    list.remove("is-active")
    burger.classList.remove("is-active")
  }else{
    list.add("is-active")
    burger.classList.add("is-active")
  }
}

let form = document.getElementById("search-job")
let submit = form.querySelector('input[type=submit]')

submit.onclick = function(eve) {
  eve.preventDefault()
  let description = form.querySelector("input[name=description]").value
  let location = form.querySelector("input[name=location]").value
  let full_time = form.querySelector("input[name=full_time]").checked
  let url = "https://still-spire-37210.herokuapp.com/positions.json?"
  let container = document.getElementById("job-pannel")
  let url_add = []
  
  if(description.length > 0){
    console.log('hi1')
    url_add.push("description=" + description.replace(' ','+'))
  }

  if(location.length > 0){
    console.log('hi2')
    url_add.push("location=" + location.replace(' ','+'))
  }

  if(full_time){
    console.log('hi3')
    url_add.push("full_time=true")
  }

  url += url_add.join("&")
  let res = []

  axios.get(url)
       .then(function(resp) {
          for(data of resp.data){
            res.push(formatHTML(data))
          }
          container.innerHTML = res.join()
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
