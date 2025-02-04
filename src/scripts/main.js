let headerForm = document.querySelector(".header__form")
let headerSearch = document.querySelector(".header__search")

headerSearch.addEventListener("input", ()=> {
    headerForm.classList.toggle("noneLoop")
})