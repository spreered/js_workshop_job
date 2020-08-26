
window.addEventListener('DOMContentLoaded', function() {
  
    let burger = document.querySelector('.navbar-menu');
    let navbarClick = document.querySelector('.navbar-burger');
  
    navbarClick.addEventListener('click', function () {
      burger.classList.toggle('is-active')
    }, false)
    
  
    let searchClick = document.querySelector('.button')

    let bulmaUrl = 'https://still-spire-37210.herokuapp.com/positions.json/?';
    let getForm = document.forms['search-job'];
    let description = getForm.elements.description.value;
    let location = getForm.elements.location.value;
    let checked = getForm.elements.full_time.checked;

    let fDescription = `description=${description}`;
    let fLocation = `&location=${location}`;
    let fChecked = `&full_time=${checked}`
    let page = 1;

    let Uri = `${bulmaUrl}${fDescription}${fLocation}${fChecked}`;
      
    searchClick.addEventListener('click', function (e) {
      
      e.preventDefault();
      page = 1;
      rePeat(Uri);
      console.log(Uri);

    })


      let disabled = document.querySelector(".pagination-next");
      
      
      disabled.addEventListener("click",function(e){
        e.preventDefault();
        let pageUpdate = `&page=${++page}`;
        console.log(pageUpdate)
        rePeat((Uri + pageUpdate))

        
      });

      function rePeat(uri){

        fetch(uri).then(res => res.json()).then(jobRes => {

          console.log(jobRes[0]);

          jobRes.forEach(job => {
            let template = document.querySelector('template');
            let jobPannel = document.querySelector('#job-pannel');

            let title = template.content.querySelector('h4 a');
            title.setAttribute('href', job.url);
            title.textContent = job.title;

            let company = template.content.querySelector('.company');
            company.setAttribute('href', job.company_url);
            company.textContent = job.company;

            let fullTime = template.content.querySelector('.fulltime');
            fullTime.textContent = job.type;

            let location = template.content.querySelector('.location');
            location.textContent = job.location;

            let allInfo = document.importNode(template.content, true)

            jobPannel.append(allInfo)
          })


          if (jobRes.length === 50) {
            let disabled = document.querySelector(".pagination-next");
            disabled.removeAttribute("disabled");
          }
        })

      }

})
