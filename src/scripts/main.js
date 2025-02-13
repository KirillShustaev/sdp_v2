let catalogBtnSwiper = document.querySelectorAll(".catalog__btnSwiper")

catalogBtnSwiper.forEach(e => {
    e.addEventListener("click", () => {
        for(elem of catalogBtnSwiper) {
            elem.classList.remove("catalogBtnActive")
        }
        e.classList.add("catalogBtnActive")
    })

})

//
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

swiper = new Swiper('.catalog__swiper', {
	slidesPerGroup: 1,
    slidesPerView: 1,
	spaceBetween: 20,
	loop: true,
	navigation: {
		nextEl: '.catalog__btnSwiper_1',
		prevEl: '.catalog__btnSwiper_2',
		},
  })
//
let phoneInput = document.getElementById('phone');
let phoneMask = IMask(phoneInput, {
	mask: '+{7}(000)000-00-00'
});
