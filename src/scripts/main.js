let headerForm = document.querySelector(".header__form")
let headerSearch = document.querySelector(".header__search")

headerSearch.addEventListener("input", ()=> {
    headerForm.classList.toggle("noneLoop")
})

// счетчик
const counterElement = document.querySelector('.header__basketCount');
const incrementButtons = document.querySelectorAll('.likeBtn');

let count = 0;

incrementButtons.forEach(button => {
    button.addEventListener('click', () => {
        count++;

        counterElement.textContent = count;
    });
});
//
let phoneInput = document.getElementById('phone');
let phoneMask = IMask(phoneInput, {
	mask: '+{7}(000)000-00-00'
});
