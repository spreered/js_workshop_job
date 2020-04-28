"use strict";

$(document).ready(function () {
  // task1
  var menuBtn = document.querySelector("#navbar-burger");
  var pageBtn = document.querySelector(".pagination .pagination-next");
  var menuBody = document.querySelector("#navbar-menu");
  menuBtn.addEventListener("click", menuRWD);
  pageBtn.addEventListener("click", nextPage);
  var pageNow = 1;

  function menuRWD() {
    this.classList.toggle("is-active");
    menuBody.classList.toggle("is-active");
  }

  function nextPage() {
    pageNow = pageNow + 1;
    searchJson(pageNow);
  }

  var form = document.forms["search-job"];
  var search = form.search;
  search.addEventListener("click", searchJson);

  search.onclick = function () {
    $('#job-pannel').empty();
  };

  function searchJson(pageNow) {
    event.preventDefault(); // $('#job-pannel').empty()

    var keyworddDescription = form.description.value;
    var keywordLocation = form.location.value;
    var keywordFulltime = form.full_time.checked ? "Full Time" : "";
    var page = pageNow;
    var test = 0; // let url = `https://still-spire-37210.herokuapp.com/positions.json?description=${keyworddDescription}&location=${keywordLocation}&type=${keywordFulltime} `

    var url = "https://still-spire-37210.herokuapp.com/positions.json?description=".concat(keyworddDescription, "&location=").concat(keywordLocation, "&type=").concat(keywordFulltime, "&page=").concat(page, " ");
    axios.get(url).then(function (response) {
      var dataCount = response.data.length;

      if (dataCount >= 50) {
        pageBtn.removeAttribute('disabled');
      } else {
        pageBtn.setAttribute('disabled', true);
      }

      response.data.map(function (x) {
        $('#job-pannel').append(toPostHtml(x));
      });
    });

    function toPostHtml(jsn) {
      return "\n                <tr>\n                    <td>\n                        <h4><a href=\" ".concat(jsn.url, "\">").concat(jsn.title, "</a></h4>\n                        <p class=\"source\">\n                            <a class=\"company\" href=\"").concat(jsn.company_url, "\">").concat(jsn.company, "</a> \u2013\n                            <strong class=\"fulltime\">Full Time</strong>\n                        </p>\n                    </td>\n                    <td class=\"meta\">\n                        <span class=\"location\">").concat(jsn.location, "</span>\n                    </td>\n                </tr>\n                ");
    }
  }
});