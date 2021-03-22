const MOBILE_WIDTH = 921

const burger = document.querySelector('.header__burger')
const navigation = document.querySelector('.nav')
const page = document.querySelector('.page')
const body = document.querySelector('body')
const preview = document.querySelector('.preview')
const navSubItems = document.querySelectorAll('.nav__item--sub')
const headerHeight = document.querySelector('.header').clientHeight

try {
    let description = preview.querySelector('.preview__description')
    let showMoreButton = description.parentNode.querySelector('.showMore')

    showMoreButton.addEventListener('click', () => {
        description.classList.remove('_hidden')
        description.parentNode.removeChild(showMoreButton)
    })
} catch {}

// Burger with navigation changes

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

//  FAQ buttons changes

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

// Tabs in seo block

try {
    const tabsTriggers = document.querySelectorAll('.tabTrigger')
    const tabs = document.querySelectorAll('.tab')

    toggleTabState(tabsTriggers, tabs)
} catch {}

toggleSubNav()

function toggleTabState(tabsTriggers, tabs) {
    tabsTriggers.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            tabsTriggers.forEach((trg) => {
                trg.classList.remove('_active')
            })
            this.classList.toggle('_active')
            tabs.forEach((tab) => {
                if (tab.dataset['tab'] === trigger.dataset['trigger']) {
                    tab.classList.add('_active')
                } else {
                    tab.classList.remove('_active')
                }
            })
        })
    })
}

// Get offset

function offset(el) {
    let rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop

    return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft,
    }
}

// WEBP format 

function testWebP(callback) {

	var webP = new Image()
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2)
	}
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
