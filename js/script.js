const MOBILE_WIDTH = 921

const burger = document.querySelector('.header__burger')
const navigation = document.querySelector('.nav')
const page = document.querySelector('.page')
const body = document.querySelector('body')
const navSubItems = document.querySelectorAll('.nav__item--sub')

try {
    const faqButtons = document.querySelectorAll('.faq__button')

    faqButtons.forEach((button) => {
        button.addEventListener('click', function (event) {
            event.preventDefault()

            button.parentNode.classList.toggle('_active')
        })
    })
} catch (e) {
    throw new Error(e)
}

burger.addEventListener('click', toggleBurger)

function toggleBurger() {
    if (burger.classList.contains('_active')) {
        burger.classList.remove('_active')
        navigation.classList.remove('_active')
        body.classList.remove('_lock')
    } else {
        burger.classList.add('_active')
        navigation.classList.add('_active')
        page.classList.add('_lock')
        body.classList.add('_lock')
    }
}

function toggleSubNav() {
    navSubItems.forEach((navItem) => {
        navItem.addEventListener('click', function () {
            if (window.innerWidth <= MOBILE_WIDTH) {
                this.classList.toggle('_active')
            }
        })
    })
}

toggleSubNav()

// WEBP format 

function testWebP(callback) {

	var webP = new Image()
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2)
	}
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
