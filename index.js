document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelector('#navbar-burger').addEventListener('click', ()=>{
    
    const menu = document.querySelector('#navbar-menu');
    if (menu.classList.contains('is-active')){
      menu.classList.remove('is-active')
    }else{
      menu.classList.add('is-active')
    }
  })
  formsFindJob = document.forms["search-job"]
  formsFindJob.addEventListener('submit', (e)=>{
    e.preventDefault()
    jobDes = formsFindJob[name="description"].value
    jobLoc = formsFindJob[name="location"].value
    jobFullTime = formsFindJob[name="full_time"].checked
    // console.log(jobFullTime)
    if (!!jobDes || !!jobLoc || jobFullTime){
      fetch(`https://still-spire-37210.herokuapp.com/positions.json?description=${jobDes}&full_time=${jobFullTime}&location=${jobLoc}`)
      .then(response => response.json())
      .then(searchData => {
        console.log(searchData)
      })
    }   
 })
})