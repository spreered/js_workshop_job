$(document).ready(() => {
    // task1
    let menuBtn = document.querySelector("#navbar-burger")
    let menuBody = document.querySelector("#navbar-menu")
    menuBtn.addEventListener("click", menuRWD);

    function menuRWD() {
        this.classList.toggle("is-active")
        menuBody.classList.toggle("is-active")
    }

    // task2

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
                console.log(response.data);
            })
    }
})