"use strict";

$(document).ready(function () {
  // task1
  var menuBtn = document.querySelector("#navbar-burger");
  var menuBody = document.querySelector("#navbar-menu");
  menuBtn.addEventListener("click", menuRWD);

  function menuRWD() {
    this.classList.toggle("is-active");
    menuBody.classList.toggle("is-active");
  } // task2.task3


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
      response.data.map(function (x) {
        $('#job-pannel').append(toPostHtml(x));
      });
    });

    function toPostHtml(jsn) {
      return "\n                <tr>\n                    <td>\n                        <h4><a href=\" ".concat(jsn.url, "\">").concat(jsn.title, "</a></h4>\n                        <p class=\"source\">\n                            <a class=\"company\" href=\"").concat(jsn.company_url, "\">").concat(jsn.company, "</a> \u2013\n                            <strong class=\"fulltime\">Full Time</strong>\n                        </p>\n                    </td>\n                    <td class=\"meta\">\n                        <span class=\"location\">").concat(jsn.location, "</span>\n                    </td>\n                </tr>\n                ");
    }
  }
});