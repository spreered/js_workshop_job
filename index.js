document.addEventListener("DOMContentLoaded", () => {
  const navBurger = document.querySelector("#navbar-burger");
  const navMenu = document.querySelector("#navbar-menu");
  const search = document.forms[0];

  navBurger.addEventListener("click", () => {
    navBurger.classList.toggle("is-active");
    navMenu.classList.toggle("is-active");
  })

  search.addEventListener("submit", (e) => {
    e.preventDefault();

    let url = "https://still-spire-37210.herokuapp.com/positions.json?";
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

    fetch(url).then(response => console.log(response.json()));
    
    search.reset();
  });
});