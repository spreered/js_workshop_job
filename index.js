document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#navbar-burger').addEventListener('click',function(){
    document.querySelector('.navbar-menu').classList.toggle('is-active')
    document.querySelector('.navbar-burger').classList.toggle('is-active')
  })

  const searchForm = document.forms['search-job']
  searchForm.querySelector('.button').addEventListener('click', function(e) {
    e.preventDefault();
    const des = searchForm.description.value
    const location = searchForm.location.value
    const full_time = searchForm.full_time.checked
    var full_time_value
    if (full_time){
      full_time_value = "on"
    }

    console.log(full_time)
    const uri = `https://still-spire-37210.herokuapp.com/positions.json?description=${des}&location=${location}&full_time=${full_time_value}`;

    fetch(uri, {method:'GET'})
      .then( Response => {
       console.log( Response.json() )
      })
  })
})