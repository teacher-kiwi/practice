const searchDiv = document.querySelector(".js-search"),
    searchButton = searchDiv.querySelector("button"),
    searchForm = searchDiv.querySelector("form"),
    searchBar = searchDiv.querySelector("input");


function handleSubmit(event){
    event.preventDefault();
    console.log(searchBar.value);
    window.open(`http://www.google.co.kr/search?q=${searchBar.value}`);
    searchBar.value = "";

}

function handleClick(event){
    searchBar.classList.toggle("active");
}

function init(){
    searchButton.addEventListener("click", handleClick);
    searchForm.addEventListener("submit", handleSubmit);
}

init();