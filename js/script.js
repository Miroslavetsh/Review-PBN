const MOBILE_WIDTH = 921

const burger = document.querySelector('.header__burger')
const navigation = document.querySelector('.nav')
const page = document.querySelector('.page')
const body = document.querySelector('body')
const preview = document.querySelector('.preview')
const navSubItems = document.querySelectorAll('.nav__item--sub')
const headerHeight = document.querySelector('.header').clientHeight

// Preview More Button

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

window.addEventListener('resize', () => {
    if (window.innerWidth > MOBILE_WIDTH && burger.classList.contains('_active')) {
        burger.classList.remove('_active')
        navigation.classList.remove('_active')
        page.classList.remove('_lock')
        body.classList.remove('_lock')
    }
})

toggleSubNav()

function toggleBurger() {
    if (burger.classList.contains('_active')) {
        burger.classList.remove('_active')
        navigation.classList.remove('_active')
        page.classList.remove('_lock')
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
} catch {}

// Tabs in seo block

try {
    const tabGroups = document.querySelectorAll('.tabGroup')

    for (let i = 0; i < tabGroups.length; i++) {
        const tabGroup = tabGroups[i]

        const tabsTriggers = tabGroup.querySelectorAll('.tabTrigger')
        const tabs = tabGroup.querySelectorAll('.tab')

        toggleTabState(tabsTriggers, tabs)
    }
} catch {}

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

try {
    const cookies = document.querySelector('.cookies')

    if (!localStorage.getItem('notificationAboutCookiesDisablingIsClosed')) {
        cookies.addEventListener('click', (event) => {
            if (event.target.classList.contains('cookiesClose')) {
                cookies.classList.add('_hidden')
                localStorage.setItem('notificationAboutCookiesDisablingIsClosed', true)
            }
        })
        setTimeout(() => {
            cookies.classList.remove('_hidden')
        }, 10000)
    }
} catch {}

// Table of Content Links

try {
    const tableOfContent = document.querySelector('.table')

    tableOfContent.addEventListener('click', (event) => {
        if (event.target.classList.contains('tableOfContentTrigger')) {
            tableOfContent.classList.toggle('_hidden')
        }
    })

    tableOfContent.querySelectorAll('.link').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault()

            let elementToScrollFromHref = document.querySelector(
                `${event.target.getAttribute('href')}`,
            )

            let offsetOfElementToScroll = offset(elementToScrollFromHref).top
            window.scrollTo({
                top: offsetOfElementToScroll - 120,
                behavior: 'smooth',
            })
        })
    })
} catch {}

//  Bonuses additional info

try {
    const bonuses = document.querySelector('.bonuses')
    const bonusesFromInner = bonuses.querySelectorAll('.bonus')
    bonusesFromInner.forEach((bonus) => {
        const bonusesHideButton = bonus.querySelector('.hideButton')

        bonusesHideButton.addEventListener('click', () => {
            bonus.querySelector('.bonus__hidden').classList.toggle('_hidden')
        })
    })
} catch {}

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
