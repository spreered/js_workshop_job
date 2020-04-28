let navbtn = document.querySelector('.navbar-burger');
let navmenu = document.querySelector('.navbar-menu');

navbtn.addEventListener("click", function(){
  navbtn.classList.toggle("is-active");
  navmenu.classList.toggle("is-active");
})

var xhr = new XMLHttpRequest();
let job_arr
xhr.open("GET", "https://still-spire-37210.herokuapp.com/positions.json");
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 400) {
    job_arr = JSON.parse(xhr.responseText);
    console.log(job_arr)
    }
};
xhr.send();

// https://jobs.github.com/positions?utf8=✓&description=c&location=Taiwan&full_time=on
// let url = new URL('https://jobs.github.com/positions?.json');
// let qs = new URLSearchParams();
// let description = document.getElementById('description').value
// let locate = document.getElementById('locate').value
// let full_time = document.getElementById('full_time').on
// let search = document.querySelector('.control');
// search.addEventListener("click", function() {
//     qs.append('description', `${description}`);
//     qs.append('location', `${locate}`);
//     qs.append('full_time',`${full_time}`);
//     url.search = qs;
//     url.href;
//     console.log(url.href)
// })

let search = document.querySelector('.button');
search.addEventListener("click", function(e) {
    e.preventDefault()
    let description = document.getElementById('description').value
    let locate = document.getElementById('locate').value
    let full_time = document.getElementById('full_time').checked
    let location = "https://jobs.github.com/positions?" + "description=" + description + "&location=" + locate + "&full_time=" + full_time;
    console.log(location)
})