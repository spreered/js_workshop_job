"use strict";$(document).ready(function(){var t=document.querySelector("#navbar-burger"),i=document.querySelector(".pagination .pagination-next"),n=document.querySelector("#navbar-menu");t.addEventListener("click",function(){this.classList.toggle("is-active"),n.classList.toggle("is-active")}),i.addEventListener("click",function(){a(e+=1)});var e=1;var s=document.forms["search-job"],c=s.search;function a(t){event.preventDefault();var n=s.description.value,e=s.location.value,c=s.full_time.checked?"Full Time":"",a=t,o="https://still-spire-37210.herokuapp.com/positions.json?description=".concat(n,"&location=").concat(e,"&type=").concat(c,"&page=").concat(a," ");axios.get(o).then(function(t){50<=t.data.length?i.removeAttribute("disabled"):i.setAttribute("disabled",!0),t.data.map(function(t){$("#job-pannel").append(function(t){return'\n                <tr>\n                    <td>\n                        <h4><a href=" '.concat(t.url,'">').concat(t.title,'</a></h4>\n                        <p class="source">\n                            <a class="company" href="').concat(t.company_url,'">').concat(t.company,'</a> –\n                            <strong class="fulltime">Full Time</strong>\n                        </p>\n                    </td>\n                    <td class="meta">\n                        <span class="location">').concat(t.location,"</span>\n                    </td>\n                </tr>\n                ")}(t))})})}c.addEventListener("click",a),c.onclick=function(){$("#job-pannel").empty()}});