"use strict";

$(document).ready(function () {
  // task1
  var menuBtn = document.querySelector("#navbar-burger");
  var menuBody = document.querySelector("#navbar-menu");
  menuBtn.addEventListener("click", menuRWD);

  function menuRWD() {
    this.classList.toggle("is-active");
    menuBody.classList.toggle("is-active");
  } // task2


  var form = document.forms["search-job"];
  var search = form.search;
  search.addEventListener("click", searchJson);

  function searchJson() {
    event.preventDefault();
    var keyworddDescription = form.description.value;
    var keywordLocation = form.location.value;
    var keywordFulltime = form.full_time.checked ? "Full Time" : "";
    console.log(keywordFulltime);
    var url = "https://still-spire-37210.herokuapp.com/positions.json?description=".concat(keyworddDescription, "&location=").concat(keywordLocation, "&type=").concat(keywordFulltime, " ");
    axios.get(url).then(function (response) {
      console.log(response.data);
    });
  }
});