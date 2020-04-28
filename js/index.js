$(document).ready(() => {
    // task1
    let menuBtn = document.querySelector("#navbar-burger")
    let pageBtn = document.querySelector(".pagination .pagination-next")
    let menuBody = document.querySelector("#navbar-menu")

    menuBtn.addEventListener("click", menuRWD);
    pageBtn.addEventListener("click", nextPage);
    var pageNow = 1

    function menuRWD() {
        this.classList.toggle("is-active")
        menuBody.classList.toggle("is-active")
    }

    function nextPage() {
        pageNow = pageNow + 1
        searchJson(pageNow)
    }


    var form = document.forms["search-job"]
    var search = form.search

    search.addEventListener("click", searchJson);

    function searchJson(pageNow) {
        event.preventDefault();
        let keyworddDescription = form.description.value
        let keywordLocation = form.location.value
        let keywordFulltime = form.full_time.checked ? "Full Time" : ""
        let page = pageNow
        let test = 0

        // let url = `https://still-spire-37210.herokuapp.com/positions.json?description=${keyworddDescription}&location=${keywordLocation}&type=${keywordFulltime} `
        let url = `https://still-spire-37210.herokuapp.com/positions.json?description=${keyworddDescription}&location=${keywordLocation}&type=${keywordFulltime}&page=${page} `

        axios.get(url)
            .then(function(response) {
                var dataCount = response.data.length
                if (dataCount >= 50) {
                    pageBtn.removeAttribute('disabled')
                } else {
                    pageBtn.setAttribute('disabled', true)
                }
                response.data.map(x => {
                    $('#job-pannel').append(toPostHtml(x))
                })
            })

        function toPostHtml(jsn) {
            test = test + 1
            return `
                <tr>
                    <td>
                    <p>${test}</p>
                        <h4><a href=" ${jsn.url}">${jsn.title}</a></h4>
                        <p class="source">
                            <a class="company" href="${jsn.company_url}">${jsn.company}</a> –
                            <strong class="fulltime">Full Time</strong>
                        </p>
                    </td>
                    <td class="meta">
                        <span class="location">${jsn.location}</span>
                    </td>
                </tr>
                `;
        }
    }
})