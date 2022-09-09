const searchEl = document.getElementById("search");

searchEl.addEventListener("keyup", function(e) {
    const nameCollectionOfDom = document.getElementsByClassName("list");
    const searchQuery = e.target.value;

    for(let i = 0; i < nameCollectionOfDom.length; i++) {
        const userName = nameCollectionOfDom[i].textContent;

        if(userName.includes(searchQuery)) {
            nameCollectionOfDom[i].style.display = "block";
        }
        else {
            nameCollectionOfDom[i].style.display = "none";
        }
    }
})