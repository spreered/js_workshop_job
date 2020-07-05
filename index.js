let burger = document.querySelector('#navbar-burger')
let menu = document.querySelector('#navbar-menu')

burger.addEventListener("click", function(e){
  e.target.classList.toggle("is-active");
  menu.classList.toggle("is-active");
},false)

let form = document.forms[0]
let nextPageBtn = document.querySelector(".pagination-next")
let tableContent = document.querySelector("#job-pannel")

form.addEventListener("submit", function(e){
  e.preventDefault();
  let jobDescription = document.querySelector("input[name=description]").value
  let location = document.querySelector("input[name=location]").value
  let fullTime = document.querySelector("input[name=full_time]").checked
  let request = `
  https://still-spire-37210.herokuapp.com/positions.json?description=${jobDescription}&location=${location}&full_time=${fullTime}`
  getData(request)
})

function getData(request){
  fetch(request)
  .then(function(response) {
    console.log(response)
    nextPageBtn.style.display = "block"
    return response.json();
    // jobPannel.childElementCount
  })
  .then(function(myJson) {
    console.log(myJson)
    tableContent.innerHTML = ""
    myJson.map(function(data){
      tableContent.innerHTML += getTemplate(data)
    });
    let tableContenCount = tableContent.childElementCount
    changeBtnDisabled(tableContenCount);
  })
  
  function getTemplate(data){
  return`
  <tr>
    <td>
      <h4><a href="${data.url}">${data.title}</a></h4>
      <p class="source">
        <a class="company" href="https://jobs.github.com/companies/gemeente-amsterdam">${data.company}</a>–
          <strong class="fulltime">${data.type}</strong>
        </p>
    </td>
    <td class="meta">
      <span class="location">${data.location}</span>
    </td>
  </tr>
  `
  }
  function changeBtnDisabled(value){
    if (value > 50){
      nextPageBtn.disabled = false;
    }else{
      nextPageBtn.disabled = true;
    }
  }
}