document.addEventListener("DOMContentLoaded", () => {
  const navBurger = document.querySelector("#navbar-burger");
  const navMenu = document.querySelector("#navbar-menu");
  const search = document.forms[0];
  const table = document.querySelector("#job-pannel");
  const nextPage = document.querySelector(".pagination-next");
  let url = "https://js-workshop-5xjobs.herokuapp.com/positions.json?";
  let page = 1;

  getApi(url);

  navBurger.addEventListener("click", () => {
    navBurger.classList.toggle("is-active");
    navMenu.classList.toggle("is-active");
  })

  search.addEventListener("submit", (e) => {
    e.preventDefault();

    const params = {
      job: search.description.value,
      local: search.location.value,
      fullTime: search.full_time.checked
    }
    if (params.job) {
      url += `description=${params.job}&`;
    }
    if (params.local) {
      url += `location=${params.local}&`;
    }
    if (params.fullTime) {
      url += "full_time=true";
    }

    table.innerHTML = "";
    getApi(url);    
    
    search.reset();
  });



  function getApi(url) {
    fetch(url)
    .then(response => {
      let a = response.json();
      console.log(a);
      return a;
    })
    .then(promise => {
      render(promise);
      if (promise.length === 50) {
        nextPage.removeAttribute("disabled");
        url += `&page=${++page}`;

        nextPage.addEventListener("click", () => {
          getApi(url);
        })
      } else {
        nextPage.setAttribute("disabled", true);
      }
    });
  }
  


  function render(promise) {
    const template = document.querySelector("template");
    const title = template.content.querySelector("h4 > a");
    const company = template.content.querySelector(".company");
    const fulltime = template.content.querySelector(".fulltime");
    const location = template.content.querySelector(".location");

    promise.forEach((item) => {
      title.textContent = item.title;
      company.textContent = item.company;
      fulltime.textContent = item.type;
      location.textContent = item.location;

      let clone = document.importNode(template.content, true);
      table.append(clone);
    });
  }
});