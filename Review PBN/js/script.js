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
            faqButtons.forEach((button) => {
                button.parentNode.classList.remove('_active')
            })
            event.preventDefault()

            this.parentNode.classList.add('_active')
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

// Cookies Label

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

// Data from server

try {
    if (window.location.pathname.indexOf('/ua/') !== -1) {
        let cashbackBonuses = getBonusesFrom(window.location.origin + '/ua/data/data-cashback.json')
        let freespinsBonuses = getBonusesFrom(
            window.location.origin + '/ua/data/data-freespins.json',
        )
        let highRollerBonuses = getBonusesFrom(
            window.location.origin + '/ua/data/data-high-roller.json',
        )
        let matchDepositsBonuses = getBonusesFrom(
            window.location.origin + '/ua/data/data-match-deposit.json',
        )
        let noDepositsBonuses = getBonusesFrom(
            window.location.origin + '/ua/data/data-no-deposits.json',
        )
        let reloadBonuses = getBonusesFrom(window.location.origin + '/ua/data/data-reload.json')
        let welcomeBonuses = getBonusesFrom(window.location.origin + '/ua/data/data-welcome.json')
        let bingoBonuses = getBonusesFrom(window.location.origin + '/ua/data/data-bingo.json')
        let downloadBonuses = getBonusesFrom(window.location.origin + '/ua/data/data-download.json')
        let instantBonuses = getBonusesFrom(window.location.origin + '/ua/data/data-instant.json')
        let liveBonuses = getBonusesFrom(window.location.origin + '/ua/data/data-live.json')
        let mobileBonuses = getBonusesFrom(window.location.origin + '/ua/data/data-mobile.json')
        let sportsbookBonuses = getBonusesFrom(
            window.location.origin + '/ua/data/data-sportsbook.json',
        )

        insertBonusCardsFrom({
            bonusesData: cashbackBonuses,
            place: 'cashback',
            parameter: 'Кешбек бонус',
            slice: [0, 3],
        })

        insertBonusCardsFrom({
            bonusesData: freespinsBonuses,
            place: 'freespins',
            parameter: 'Фріспіни',
            slice: [0, 3],
        })

        insertBonusCardsFrom({
            bonusesData: highRollerBonuses,
            place: 'high-roller',
            parameter: 'Бонус для хайролерів',
            slice: [0, 3],
        })

        insertBonusCardsFrom({
            bonusesData: matchDepositsBonuses,
            place: 'match-deposit',
            parameter: 'Бонус на депозит',
            slice: [0, 3],
        })

        insertBonusCardsFrom({
            bonusesData: noDepositsBonuses,
            place: 'no-deposits',
            parameter: 'Бездепозитний бонус',
            slice: [0, 3],
        })

        insertBonusCardsFrom({
            bonusesData: reloadBonuses,
            place: 'reload',
            parameter: 'Релоад бонус',
            slice: [0, 3],
        })

        insertBonusCardsFrom({
            bonusesData: welcomeBonuses,
            place: 'welcome',
            parameter: 'Привітальний бонус',
            slice: [0, 3],
        })

        // Filters Bonuses

        insertBonusCardsFrom({
            bonusesData: bingoBonuses,
            place: 'bingo',
            slice: [0, 10],
        })

        insertBonusCardsFrom({
            bonusesData: downloadBonuses,
            place: 'download',
            slice: [0, 10],
        })

        insertBonusCardsFrom({
            bonusesData: instantBonuses,
            place: 'instant',
            slice: [0, 10],
        })

        insertBonusCardsFrom({
            bonusesData: liveBonuses,
            place: 'live',
            slice: [0, 10],
        })

        insertBonusCardsFrom({
            bonusesData: mobileBonuses,
            place: 'mobile',
            slice: [0, 10],
        })

        insertBonusCardsFrom({
            bonusesData: sportsbookBonuses,
            place: 'sportsbook',
            slice: [0, 10],
        })

        async function getBonusesFrom(url) {
            let response = await fetch(url)
            let bonusesArray = await response.json()

            return bonusesArray
        }

        function makeBonusCard(element, parameter = 'Бонус') {
            let ul = Object.values(element.additional).map((elem) => `<li>${elem}</li>`)
            parameter = element.bonusType || parameter

            return `
            <div class="bonus">
                <div class="bonus__visible">
                    <div class="bonus__img">
                        <img src="${element.imgSrc}" />
                        <div class="bonus__text">
                            <h4 class="bonus__name">
                                ${element.casinoName || 'N/A'}
                            </h4>
                            
                            ${
                                element.casinoExclusive
                                    ? `<p class="bonus__exclusive">Cashable</p>`
                                    : ''
                            }

                            <span class="bonus__bonus">${
                                element.bonusType ? parameter : parameter + ':'
                            }
                                <strong>
                                    ${element.casinoBonus || ''}
                                </strong>
                            </span>
                        </div>
                    </div>

                    <div class="bonus__requirements">
                        <h4 class="bonus__title">
                            Мінімальний депозит:
                            <span>
                                ${
                                    element.casinoItems['item-1']
                                        .toLowerCase()
                                        .trim()
                                        .replace('мінімальний депозит:', '') || '&ensp;N/A'
                                }
                            </span>

                            <svg xmlns="http://www.w3.org/2000/svg" id="main-icons_min-dep" viewBox="0 0 16 16">
                                <g clip-path="">
                                    <path d="M6.54547 4.70774C6.54547 5.90335 8.92365 6.52909 11.2728 6.52909C13.6219 6.52909 16 5.90335 16 4.70774C16 2.3165 6.54547 2.3165 6.54547 4.70774Z"></path>
                                    <path d="M15.8246 6.47182C15.7163 6.40637 15.5803 6.40173 15.4677 6.46081C14.4883 6.97449 12.9986 7.25765 11.2728 7.25765C9.5469 7.25765 8.0572 6.97449 7.0778 6.46081C6.96523 6.40177 6.82921 6.40637 6.7209 6.47182C6.61188 6.53762 6.54547 6.65608 6.54547 6.78345V6.89336C6.54547 8.08896 8.92365 8.71469 11.2728 8.71469C13.6219 8.71469 16 8.08896 16 6.89336V6.78345C16 6.65608 15.9336 6.53762 15.8246 6.47182Z"></path>
                                    <path d="M2.18185 11.9931C2.18185 13.1888 4.56004 13.8145 6.90914 13.8145C9.25824 13.8145 11.6364 13.1887 11.6364 11.9931C11.6364 9.6019 2.18185 9.6019 2.18185 11.9931Z"></path>
                                    <path d="M11.461 13.7573C11.3523 13.6922 11.2167 13.6873 11.1041 13.7463C10.1247 14.26 8.63499 14.5432 6.90914 14.5432C5.18329 14.5432 3.69358 14.26 2.71418 13.7463C2.60162 13.6873 2.46559 13.6923 2.35729 13.7573C2.24826 13.8231 2.18185 13.9416 2.18185 14.069V14.1789C2.18185 15.3745 4.56004 16.0002 6.90914 16.0002C9.25824 16.0002 11.6364 15.3745 11.6364 14.1789V14.069C11.6364 13.9416 11.57 13.8231 11.461 13.7573Z"></path>
                                    <path d="M4.72729 3.6148C5.2184 3.6148 5.70955 3.58705 6.18716 3.53193C6.26493 3.52303 6.33774 3.48925 6.39491 3.43552C6.94569 2.91614 7.88673 2.53303 9.11615 2.32777C9.24614 2.30605 9.35445 2.21571 9.39884 2.09121C9.43647 1.98628 9.45458 1.88881 9.45458 1.79346C9.45454 -0.597814 0 -0.597814 0 1.79343C0 2.98906 2.37818 3.6148 4.72729 3.6148Z"></path>
                                    <path d="M4.72729 5.80068C5.02841 5.80068 5.32211 5.79035 5.60656 5.7715C5.72128 5.76366 5.82532 5.7025 5.88781 5.60571C5.94996 5.50931 5.96308 5.38873 5.92333 5.28093C5.85266 5.0906 5.81823 4.90313 5.82 4.68829C5.82 4.58868 5.77916 4.49336 5.70706 4.4247C5.63533 4.35604 5.53412 4.31442 5.43894 4.32437C5.20136 4.33576 4.96378 4.34357 4.72729 4.34357C3.00143 4.34357 1.51173 4.06041 0.53233 3.54672C0.419762 3.48768 0.283739 3.49232 0.175432 3.55774C0.0664091 3.6236 0 3.74207 0 3.86943V3.97934C0 5.17498 2.37818 5.80068 4.72729 5.80068Z"></path>
                                    <path d="M4.72729 7.98622C5.02841 7.98622 5.32211 7.97589 5.60656 7.95704C5.72128 7.9492 5.82532 7.88804 5.88781 7.79125C5.94996 7.69484 5.96308 7.57427 5.92333 7.46647C5.85266 7.27614 5.81823 7.08868 5.81823 6.87384C5.81823 6.77422 5.77739 6.6789 5.70529 6.61025C5.63356 6.54159 5.53412 6.50245 5.43716 6.50992C5.2003 6.5213 4.96344 6.52911 4.72729 6.52911C3.00143 6.52911 1.51173 6.24595 0.53233 5.73227C0.419762 5.67323 0.283739 5.67786 0.175432 5.74328C0.0664091 5.80915 0 5.92761 0 6.05494V6.16485C0 7.36048 2.37818 7.98622 4.72729 7.98622Z"></path>
                                    <path d="M15.8246 10.843C15.7156 10.7765 15.5803 10.773 15.4677 10.832C14.7834 11.191 13.8207 11.4417 12.684 11.5567C12.4922 11.5762 12.3555 11.8003 12.3636 11.9932C12.3636 12.1778 12.3338 12.3542 12.2727 12.5317C12.2322 12.6495 12.2546 12.7801 12.332 12.8775C12.4017 12.9647 12.5064 13.0148 12.6165 13.0148C12.6293 13.0148 12.6424 13.0141 12.6556 13.0127C14.7497 12.7864 16 12.133 16 11.2646V11.1547C16 11.0273 15.9336 10.9089 15.8246 10.843Z"></path>
                                    <path d="M6.90908 9.4433L7.15021 9.44756C7.15235 9.44756 7.15447 9.44756 7.15661 9.44756C7.32635 9.44756 7.47373 9.32981 7.51136 9.16369C7.54937 8.99507 7.46415 8.82325 7.30716 8.75173L7.2294 8.71685C7.17755 8.69408 7.12535 8.67131 7.07705 8.64605C6.96376 8.58663 6.82955 8.59198 6.72053 8.65777C6.61185 8.72357 6.54547 8.8417 6.54547 8.96903V9.07894C6.54544 9.28038 6.70808 9.4433 6.90908 9.4433Z"></path>
                                    <path d="M15.8246 8.65737C15.7163 8.59192 15.5803 8.58728 15.4677 8.64636C14.4883 9.16004 12.9986 9.4432 11.2728 9.4432L11.0327 9.43856C10.8861 9.42612 10.7106 9.55525 10.6733 9.72349C10.6357 9.89176 10.7209 10.0632 10.8775 10.1344C11.2714 10.3136 11.5931 10.5267 11.8335 10.7676C11.902 10.8359 11.9944 10.8739 12.0906 10.8739C12.0981 10.8739 12.1059 10.8736 12.1137 10.8732C13.9063 10.7594 16.0001 10.2211 16.0001 9.0789V8.96899C16 8.84163 15.9336 8.72317 15.8246 8.65737Z"></path>
                                    <path d="M3.04118 10.0587C3.08663 10.0587 3.1321 10.0501 3.17506 10.033C3.8157 9.77941 4.59692 9.60473 5.4975 9.51404C5.68927 9.49485 5.82634 9.25222 5.81816 9.0594C5.81816 8.95979 5.77732 8.86447 5.70522 8.79581C5.63349 8.72715 5.53405 8.6905 5.43709 8.69548C5.20023 8.70686 4.96337 8.71467 4.72722 8.71467C3.00137 8.71467 1.51166 8.43151 0.532262 7.91782C0.419693 7.85877 0.283671 7.86341 0.175364 7.92883C0.0664091 7.99466 0 8.11309 0 8.24046V8.35037C0 9.1554 1.11791 9.79288 2.99076 10.0551C3.00747 10.0576 3.02451 10.0587 3.04118 10.0587Z"></path>
                                </g>
                            </svg>
                        </h4>
                        <h4 class="bonus__title">Вейджер:
                            <span>
                                ${
                                    element.casinoItems['item-2']
                                        .toLowerCase()
                                        .trim()
                                        .replace('вейджер:', '') || '&ensp;N/A'
                                }
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" id="main-icons_wager" viewBox="0 0 16 16">
                                <path d="M15.4515 5.1047C15.1239 4.26277 14.6614 3.48986 14.0849 2.81436C12.8916 1.41535 11.2255 0.438028 9.33334 0.120056C8.89893 0.0468837 8.45521 0 8 0C7.54476 0 7.10101 0.0468837 6.66666 0.120056C4.77447 0.438028 3.10886 1.41508 1.9151 2.81383C1.33903 3.48962 0.876524 4.26226 0.548975 5.10416C0.198921 6.00316 0 6.97733 0 8C0 8.93985 0.170288 9.83777 0.468201 10.6755C0.771304 11.5276 1.20933 12.3146 1.76507 13.006C2.96667 14.5008 4.69369 15.5484 6.66666 15.8799C7.10101 15.9531 7.54476 16 8 16C8.45521 16 8.89893 15.9531 9.33334 15.8799C11.3062 15.5484 13.0333 14.5008 14.2349 13.0062C14.7906 12.3149 15.2287 11.5279 15.5317 10.6758C15.8296 9.83804 16 8.93985 16 8C16 6.9776 15.801 6.00342 15.4515 5.1047ZM14.513 5.64614L13.114 6.45364C12.849 5.57866 12.3651 4.79898 11.726 4.17603L13.138 3.36092C13.7343 4.02085 14.2042 4.79403 14.513 5.64614ZM12.2776 8C12.2776 10.3586 10.3588 12.2776 8 12.2776C5.64111 12.2776 3.72236 10.3586 3.72236 8C3.72236 5.64145 5.64115 3.7224 8 3.7224C10.3588 3.7224 12.2776 5.64145 12.2776 8ZM8 1.06667C8.45621 1.06667 8.90154 1.11382 9.33334 1.19818V2.83097C8.90623 2.72056 8.4609 2.65573 8 2.65573C7.53903 2.65573 7.0937 2.72059 6.66666 2.83097V1.19818C7.09839 1.11382 7.54372 1.06667 8 1.06667ZM2.86245 3.36069L4.27445 4.17603C3.63543 4.79871 3.15105 5.57839 2.88593 6.45337L1.48695 5.64587C1.79632 4.79376 2.26612 4.02058 2.86245 3.36069ZM1.40624 10.1339L2.82602 9.31435C3.05206 10.2037 3.49947 11.0034 4.10932 11.6526L2.70308 12.4643C2.13073 11.786 1.68644 10.9972 1.40624 10.1339ZM8 14.9333C7.54372 14.9333 7.09839 14.8862 6.66666 14.8018V13.169C7.0937 13.2795 7.53903 13.3443 8 13.3443C8.4609 13.3443 8.90623 13.2795 9.33334 13.169V14.8018C8.90154 14.8862 8.45621 14.9333 8 14.9333ZM13.2963 12.4643L11.8906 11.6526C12.5005 11.0037 12.9479 10.2037 13.1739 9.31435L14.5937 10.1341C14.3135 10.9972 13.8692 11.786 13.2963 12.4643Z"></path>
                                <path d="M8.45205 7.41879C7.77183 7.1628 7.49214 6.99483 7.49214 6.73074C7.49214 6.5068 7.65988 6.28286 8.18015 6.28286C8.48014 6.28286 8.72394 6.33263 8.9177 6.393C9.02758 6.42713 9.14683 6.4144 9.2479 6.35811C9.34843 6.30212 9.42133 6.20708 9.44997 6.09533L9.45727 6.06777C9.52234 5.81282 9.36923 5.55288 9.11401 5.48701C8.91817 5.43624 8.68536 5.39927 8.40416 5.38674V5.08639C8.40416 4.88224 8.25286 4.70365 8.04962 4.68463C7.81654 4.66282 7.62026 4.84594 7.62026 5.0748V5.44274C6.76407 5.61068 6.2682 6.16277 6.2682 6.86667C6.2682 7.64273 6.85204 8.04271 7.7083 8.33071C8.30001 8.53071 8.5562 8.72266 8.5562 9.02654C8.5562 9.34659 8.24425 9.52267 7.78797 9.52267C7.46143 9.52267 7.15357 9.45626 6.88643 9.36149C6.77498 9.32164 6.65151 9.33125 6.54679 9.38697C6.44214 9.4427 6.36555 9.53955 6.33639 9.65471L6.33277 9.66828C6.26298 9.9409 6.42024 10.2198 6.68952 10.3011C6.95358 10.3805 7.26405 10.4365 7.58014 10.4506V10.8079C7.58014 11.0243 7.75562 11.1998 7.97209 11.1998C8.18856 11.1998 8.36404 11.0243 8.36404 10.8079V10.3946C9.28383 10.2347 9.788 9.62658 9.788 8.91462C9.788 8.19485 9.40415 7.75475 8.45205 7.41879Z"></path>
                            </svg>
                        </h4>
                        <h4 class="bonus__title">Вичерпано у:
                            <span>
                                ${
                                    element.casinoItems['item-3']
                                        .toLowerCase()
                                        .trim()
                                        .replace('Вичерпано у:', '') || '&ensp;N/A'
                                }
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" id="main-icons_timer" viewBox="0 0 14 16">
                                <path d="M11.8467 4.76283L12.8047 3.80483L11.862 2.86183L10.8372 3.88667C9.90094 3.22319 8.80843 2.81429 7.66666 2.7V1.33333H8.99999V0H4.99999V1.33333H6.33332V2.7C5.19155 2.81429 4.09905 3.22319 3.16282 3.88667L2.13799 2.86183L1.19532 3.80483L2.15332 4.76283C1.25909 5.70963 0.661751 6.89762 0.435079 8.18008C0.208407 9.46254 0.362327 10.7833 0.877832 11.9793C1.39334 13.1753 2.24785 14.194 3.33584 14.9098C4.42383 15.6256 5.69765 16.0071 6.99999 16.0071C8.30233 16.0071 9.57615 15.6256 10.6641 14.9098C11.7521 14.194 12.6066 13.1753 13.1222 11.9793C13.6377 10.7833 13.7916 9.46254 13.5649 8.18008C13.3382 6.89762 12.7409 5.70963 11.8467 4.76283ZM6.99999 14.6667C5.94516 14.6667 4.91401 14.3539 4.03695 13.7678C3.15989 13.1818 2.4763 12.3489 2.07263 11.3743C1.66897 10.3998 1.56335 9.32742 1.76914 8.29285C1.97492 7.25829 2.48287 6.30798 3.22875 5.5621C3.97463 4.81622 4.92494 4.30827 5.95951 4.10248C6.99408 3.89669 8.06643 4.00231 9.04097 4.40598C10.0155 4.80964 10.8485 5.49323 11.4345 6.37029C12.0205 7.24735 12.3333 8.2785 12.3333 9.33333C12.3317 10.7473 11.7693 12.103 10.7695 13.1028C9.76962 14.1027 8.41399 14.6651 6.99999 14.6667Z"></path>
                                <path d="M6.99999 5.3335V9.3335H2.99999C2.99999 10.1246 3.23459 10.898 3.67411 11.5558C4.11364 12.2136 4.73835 12.7263 5.46926 13.029C6.20016 13.3318 7.00443 13.411 7.78035 13.2566C8.55628 13.1023 9.26901 12.7213 9.82842 12.1619C10.3878 11.6025 10.7688 10.8898 10.9231 10.1139C11.0775 9.33793 10.9983 8.53367 10.6955 7.80276C10.3928 7.07186 9.88007 6.44714 9.22227 6.00762C8.56448 5.56809 7.79112 5.3335 6.99999 5.3335Z"></path>
                            </svg>
                        </h4>
                        <h4 class="bonus__title">
                            Бонус Код:
                            <span class="not-required">
                                ${
                                    element.casinoItems['item-4']
                                        .toLowerCase()
                                        .trim()
                                        .replace('бонус код:', '') || '&ensp;N/A'
                                }
                            </span>

                            <svg xmlns="http://www.w3.org/2000/svg" id="main-icons_bonus-code" viewBox="0 0 16 16">
                                <path d="M4.5 6.28564C4.77614 6.28564 5 6.06179 5 5.78564C5 5.5095 4.77614 5.28564 4.5 5.28564C4.22386 5.28564 4 5.5095 4 5.78564C4 6.06179 4.22386 6.28564 4.5 6.28564Z"></path>
                                <path d="M15.5 4.28564C14.673 4.28564 14 3.61264 14 2.78564C14 2.50964 13.776 2.28564 13.5 2.28564H11V4.28564H10V2.28564H2.5C2.224 2.28564 2 2.50964 2 2.78564C2 3.61264 1.327 4.28564 0.5 4.28564C0.224 4.28564 0 4.50964 0 4.78564V10.7856C0 11.0616 0.224 11.2856 0.5 11.2856C1.327 11.2856 2 11.9586 2 12.7856C2 13.0616 2.224 13.2856 2.5 13.2856H10V11.2856H11V13.2856H13.5C13.776 13.2856 14 13.0616 14 12.7856C14 11.9586 14.673 11.2856 15.5 11.2856C15.776 11.2856 16 11.0616 16 10.7856V4.78564C16 4.50964 15.776 4.28564 15.5 4.28564ZM4.5 4.28564C5.327 4.28564 6 4.95864 6 5.78564C6 6.61264 5.327 7.28564 4.5 7.28564C3.673 7.28564 3 6.61264 3 5.78564C3 4.95864 3.673 4.28564 4.5 4.28564ZM7.5 11.2856C6.673 11.2856 6 10.6126 6 9.78564C6 8.95864 6.673 8.28564 7.5 8.28564C8.327 8.28564 9 8.95864 9 9.78564C9 10.6126 8.327 11.2856 7.5 11.2856ZM8.885 5.10664L3.885 11.1066C3.785 11.2236 3.643 11.2856 3.5 11.2856C3.387 11.2856 3.274 11.2476 3.18 11.1696C2.968 10.9926 2.939 10.6776 3.116 10.4656L8.116 4.46564C8.293 4.25364 8.607 4.22564 8.821 4.40164C9.033 4.57864 9.061 4.89364 8.885 5.10664ZM11 10.2856H10V8.28564H11V10.2856ZM11 7.28564H10V5.28564H11V7.28564Z"></path>
                                <path d="M7.5 10.2856C7.77614 10.2856 8 10.0618 8 9.78564C8 9.5095 7.77614 9.28564 7.5 9.28564C7.22386 9.28564 7 9.5095 7 9.78564C7 10.0618 7.22386 10.2856 7.5 10.2856Z"></path>
                            </svg>
                        </h4>
                    </div>

                    <div class="bonus__rate">
                        <div class="bonus__stars">
                            <svg width="18" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M17.657 7.708c-.116-.407-.434-.696-.81-.735l-5.11-.526-2.02-5.367C9.567.686 9.228.432 8.85.432c-.376 0-.716.254-.865.649l-2.02 5.366-5.11.526c-.376.04-.693.328-.81.735-.116.407-.009.853.275 1.134l3.863 3.845-1.14 5.693c-.083.419.06.852.367 1.103a.866.866 0 00.55.203.855.855 0 00.483-.152l4.407-2.99 4.406 2.99c.323.22.73.2 1.034-.051.307-.252.45-.685.366-1.103l-1.139-5.693 3.863-3.844c.284-.282.392-.728.276-1.135z" fill="url(#paint0_linear)"/></g><defs><linearGradient id="paint0_linear" x1="0" y1=".432" x2="19.793" y2="2.896" gradientUnits="userSpaceOnUse"><stop stop-color="#DB7515"/><stop offset="1" stop-color="#FCCD6D"/></linearGradient><clipPath id="clip0"><path fill="#fff" d="M0 0h17.703v20.092H0z"/></clipPath></defs></svg>
                            <svg width="18" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M17.657 7.708c-.116-.407-.434-.696-.81-.735l-5.11-.526-2.02-5.367C9.567.686 9.228.432 8.85.432c-.376 0-.716.254-.865.649l-2.02 5.366-5.11.526c-.376.04-.693.328-.81.735-.116.407-.009.853.275 1.134l3.863 3.845-1.14 5.693c-.083.419.06.852.367 1.103a.866.866 0 00.55.203.855.855 0 00.483-.152l4.407-2.99 4.406 2.99c.323.22.73.2 1.034-.051.307-.252.45-.685.366-1.103l-1.139-5.693 3.863-3.844c.284-.282.392-.728.276-1.135z" fill="url(#paint0_linear)"/></g><defs><linearGradient id="paint0_linear" x1="0" y1=".432" x2="19.793" y2="2.896" gradientUnits="userSpaceOnUse"><stop stop-color="#DB7515"/><stop offset="1" stop-color="#FCCD6D"/></linearGradient><clipPath id="clip0"><path fill="#fff" d="M0 0h17.703v20.092H0z"/></clipPath></defs></svg>
                            <svg width="18" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M17.657 7.708c-.116-.407-.434-.696-.81-.735l-5.11-.526-2.02-5.367C9.567.686 9.228.432 8.85.432c-.376 0-.716.254-.865.649l-2.02 5.366-5.11.526c-.376.04-.693.328-.81.735-.116.407-.009.853.275 1.134l3.863 3.845-1.14 5.693c-.083.419.06.852.367 1.103a.866.866 0 00.55.203.855.855 0 00.483-.152l4.407-2.99 4.406 2.99c.323.22.73.2 1.034-.051.307-.252.45-.685.366-1.103l-1.139-5.693 3.863-3.844c.284-.282.392-.728.276-1.135z" fill="url(#paint0_linear)"/></g><defs><linearGradient id="paint0_linear" x1="0" y1=".432" x2="19.793" y2="2.896" gradientUnits="userSpaceOnUse"><stop stop-color="#DB7515"/><stop offset="1" stop-color="#FCCD6D"/></linearGradient><clipPath id="clip0"><path fill="#fff" d="M0 0h17.703v20.092H0z"/></clipPath></defs></svg>
                            <svg width="18" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M17.657 7.708c-.116-.407-.434-.696-.81-.735l-5.11-.526-2.02-5.367C9.567.686 9.228.432 8.85.432c-.376 0-.716.254-.865.649l-2.02 5.366-5.11.526c-.376.04-.693.328-.81.735-.116.407-.009.853.275 1.134l3.863 3.845-1.14 5.693c-.083.419.06.852.367 1.103a.866.866 0 00.55.203.855.855 0 00.483-.152l4.407-2.99 4.406 2.99c.323.22.73.2 1.034-.051.307-.252.45-.685.366-1.103l-1.139-5.693 3.863-3.844c.284-.282.392-.728.276-1.135z" fill="url(#paint0_linear)"/></g><defs><linearGradient id="paint0_linear" x1="0" y1=".432" x2="19.793" y2="2.896" gradientUnits="userSpaceOnUse"><stop stop-color="#DB7515"/><stop offset="1" stop-color="#FCCD6D"/></linearGradient><clipPath id="clip0"><path fill="#fff" d="M0 0h17.703v20.092H0z"/></clipPath></defs></svg>
                            <svg width="18" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M17.657 7.708c-.116-.407-.434-.696-.81-.735l-5.11-.526-2.02-5.367C9.567.686 9.228.432 8.85.432c-.376 0-.716.254-.865.649l-2.02 5.366-5.11.526c-.376.04-.693.328-.81.735-.116.407-.009.853.275 1.134l3.863 3.845-1.14 5.693c-.083.419.06.852.367 1.103a.866.866 0 00.55.203.855.855 0 00.483-.152l4.407-2.99 4.406 2.99c.323.22.73.2 1.034-.051.307-.252.45-.685.366-1.103l-1.139-5.693 3.863-3.844c.284-.282.392-.728.276-1.135z" fill="url(#paint0_linear)"/></g><defs><linearGradient id="paint0_linear" x1="0" y1=".432" x2="19.793" y2="2.896" gradientUnits="userSpaceOnUse"><stop stop-color="#DB7515"/><stop offset="1" stop-color="#FCCD6D"/></linearGradient><clipPath id="clip0"><path fill="#fff" d="M0 0h17.703v20.092H0z"/></clipPath></defs></svg>
                        </div>

                        <div class="bonus__rating">98/100</div>
                        
                        <div class="bonus__ukr">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                id="Capa_1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 512 512"
                                style="enable-background: new 0 0 512 512"
                                xml:space="preserve"
                            >
                                <rect y="85.337" style="fill: #ffda44" width="512" height="341.326" />
                                <rect y="85.337" style="fill: #338af3" width="512" height="170.663" />
                                <g>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Capa_1"
                                        x="350"
                                        y="-10"
                                        viewBox="0 0 1000 1000"
                                        style="enable-background: new 0 0 367.805 367.805"
                                        xml:space="preserve"
                                    >
                                        <g style="width: 20px; height: 20px">
                                            <path
                                                style="fill: #3bb54a"
                                                d="M183.903,0.001c101.566,0,183.902,82.336,183.902,183.902s-82.336,183.902-183.902,183.902      S0.001,285.469,0.001,183.903l0,0C-0.288,82.625,81.579,0.29,182.856,0.001C183.205,0,183.554,0,183.903,0.001z"
                                                width="10"
                                                height="10"
                                            />
                                            <polygon
                                                style="fill: #d4e1f4"
                                                points="285.78,133.225 155.168,263.837 82.025,191.217 111.805,161.96 155.168,204.801       255.001,103.968"
                                            />
                                        </g>
                                    </svg>
                                </g>
                            </svg>

                            <p>Приймає гравців з України.</p>
                        </div>
                    </div>

                    <div class="bonus__buttons">
                        <a target="_blank" href="${
                            element['ref-link'] ? element['ref-link'] : '#'
                        }" class="button button--purple">Взяти бонус</a>
                        <button class="bonus__hide hideButton">Додатково
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0"
                                />
                                <path
                                    d="m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
                                />
                                <path
                                    d="m256 384c-8.832031 0-16-7.167969-16-16v-224c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v224c0 8.832031-7.167969 16-16 16zm0 0"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Hidden -->
                
                <div class="bonus__hidden _hidden">
                    <p class="bonus__caption">Функції</p>
                    <ul>
                        ${ul.join().replaceAll(',', '\n')}
                    </ul>
                </div>
            </div>
        `
        }
    } else {
        let cashbackBonuses = getBonusesFrom('../data/data-cashback.json')
        let freespinsBonuses = getBonusesFrom('../data/data-freespins.json')
        let highRollerBonuses = getBonusesFrom('../data/data-high-roller.json')
        let matchDepositsBonuses = getBonusesFrom('../data/data-match-deposit.json')
        let noDepositsBonuses = getBonusesFrom('../data/data-no-deposits.json')
        let reloadBonuses = getBonusesFrom('../data/data-reload.json')
        let welcomeBonuses = getBonusesFrom('../data/data-welcome.json')
        let bingoBonuses = getBonusesFrom('../data/data-bingo.json')
        let downloadBonuses = getBonusesFrom('../data/data-download.json')
        let instantBonuses = getBonusesFrom('../data/data-instant.json')
        let liveBonuses = getBonusesFrom('../data/data-live.json')
        let mobileBonuses = getBonusesFrom('../data/data-mobile.json')
        let sportsbookBonuses = getBonusesFrom('../data/data-sportsbook.json')

        insertBonusCardsFrom({
            bonusesData: cashbackBonuses,
            place: 'cashback',
            parameter: 'Кешбэк бонус',
            slice: [0, 3],
        })

        insertBonusCardsFrom({
            bonusesData: freespinsBonuses,
            place: 'freespins',
            parameter: 'Фриспины',
            slice: [0, 3],
        })

        insertBonusCardsFrom({
            bonusesData: highRollerBonuses,
            place: 'high-roller',
            parameter: 'Бонус для хайроллеров',
            slice: [0, 3],
        })

        insertBonusCardsFrom({
            bonusesData: matchDepositsBonuses,
            place: 'match-deposit',
            parameter: 'Бонус на депозит',
            slice: [0, 3],
        })

        insertBonusCardsFrom({
            bonusesData: noDepositsBonuses,
            place: 'no-deposits',
            parameter: 'Бездепозитный бонус',
            slice: [0, 3],
        })

        insertBonusCardsFrom({
            bonusesData: reloadBonuses,
            place: 'reload',
            parameter: 'Релоад бонус',
            slice: [0, 3],
        })

        insertBonusCardsFrom({
            bonusesData: welcomeBonuses,
            place: 'welcome',
            parameter: 'Приветственный бонус',
            slice: [0, 3],
        })

        // Filters Bonuses

        insertBonusCardsFrom({
            bonusesData: bingoBonuses,
            place: 'bingo',
            slice: [0, 10],
        })

        insertBonusCardsFrom({
            bonusesData: downloadBonuses,
            place: 'download',
            slice: [0, 10],
        })

        insertBonusCardsFrom({
            bonusesData: instantBonuses,
            place: 'instant',
            slice: [0, 10],
        })

        insertBonusCardsFrom({
            bonusesData: liveBonuses,
            place: 'live',
            slice: [0, 10],
        })

        insertBonusCardsFrom({
            bonusesData: mobileBonuses,
            place: 'mobile',
            slice: [0, 10],
        })

        insertBonusCardsFrom({
            bonusesData: sportsbookBonuses,
            place: 'sportsbook',
            slice: [0, 10],
        })

        async function getBonusesFrom(url) {
            let response = await fetch(url)
            let bonusesArray = await response.json()

            return bonusesArray
        }

        function makeBonusCard(element, parameter = 'Бонус') {
            let ul = Object.values(element.additional).map((elem) => `<li>${elem}</li>`)
            parameter = element.bonusType || parameter

            return `
            <div class="bonus">
                <div class="bonus__visible">
                    <div class="bonus__img">
                        <img src="${element.imgSrc}" />
                        <div class="bonus__text">
                            <h4 class="bonus__name">
                                ${element.casinoName || 'N/A'}
                            </h4>
                            
                            ${
                                element.casinoExclusive
                                    ? `<p class="bonus__exclusive">Cashable</p>`
                                    : ''
                            }

                            <span class="bonus__bonus">${
                                element.bonusType ? parameter : parameter + ':'
                            }
                                <strong>
                                    ${element.casinoBonus || ''}
                                </strong>
                            </span>
                        </div>
                    </div>

                    <div class="bonus__requirements">
                        <h4 class="bonus__title">
                            Минимальный депозит:
                            <span>
                                ${
                                    element.casinoItems['item-1']
                                        .toLowerCase()
                                        .trim()
                                        .replace('минимальный депозит:', '') || '&ensp;N/A'
                                }
                            </span>

                            <svg xmlns="http://www.w3.org/2000/svg" id="main-icons_min-dep" viewBox="0 0 16 16">
                                <g clip-path="">
                                    <path d="M6.54547 4.70774C6.54547 5.90335 8.92365 6.52909 11.2728 6.52909C13.6219 6.52909 16 5.90335 16 4.70774C16 2.3165 6.54547 2.3165 6.54547 4.70774Z"></path>
                                    <path d="M15.8246 6.47182C15.7163 6.40637 15.5803 6.40173 15.4677 6.46081C14.4883 6.97449 12.9986 7.25765 11.2728 7.25765C9.5469 7.25765 8.0572 6.97449 7.0778 6.46081C6.96523 6.40177 6.82921 6.40637 6.7209 6.47182C6.61188 6.53762 6.54547 6.65608 6.54547 6.78345V6.89336C6.54547 8.08896 8.92365 8.71469 11.2728 8.71469C13.6219 8.71469 16 8.08896 16 6.89336V6.78345C16 6.65608 15.9336 6.53762 15.8246 6.47182Z"></path>
                                    <path d="M2.18185 11.9931C2.18185 13.1888 4.56004 13.8145 6.90914 13.8145C9.25824 13.8145 11.6364 13.1887 11.6364 11.9931C11.6364 9.6019 2.18185 9.6019 2.18185 11.9931Z"></path>
                                    <path d="M11.461 13.7573C11.3523 13.6922 11.2167 13.6873 11.1041 13.7463C10.1247 14.26 8.63499 14.5432 6.90914 14.5432C5.18329 14.5432 3.69358 14.26 2.71418 13.7463C2.60162 13.6873 2.46559 13.6923 2.35729 13.7573C2.24826 13.8231 2.18185 13.9416 2.18185 14.069V14.1789C2.18185 15.3745 4.56004 16.0002 6.90914 16.0002C9.25824 16.0002 11.6364 15.3745 11.6364 14.1789V14.069C11.6364 13.9416 11.57 13.8231 11.461 13.7573Z"></path>
                                    <path d="M4.72729 3.6148C5.2184 3.6148 5.70955 3.58705 6.18716 3.53193C6.26493 3.52303 6.33774 3.48925 6.39491 3.43552C6.94569 2.91614 7.88673 2.53303 9.11615 2.32777C9.24614 2.30605 9.35445 2.21571 9.39884 2.09121C9.43647 1.98628 9.45458 1.88881 9.45458 1.79346C9.45454 -0.597814 0 -0.597814 0 1.79343C0 2.98906 2.37818 3.6148 4.72729 3.6148Z"></path>
                                    <path d="M4.72729 5.80068C5.02841 5.80068 5.32211 5.79035 5.60656 5.7715C5.72128 5.76366 5.82532 5.7025 5.88781 5.60571C5.94996 5.50931 5.96308 5.38873 5.92333 5.28093C5.85266 5.0906 5.81823 4.90313 5.82 4.68829C5.82 4.58868 5.77916 4.49336 5.70706 4.4247C5.63533 4.35604 5.53412 4.31442 5.43894 4.32437C5.20136 4.33576 4.96378 4.34357 4.72729 4.34357C3.00143 4.34357 1.51173 4.06041 0.53233 3.54672C0.419762 3.48768 0.283739 3.49232 0.175432 3.55774C0.0664091 3.6236 0 3.74207 0 3.86943V3.97934C0 5.17498 2.37818 5.80068 4.72729 5.80068Z"></path>
                                    <path d="M4.72729 7.98622C5.02841 7.98622 5.32211 7.97589 5.60656 7.95704C5.72128 7.9492 5.82532 7.88804 5.88781 7.79125C5.94996 7.69484 5.96308 7.57427 5.92333 7.46647C5.85266 7.27614 5.81823 7.08868 5.81823 6.87384C5.81823 6.77422 5.77739 6.6789 5.70529 6.61025C5.63356 6.54159 5.53412 6.50245 5.43716 6.50992C5.2003 6.5213 4.96344 6.52911 4.72729 6.52911C3.00143 6.52911 1.51173 6.24595 0.53233 5.73227C0.419762 5.67323 0.283739 5.67786 0.175432 5.74328C0.0664091 5.80915 0 5.92761 0 6.05494V6.16485C0 7.36048 2.37818 7.98622 4.72729 7.98622Z"></path>
                                    <path d="M15.8246 10.843C15.7156 10.7765 15.5803 10.773 15.4677 10.832C14.7834 11.191 13.8207 11.4417 12.684 11.5567C12.4922 11.5762 12.3555 11.8003 12.3636 11.9932C12.3636 12.1778 12.3338 12.3542 12.2727 12.5317C12.2322 12.6495 12.2546 12.7801 12.332 12.8775C12.4017 12.9647 12.5064 13.0148 12.6165 13.0148C12.6293 13.0148 12.6424 13.0141 12.6556 13.0127C14.7497 12.7864 16 12.133 16 11.2646V11.1547C16 11.0273 15.9336 10.9089 15.8246 10.843Z"></path>
                                    <path d="M6.90908 9.4433L7.15021 9.44756C7.15235 9.44756 7.15447 9.44756 7.15661 9.44756C7.32635 9.44756 7.47373 9.32981 7.51136 9.16369C7.54937 8.99507 7.46415 8.82325 7.30716 8.75173L7.2294 8.71685C7.17755 8.69408 7.12535 8.67131 7.07705 8.64605C6.96376 8.58663 6.82955 8.59198 6.72053 8.65777C6.61185 8.72357 6.54547 8.8417 6.54547 8.96903V9.07894C6.54544 9.28038 6.70808 9.4433 6.90908 9.4433Z"></path>
                                    <path d="M15.8246 8.65737C15.7163 8.59192 15.5803 8.58728 15.4677 8.64636C14.4883 9.16004 12.9986 9.4432 11.2728 9.4432L11.0327 9.43856C10.8861 9.42612 10.7106 9.55525 10.6733 9.72349C10.6357 9.89176 10.7209 10.0632 10.8775 10.1344C11.2714 10.3136 11.5931 10.5267 11.8335 10.7676C11.902 10.8359 11.9944 10.8739 12.0906 10.8739C12.0981 10.8739 12.1059 10.8736 12.1137 10.8732C13.9063 10.7594 16.0001 10.2211 16.0001 9.0789V8.96899C16 8.84163 15.9336 8.72317 15.8246 8.65737Z"></path>
                                    <path d="M3.04118 10.0587C3.08663 10.0587 3.1321 10.0501 3.17506 10.033C3.8157 9.77941 4.59692 9.60473 5.4975 9.51404C5.68927 9.49485 5.82634 9.25222 5.81816 9.0594C5.81816 8.95979 5.77732 8.86447 5.70522 8.79581C5.63349 8.72715 5.53405 8.6905 5.43709 8.69548C5.20023 8.70686 4.96337 8.71467 4.72722 8.71467C3.00137 8.71467 1.51166 8.43151 0.532262 7.91782C0.419693 7.85877 0.283671 7.86341 0.175364 7.92883C0.0664091 7.99466 0 8.11309 0 8.24046V8.35037C0 9.1554 1.11791 9.79288 2.99076 10.0551C3.00747 10.0576 3.02451 10.0587 3.04118 10.0587Z"></path>
                                </g>
                            </svg>
                        </h4>
                        <h4 class="bonus__title">Вейджер:
                            <span>
                                ${
                                    element.casinoItems['item-2']
                                        .toLowerCase()
                                        .trim()
                                        .replace('вейджер:', '') || '&ensp;N/A'
                                }
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" id="main-icons_wager" viewBox="0 0 16 16">
                                <path d="M15.4515 5.1047C15.1239 4.26277 14.6614 3.48986 14.0849 2.81436C12.8916 1.41535 11.2255 0.438028 9.33334 0.120056C8.89893 0.0468837 8.45521 0 8 0C7.54476 0 7.10101 0.0468837 6.66666 0.120056C4.77447 0.438028 3.10886 1.41508 1.9151 2.81383C1.33903 3.48962 0.876524 4.26226 0.548975 5.10416C0.198921 6.00316 0 6.97733 0 8C0 8.93985 0.170288 9.83777 0.468201 10.6755C0.771304 11.5276 1.20933 12.3146 1.76507 13.006C2.96667 14.5008 4.69369 15.5484 6.66666 15.8799C7.10101 15.9531 7.54476 16 8 16C8.45521 16 8.89893 15.9531 9.33334 15.8799C11.3062 15.5484 13.0333 14.5008 14.2349 13.0062C14.7906 12.3149 15.2287 11.5279 15.5317 10.6758C15.8296 9.83804 16 8.93985 16 8C16 6.9776 15.801 6.00342 15.4515 5.1047ZM14.513 5.64614L13.114 6.45364C12.849 5.57866 12.3651 4.79898 11.726 4.17603L13.138 3.36092C13.7343 4.02085 14.2042 4.79403 14.513 5.64614ZM12.2776 8C12.2776 10.3586 10.3588 12.2776 8 12.2776C5.64111 12.2776 3.72236 10.3586 3.72236 8C3.72236 5.64145 5.64115 3.7224 8 3.7224C10.3588 3.7224 12.2776 5.64145 12.2776 8ZM8 1.06667C8.45621 1.06667 8.90154 1.11382 9.33334 1.19818V2.83097C8.90623 2.72056 8.4609 2.65573 8 2.65573C7.53903 2.65573 7.0937 2.72059 6.66666 2.83097V1.19818C7.09839 1.11382 7.54372 1.06667 8 1.06667ZM2.86245 3.36069L4.27445 4.17603C3.63543 4.79871 3.15105 5.57839 2.88593 6.45337L1.48695 5.64587C1.79632 4.79376 2.26612 4.02058 2.86245 3.36069ZM1.40624 10.1339L2.82602 9.31435C3.05206 10.2037 3.49947 11.0034 4.10932 11.6526L2.70308 12.4643C2.13073 11.786 1.68644 10.9972 1.40624 10.1339ZM8 14.9333C7.54372 14.9333 7.09839 14.8862 6.66666 14.8018V13.169C7.0937 13.2795 7.53903 13.3443 8 13.3443C8.4609 13.3443 8.90623 13.2795 9.33334 13.169V14.8018C8.90154 14.8862 8.45621 14.9333 8 14.9333ZM13.2963 12.4643L11.8906 11.6526C12.5005 11.0037 12.9479 10.2037 13.1739 9.31435L14.5937 10.1341C14.3135 10.9972 13.8692 11.786 13.2963 12.4643Z"></path>
                                <path d="M8.45205 7.41879C7.77183 7.1628 7.49214 6.99483 7.49214 6.73074C7.49214 6.5068 7.65988 6.28286 8.18015 6.28286C8.48014 6.28286 8.72394 6.33263 8.9177 6.393C9.02758 6.42713 9.14683 6.4144 9.2479 6.35811C9.34843 6.30212 9.42133 6.20708 9.44997 6.09533L9.45727 6.06777C9.52234 5.81282 9.36923 5.55288 9.11401 5.48701C8.91817 5.43624 8.68536 5.39927 8.40416 5.38674V5.08639C8.40416 4.88224 8.25286 4.70365 8.04962 4.68463C7.81654 4.66282 7.62026 4.84594 7.62026 5.0748V5.44274C6.76407 5.61068 6.2682 6.16277 6.2682 6.86667C6.2682 7.64273 6.85204 8.04271 7.7083 8.33071C8.30001 8.53071 8.5562 8.72266 8.5562 9.02654C8.5562 9.34659 8.24425 9.52267 7.78797 9.52267C7.46143 9.52267 7.15357 9.45626 6.88643 9.36149C6.77498 9.32164 6.65151 9.33125 6.54679 9.38697C6.44214 9.4427 6.36555 9.53955 6.33639 9.65471L6.33277 9.66828C6.26298 9.9409 6.42024 10.2198 6.68952 10.3011C6.95358 10.3805 7.26405 10.4365 7.58014 10.4506V10.8079C7.58014 11.0243 7.75562 11.1998 7.97209 11.1998C8.18856 11.1998 8.36404 11.0243 8.36404 10.8079V10.3946C9.28383 10.2347 9.788 9.62658 9.788 8.91462C9.788 8.19485 9.40415 7.75475 8.45205 7.41879Z"></path>
                            </svg>
                        </h4>
                        <h4 class="bonus__title">Истекает в:
                            <span>
                                ${
                                    element.casinoItems['item-3']
                                        .toLowerCase()
                                        .trim()
                                        .replace('истекает в:', '') || '&ensp;N/A'
                                }
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" id="main-icons_timer" viewBox="0 0 14 16">
                                <path d="M11.8467 4.76283L12.8047 3.80483L11.862 2.86183L10.8372 3.88667C9.90094 3.22319 8.80843 2.81429 7.66666 2.7V1.33333H8.99999V0H4.99999V1.33333H6.33332V2.7C5.19155 2.81429 4.09905 3.22319 3.16282 3.88667L2.13799 2.86183L1.19532 3.80483L2.15332 4.76283C1.25909 5.70963 0.661751 6.89762 0.435079 8.18008C0.208407 9.46254 0.362327 10.7833 0.877832 11.9793C1.39334 13.1753 2.24785 14.194 3.33584 14.9098C4.42383 15.6256 5.69765 16.0071 6.99999 16.0071C8.30233 16.0071 9.57615 15.6256 10.6641 14.9098C11.7521 14.194 12.6066 13.1753 13.1222 11.9793C13.6377 10.7833 13.7916 9.46254 13.5649 8.18008C13.3382 6.89762 12.7409 5.70963 11.8467 4.76283ZM6.99999 14.6667C5.94516 14.6667 4.91401 14.3539 4.03695 13.7678C3.15989 13.1818 2.4763 12.3489 2.07263 11.3743C1.66897 10.3998 1.56335 9.32742 1.76914 8.29285C1.97492 7.25829 2.48287 6.30798 3.22875 5.5621C3.97463 4.81622 4.92494 4.30827 5.95951 4.10248C6.99408 3.89669 8.06643 4.00231 9.04097 4.40598C10.0155 4.80964 10.8485 5.49323 11.4345 6.37029C12.0205 7.24735 12.3333 8.2785 12.3333 9.33333C12.3317 10.7473 11.7693 12.103 10.7695 13.1028C9.76962 14.1027 8.41399 14.6651 6.99999 14.6667Z"></path>
                                <path d="M6.99999 5.3335V9.3335H2.99999C2.99999 10.1246 3.23459 10.898 3.67411 11.5558C4.11364 12.2136 4.73835 12.7263 5.46926 13.029C6.20016 13.3318 7.00443 13.411 7.78035 13.2566C8.55628 13.1023 9.26901 12.7213 9.82842 12.1619C10.3878 11.6025 10.7688 10.8898 10.9231 10.1139C11.0775 9.33793 10.9983 8.53367 10.6955 7.80276C10.3928 7.07186 9.88007 6.44714 9.22227 6.00762C8.56448 5.56809 7.79112 5.3335 6.99999 5.3335Z"></path>
                            </svg>
                        </h4>
                        <h4 class="bonus__title">
                            Бонус Код:
                            <span class="not-required">
                                ${
                                    element.casinoItems['item-4']
                                        .toLowerCase()
                                        .trim()
                                        .replace('бонус код:', '') || '&ensp;N/A'
                                }
                            </span>

                            <svg xmlns="http://www.w3.org/2000/svg" id="main-icons_bonus-code" viewBox="0 0 16 16">
                                <path d="M4.5 6.28564C4.77614 6.28564 5 6.06179 5 5.78564C5 5.5095 4.77614 5.28564 4.5 5.28564C4.22386 5.28564 4 5.5095 4 5.78564C4 6.06179 4.22386 6.28564 4.5 6.28564Z"></path>
                                <path d="M15.5 4.28564C14.673 4.28564 14 3.61264 14 2.78564C14 2.50964 13.776 2.28564 13.5 2.28564H11V4.28564H10V2.28564H2.5C2.224 2.28564 2 2.50964 2 2.78564C2 3.61264 1.327 4.28564 0.5 4.28564C0.224 4.28564 0 4.50964 0 4.78564V10.7856C0 11.0616 0.224 11.2856 0.5 11.2856C1.327 11.2856 2 11.9586 2 12.7856C2 13.0616 2.224 13.2856 2.5 13.2856H10V11.2856H11V13.2856H13.5C13.776 13.2856 14 13.0616 14 12.7856C14 11.9586 14.673 11.2856 15.5 11.2856C15.776 11.2856 16 11.0616 16 10.7856V4.78564C16 4.50964 15.776 4.28564 15.5 4.28564ZM4.5 4.28564C5.327 4.28564 6 4.95864 6 5.78564C6 6.61264 5.327 7.28564 4.5 7.28564C3.673 7.28564 3 6.61264 3 5.78564C3 4.95864 3.673 4.28564 4.5 4.28564ZM7.5 11.2856C6.673 11.2856 6 10.6126 6 9.78564C6 8.95864 6.673 8.28564 7.5 8.28564C8.327 8.28564 9 8.95864 9 9.78564C9 10.6126 8.327 11.2856 7.5 11.2856ZM8.885 5.10664L3.885 11.1066C3.785 11.2236 3.643 11.2856 3.5 11.2856C3.387 11.2856 3.274 11.2476 3.18 11.1696C2.968 10.9926 2.939 10.6776 3.116 10.4656L8.116 4.46564C8.293 4.25364 8.607 4.22564 8.821 4.40164C9.033 4.57864 9.061 4.89364 8.885 5.10664ZM11 10.2856H10V8.28564H11V10.2856ZM11 7.28564H10V5.28564H11V7.28564Z"></path>
                                <path d="M7.5 10.2856C7.77614 10.2856 8 10.0618 8 9.78564C8 9.5095 7.77614 9.28564 7.5 9.28564C7.22386 9.28564 7 9.5095 7 9.78564C7 10.0618 7.22386 10.2856 7.5 10.2856Z"></path>
                            </svg>
                        </h4>
                    </div>

                    <div class="bonus__rate">
                        <div class="bonus__stars">
                            <svg width="18" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M17.657 7.708c-.116-.407-.434-.696-.81-.735l-5.11-.526-2.02-5.367C9.567.686 9.228.432 8.85.432c-.376 0-.716.254-.865.649l-2.02 5.366-5.11.526c-.376.04-.693.328-.81.735-.116.407-.009.853.275 1.134l3.863 3.845-1.14 5.693c-.083.419.06.852.367 1.103a.866.866 0 00.55.203.855.855 0 00.483-.152l4.407-2.99 4.406 2.99c.323.22.73.2 1.034-.051.307-.252.45-.685.366-1.103l-1.139-5.693 3.863-3.844c.284-.282.392-.728.276-1.135z" fill="url(#paint0_linear)"/></g><defs><linearGradient id="paint0_linear" x1="0" y1=".432" x2="19.793" y2="2.896" gradientUnits="userSpaceOnUse"><stop stop-color="#DB7515"/><stop offset="1" stop-color="#FCCD6D"/></linearGradient><clipPath id="clip0"><path fill="#fff" d="M0 0h17.703v20.092H0z"/></clipPath></defs></svg>
                            <svg width="18" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M17.657 7.708c-.116-.407-.434-.696-.81-.735l-5.11-.526-2.02-5.367C9.567.686 9.228.432 8.85.432c-.376 0-.716.254-.865.649l-2.02 5.366-5.11.526c-.376.04-.693.328-.81.735-.116.407-.009.853.275 1.134l3.863 3.845-1.14 5.693c-.083.419.06.852.367 1.103a.866.866 0 00.55.203.855.855 0 00.483-.152l4.407-2.99 4.406 2.99c.323.22.73.2 1.034-.051.307-.252.45-.685.366-1.103l-1.139-5.693 3.863-3.844c.284-.282.392-.728.276-1.135z" fill="url(#paint0_linear)"/></g><defs><linearGradient id="paint0_linear" x1="0" y1=".432" x2="19.793" y2="2.896" gradientUnits="userSpaceOnUse"><stop stop-color="#DB7515"/><stop offset="1" stop-color="#FCCD6D"/></linearGradient><clipPath id="clip0"><path fill="#fff" d="M0 0h17.703v20.092H0z"/></clipPath></defs></svg>
                            <svg width="18" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M17.657 7.708c-.116-.407-.434-.696-.81-.735l-5.11-.526-2.02-5.367C9.567.686 9.228.432 8.85.432c-.376 0-.716.254-.865.649l-2.02 5.366-5.11.526c-.376.04-.693.328-.81.735-.116.407-.009.853.275 1.134l3.863 3.845-1.14 5.693c-.083.419.06.852.367 1.103a.866.866 0 00.55.203.855.855 0 00.483-.152l4.407-2.99 4.406 2.99c.323.22.73.2 1.034-.051.307-.252.45-.685.366-1.103l-1.139-5.693 3.863-3.844c.284-.282.392-.728.276-1.135z" fill="url(#paint0_linear)"/></g><defs><linearGradient id="paint0_linear" x1="0" y1=".432" x2="19.793" y2="2.896" gradientUnits="userSpaceOnUse"><stop stop-color="#DB7515"/><stop offset="1" stop-color="#FCCD6D"/></linearGradient><clipPath id="clip0"><path fill="#fff" d="M0 0h17.703v20.092H0z"/></clipPath></defs></svg>
                            <svg width="18" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M17.657 7.708c-.116-.407-.434-.696-.81-.735l-5.11-.526-2.02-5.367C9.567.686 9.228.432 8.85.432c-.376 0-.716.254-.865.649l-2.02 5.366-5.11.526c-.376.04-.693.328-.81.735-.116.407-.009.853.275 1.134l3.863 3.845-1.14 5.693c-.083.419.06.852.367 1.103a.866.866 0 00.55.203.855.855 0 00.483-.152l4.407-2.99 4.406 2.99c.323.22.73.2 1.034-.051.307-.252.45-.685.366-1.103l-1.139-5.693 3.863-3.844c.284-.282.392-.728.276-1.135z" fill="url(#paint0_linear)"/></g><defs><linearGradient id="paint0_linear" x1="0" y1=".432" x2="19.793" y2="2.896" gradientUnits="userSpaceOnUse"><stop stop-color="#DB7515"/><stop offset="1" stop-color="#FCCD6D"/></linearGradient><clipPath id="clip0"><path fill="#fff" d="M0 0h17.703v20.092H0z"/></clipPath></defs></svg>
                            <svg width="18" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M17.657 7.708c-.116-.407-.434-.696-.81-.735l-5.11-.526-2.02-5.367C9.567.686 9.228.432 8.85.432c-.376 0-.716.254-.865.649l-2.02 5.366-5.11.526c-.376.04-.693.328-.81.735-.116.407-.009.853.275 1.134l3.863 3.845-1.14 5.693c-.083.419.06.852.367 1.103a.866.866 0 00.55.203.855.855 0 00.483-.152l4.407-2.99 4.406 2.99c.323.22.73.2 1.034-.051.307-.252.45-.685.366-1.103l-1.139-5.693 3.863-3.844c.284-.282.392-.728.276-1.135z" fill="url(#paint0_linear)"/></g><defs><linearGradient id="paint0_linear" x1="0" y1=".432" x2="19.793" y2="2.896" gradientUnits="userSpaceOnUse"><stop stop-color="#DB7515"/><stop offset="1" stop-color="#FCCD6D"/></linearGradient><clipPath id="clip0"><path fill="#fff" d="M0 0h17.703v20.092H0z"/></clipPath></defs></svg>
                        </div>

                        <div class="bonus__rating">98/100</div>
                        
                        <div class="bonus__ukr">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                id="Capa_1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 512 512"
                                style="enable-background: new 0 0 512 512"
                                xml:space="preserve"
                            >
                                <rect y="85.337" style="fill: #ffda44" width="512" height="341.326" />
                                <rect y="85.337" style="fill: #338af3" width="512" height="170.663" />
                                <g>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Capa_1"
                                        x="350"
                                        y="-10"
                                        viewBox="0 0 1000 1000"
                                        style="enable-background: new 0 0 367.805 367.805"
                                        xml:space="preserve"
                                    >
                                        <g style="width: 20px; height: 20px">
                                            <path
                                                style="fill: #3bb54a"
                                                d="M183.903,0.001c101.566,0,183.902,82.336,183.902,183.902s-82.336,183.902-183.902,183.902      S0.001,285.469,0.001,183.903l0,0C-0.288,82.625,81.579,0.29,182.856,0.001C183.205,0,183.554,0,183.903,0.001z"
                                                width="10"
                                                height="10"
                                            />
                                            <polygon
                                                style="fill: #d4e1f4"
                                                points="285.78,133.225 155.168,263.837 82.025,191.217 111.805,161.96 155.168,204.801       255.001,103.968"
                                            />
                                        </g>
                                    </svg>
                                </g>
                            </svg>

                            <p>Принимает игроков из Украины.</p>
                        </div>
                    </div>

                    <div class="bonus__buttons">
                        <a target="_blank" href="${
                            element['ref-link'] ? element['ref-link'] : '#'
                        }" class="button button--purple">Взять бонус</a>
                        <button class="bonus__hide hideButton">Дополнительно
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0"
                                />
                                <path
                                    d="m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
                                />
                                <path
                                    d="m256 384c-8.832031 0-16-7.167969-16-16v-224c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v224c0 8.832031-7.167969 16-16 16zm0 0"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Hidden -->
                
                <div class="bonus__hidden _hidden">
                    <p class="bonus__caption">Функции</p>
                    <ul>
                        ${ul.join().replaceAll(',', '\n')}
                    </ul>
                </div>
            </div>
        `
        }
    }

    async function insertBonusCardsFrom(options) {
        if (document.querySelector(`.bonuses--${options.place}`)) {
            let bonuses = document.querySelector(`.bonuses--${options.place}`)
            let wrapperToInsertBonuses = bonuses.querySelector('.bonuses__bonuses')
            let preloader = createPreloader()

            wrapperToInsertBonuses.insertAdjacentHTML('afterend', preloader)

            options.slice[1] = bonuses.dataset['show'] ? +bonuses.dataset['show'] : 3

            options.bonusesData.then((data) => {
                if (data.length <= options.slice[1]) {
                    showMoreButton.remove()
                }
                data.slice(options.slice[0], options.slice[1]).forEach((card) => {
                    wrapperToInsertBonuses.insertAdjacentHTML(
                        'beforeend',
                        makeBonusCard(card.elem, options.parameter),
                    )
                })
                additionalInfoShow(options.place)
            })

            // Remove preloader when bonuses are loaded

            let bonusesLoaded = await options.bonusesData

            if (bonusesLoaded) {
                bonuses.querySelector('.bonusPreloader').remove()
            }

            // Show More bonuses button
            const showMoreButton = bonuses.querySelector('.showMoreBonuses')

            if (showMoreButton) {
                showMoreButton.addEventListener('click', showMoreBonuses)
            }

            function showMoreBonuses() {
                options.slice[0] += 10
                options.slice[1] += 10

                options.bonusesData.then((data) => {
                    if (data.length <= options.slice[1]) {
                        showMoreButton.remove()
                    }
                    data.slice(options.slice[0], options.slice[1]).forEach((card) => {
                        wrapperToInsertBonuses.insertAdjacentHTML(
                            'beforeend',
                            makeBonusCard(card.elem, options.parameter),
                        )
                    })
                    additionalInfoShow(options.place)
                })
                additionalInfoShow(options.place)
            }
        }
    }

    // Additional info Button

    function additionalInfoShow(place) {
        const bonuses = document.querySelector(`.bonuses--${place}`)
        const bonusesFromInner = bonuses.querySelectorAll('.bonus')

        bonusesFromInner.forEach((bonus) => {
            const bonusesHideButton = bonus.querySelector('.hideButton')

            bonusesHideButton.addEventListener('click', () => {
                bonusesHideButton.classList.toggle('_hidden')
                bonus.querySelector('.bonus__hidden').classList.toggle('_hidden')
            })
        })
    }
} catch (e) {}

function createPreloader() {
    let preloader = `
        <div class="bonusPreloader">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.778 477.778" style="enable-background:new 0 0 477.778 477.778;" xml:space="preserve">
                <g>
                    <path fill="#ffbb16" d="M461.4,152.432c-9.782-25.141-23.593-48.221-40.81-68.392C384.958,42.264,335.206,13.08,278.704,3.585
                        C265.732,1.4,252.482,0,238.889,0c-13.594,0-26.845,1.4-39.815,3.585C142.571,13.08,92.834,42.256,57.187,84.024
                        c-17.202,20.18-31.013,43.252-40.794,68.392C5.94,179.261,0,208.351,0,238.889c0,28.065,5.085,54.878,13.981,79.894
                        c9.051,25.445,22.131,48.945,38.726,69.592c35.881,44.636,87.452,75.919,146.367,85.818c12.97,2.185,26.221,3.585,39.815,3.585
                        c13.593,0,26.843-1.4,39.815-3.585c58.913-9.9,110.486-41.183,146.366-85.812c16.595-20.645,29.675-44.145,38.725-69.59
                        c8.896-25.016,13.983-51.837,13.983-79.902C477.778,208.359,471.836,179.269,461.4,152.432z M433.375,168.6L391.6,192.713
                        c-7.915-26.128-22.365-49.41-41.447-68.012l42.162-24.34C410.123,120.067,424.152,143.155,433.375,168.6z M366.623,238.889
                        c0,70.431-57.297,127.734-127.734,127.734c-70.439,0-127.735-57.303-127.735-127.734c0-70.429,57.297-127.734,127.735-127.734
                        C309.326,111.155,366.623,168.46,366.623,238.889z M238.889,31.852c13.623,0,26.921,1.408,39.815,3.927v48.757
                        c-12.754-3.297-26.052-5.233-39.815-5.233c-13.765,0-27.063,1.937-39.815,5.233V35.779
                        C211.966,33.26,225.264,31.852,238.889,31.852z M85.476,100.354l42.164,24.347c-19.082,18.594-33.546,41.876-41.463,68.004
                        l-41.775-24.113C53.64,143.147,67.669,120.059,85.476,100.354z M41.992,302.609l42.396-24.472
                        c6.75,26.556,20.11,50.438,38.321,69.824l-41.992,24.238C63.626,351.942,50.359,328.388,41.992,302.609z M238.889,445.926
                        c-13.625,0-26.923-1.408-39.815-3.927v-48.757c12.752,3.298,26.05,5.233,39.815,5.233c13.763,0,27.061-1.935,39.815-5.233v48.757
                        C265.81,444.518,252.512,445.926,238.889,445.926z M397.043,372.199l-41.976-24.238c18.211-19.379,31.572-43.268,38.321-69.824
                        l42.396,24.48C427.417,328.388,414.151,351.942,397.043,372.199z"/>
                    <path fill="#db7515" d="M252.388,221.533c-20.312-7.644-28.664-12.66-28.664-20.546c0-6.687,5.009-13.374,20.545-13.374
                        c8.958,0,16.238,1.486,22.024,3.289c3.281,1.019,6.842,0.639,9.86-1.042c3.002-1.672,5.179-4.51,6.034-7.847l0.218-0.823
                        c1.943-7.613-2.629-15.375-10.25-17.342c-5.848-1.516-12.8-2.62-21.197-2.994v-8.969c0-6.096-4.518-11.429-10.587-11.997
                        c-6.96-0.651-12.821,4.817-12.821,11.651v10.987c-25.567,5.015-40.374,21.501-40.374,42.52c0,23.174,17.434,35.118,43.003,43.718
                        c17.669,5.972,25.319,11.704,25.319,20.778c0,9.557-9.315,14.815-22.94,14.815c-9.751,0-18.944-1.983-26.921-4.813
                        c-3.328-1.19-7.015-0.903-10.142,0.761c-3.125,1.664-5.412,4.556-6.283,7.995l-0.108,0.405
                        c-2.084,8.141,2.612,16.469,10.653,18.896c7.885,2.371,17.156,4.043,26.595,4.464v10.669c0,6.464,5.24,11.704,11.704,11.704l0,0
                        c6.464,0,11.704-5.24,11.704-11.704v-12.341c27.466-4.775,42.521-22.933,42.521-44.193
                        C292.281,244.707,280.819,231.565,252.388,221.533z"/>
                </g>
            </svg>

        </div>
    `

    return preloader
}

try {
    const bonusFilter = document.querySelector('.bonusFilter')
    const triggers = bonusFilter.querySelectorAll('.filterToggler')
    const contentBlocks = bonusFilter.querySelectorAll('.filterContent')

    triggers.forEach((trigger) => {
        trigger.addEventListener('click', () => {
            contentBlocks.forEach((content) => {
                if (trigger.dataset['filter'] === content.dataset.filterContent) {
                    content.classList.toggle('_hidden')
                    trigger.classList.toggle('_hidden')
                }
            })
        })
    })
} catch (e) {}

// Reviews
try {
    const showAlldetails = document.querySelectorAll('.showAllDetails')

    showAlldetails.forEach((showAll) => {
        showAll.addEventListener('click', function (event) {
            event.target.classList.contains('showAllDetails')
                ? this.querySelector('.review__hidden').classList.toggle('_hidden')
                : ''
        })
    })

    const showMoreDescription = document.querySelector('.showMore')

    showMoreDescription.addEventListener('click', () => {
        showMoreDescription.parentNode.querySelector('._hidden').classList.remove('_hidden')
        showMoreDescription.remove()
    })
} catch (e) {}

// Fixed aside

try {
    const aside = document.querySelector('.aside')
    const main = document.querySelector('.main')
    const bonuses = main.querySelector('.bonuses')

    let mainHeight = main.clientHeight
    let asideHeight = aside.clientHeight
    let endpoint = mainHeight - asideHeight

    window.addEventListener('resize', () => {
        updateContentHeights()
    })

    window.addEventListener('scroll', () => {
        endpoint = mainHeight - asideHeight

        updateContentHeights()

        if (endpoint < 0) {
            endpoint = 0
        }

        aside.style.top = `${getBodyScrollTop()}px`

        if (getBodyScrollTop() >= endpoint) {
            aside.style.top = `${endpoint}px`
        }
    })

    window.addEventListener('load', () => {
        setTimeout(() => {
            window.scrollTo(0, 0)
            aside.style.top = `0px`
        }, 1)
    })

    function updateContentHeights() {
        mainHeight = main.clientHeight
        asideHeight = aside.clientHeight
    }
} catch (e) {}

// Iframe skeleton

try {
    const frame = document.querySelector('iframe')
    const frameOuter = frame.parentNode
    const preloader = frameOuter.querySelector('.framePreloader')
    const frameLink = frame.dataset['src']

    preloader.addEventListener('click', (event) => {
        event.preventDefault()

        frame.removeAttribute('data-src')
        frame.setAttribute('src', frameLink)

        frameOuter.removeChild(preloader)
    })
} catch (e) {}

try {
    if (window.location.pathname.indexOf('/index.html') !== -1) {
        let neededPath = window.location.pathname.replace('/index.html', '/')

        window.location.replace(neededPath)
    }
} catch (e) {}

// Languages toggler
try {
    const languages = document.querySelector('.languages')
    const languagesButton = languages.querySelector('.languagesButton')

    languagesButton.addEventListener('click', () => {
        languages.classList.toggle('_opened')
    })
} catch (e) {
    console.log(e)
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

// Get body scrolled

function getBodyScrollTop() {
    return (
        self.pageYOffset ||
        (document.documentElement && document.documentElement.scrollTop) ||
        (document.body && document.body.scrollTop)
    )
}

// WEBP format 

function testWebP(callback) {

	var webP = new Image()
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2)
	}
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
