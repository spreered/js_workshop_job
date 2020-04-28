$(document).ready(() => {
    // task1
    let menuBtn = document.querySelector("#navbar-burger")
    let menuBody = document.querySelector("#navbar-menu")
    menuBtn.addEventListener("click", menuRWD);

    function menuRWD() {
        this.classList.toggle("is-active")
        menuBody.classList.toggle("is-active")
    }

    // task2.task3

    var form = document.forms["search-job"]
    var search = form.search

    search.addEventListener("click", searchJson);

    function searchJson() {
        event.preventDefault();
        let keyworddDescription = form.description.value
        let keywordLocation = form.location.value
        let keywordFulltime = form.full_time.checked ? "Full Time" : ""
        console.log(keywordFulltime)
        let url = `https://still-spire-37210.herokuapp.com/positions.json?description=${keyworddDescription}&location=${keywordLocation}&type=${keywordFulltime} `

        axios.get(url)
            .then(function(response) {
                response.data.map(x => {
                    $('#job-pannel').append(toPostHtml(x))
                })
            })

        function toPostHtml(jsn) {
            return `
                <tr>
                    <td>
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