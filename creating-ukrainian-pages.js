const fs = require('fs')

const readedReviews = fs.readFileSync('./reviews-json/reviews-ua.json')
const reviews = JSON.parse(readedReviews)

reviews.forEach((review) => {
    let name = review.title
        .replace('Огляд', '')
        .toLowerCase()
        .replace('онлайн', '')
        .replace('казино', '')
        .replace('- ', '')
        .replace(/\s/g, '-')
        .replace('.io', '')
        .replace('-', '')

    const fileName = `ua/reviews/${name}.html`
    fs.writeFileSync(fileName, createData(review, name))
})

function createData(review, name) {
    // Payment
    const paymentMethods = []
    Object.values(review.paymentMethods['images']).forEach((image) => {
        paymentMethods.push(`<img src="${image}" alt="">`)
    })

    Object.values(review.paymentMethods['titles']).map((element, index) => {
        paymentMethods[index] = paymentMethods[index].replace('>', `title="${element}">`)
    })

    // Licenses
    const licenses = []
    Object.values(review.licenses).forEach((license) => {
        licenses.push(`<li>
                            <svg id="check" viewBox="0 0 14 12">
                                <path
                                    d="M11.5539 0.00854492L4.62158 7.06454L2.31079 4.71254L0 7.06454L4.62158 11.7685L13.8647 2.36054L11.5539 0.00854492Z">
                                </path>
                            </svg>
                            ${license.replace(/\n/g, '')}
                        </li>`)
    })

    // Descriptions
    const descriptions = []
    Object.values(review.descriptions).forEach((description) => {
        descriptions.push(`<p class="desc">${description}</p>`)
    })

    // Games
    const games = []
    Object.values(review.games).forEach((game) => {
        games.push(`<li>${game.replace(/\n/g, '')}</li>`)
    })

    // Providers
    const providers = []
    Object.values(review.providers['images']).forEach((image) => {
        providers.push(`<img src="${image}" alt="">`)
    })

    Object.values(review.providers['titles']).map((element, index) => {
        providers[index] = providers[index].replace('>', `title="${element}">`)
    })

    // Pros
    const pros = []
    Object.values(review.pros).forEach((pro) => {
        pros.push(`<li>
                        <svg viewBox="0 0 24 24" id="base_ui_ico_plus">
                            <path fill="#ffffff" d="M21.523 9.772v4.456a.14.14 0 0 1-.139.14h-7.018v7.017a.14.14 0 0 1-.139.14H9.772a.14.14 0 0 1-.14-.14v-7.017H2.615a.14.14 0 0 1-.14-.14V9.772a.14.14 0 0 1 .14-.14h7.017V2.615a.14.14 0 0 1 .14-.14h4.456a.14.14 0 0 1 .14.14v7.017h7.017c.077 0 .138.063.138.14z"></path>
                        </svg>
                        ${pro}
                    </li>`)
    })

    // Cons
    const cons = []
    Object.values(review.cons).forEach((con) => {
        cons.push(`<li>
                        <svg viewBox="0 0 24 24" id="base_ui_ico_minus">
                            <path fill="#ffffff"
                                d="M21.523 9.772v4.456a.14.14 0 0 1-.139.14H2.614a.14.14 0 0 1-.138-.14V9.772a.14.14 0 0 1 .139-.14h18.769c.078 0 .14.063.14.14z">
                            </path>
                        </svg>
                        ${con}
                    </li>`)
    })

    // FAQ
    const faqs = []
    review.faq?.forEach((element, index) => {
        let faqHTML = `
                        <div class="faq__spoiler ${index === 0 ? '_active' : ''}">
                            <button type="button" class="faq__button">
                                <span class="faq__number">${index + 1}</span>
                                <h3 class="faq__headline">
                                    ${element.question}
                                </h3>
                                <span class="faq__sign"></span>
                            </button>
                            <p class="faq__question">
                                ${element.answer}
                            </p>
                        </div>`
        faqs.push(faqHTML)
    })

    const data = `
        <!DOCTYPE html>
<html lang="uk-ua">

<head>
    <!-- Meta -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <link rel="canonical" href="https://casinofreespins.com.ua/ua/" />

    <!-- SEO  -->
    <meta name="description" content="${
        review.meta && review.meta.description ? review.meta.description : ''
    }" />
    <link rel="alternate" hreflang="ru" href="https://casinofreespins.com.ua/reviews/${name}.html" />
    <link rel="alternate" hreflang="uk-UA" href="https://casinofreespins.com.ua/ua/reviews/${name}.html" />
    <link rel="alternate" href="https://casinofreespins.com.ua/reviews/${name}.html" hreflang="x-default" />

    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="57x57" href="../../img/favicon/apple-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="../../img/favicon/apple-icon-60x60.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="../../img/favicon/apple-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="../../img/favicon/apple-icon-76x76.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="../../img/favicon/apple-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="../../img/favicon/apple-icon-120x120.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="../../img/favicon/apple-icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="../../img/favicon/apple-icon-152x152.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="../../img/favicon/apple-icon-180x180.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="../../img/favicon/android-icon-192x192.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="../../img/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="../../img/favicon/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="../../img/favicon/favicon-16x16.png" />

    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-TileImage" content="../../ms-icon-144x144.png" />
    <meta name="theme-color" content="#ffffff" />

    <!-- Styles -->
    <link rel="stylesheet" href="../../css/style.min.css" />

    <!-- Title -->
    <title>${review.meta && review.meta.title ? review.meta.title : review.title}</title>

    <!-- Montserrat font -->
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
</head>

<body>
    <div class="page">
        <header class="header">
            <div class="container">
                <div class="header__inner">
                    <div class="logo">
                        <div class="logo__img">
                            <a href="../">
                                <picture>
                                    <source srcset="../../../img/logo/logo.webp" type="image/webp" />
                                    <img src="../../../img/logo/logo.png" alt="" />
                                </picture>
                            </a>
                        </div>
                    </div>

                    <div class="header__burger">
                        <span></span>
                    </div>

                    <nav class="nav">
                        <ul class="nav__list">
                            <li class="nav__item">
                                <a href="../" class="nav__link">Головна</a>
                            </li>
                            <li class="nav__item nav__item--sub">
                                <span class="nav__link"> Онлайн слоти на гроші </span>
                                <ul class="nav__sublist">
                                    <li class="nav__item">
                                        <a href="../online-baccarat.html" class="nav__link">Баккара на гроші
                                        </a>
                                    </li>
                                    <li class="nav__item">
                                        <a href="../online-blackjack.html" class="nav__link">Блекджек на гроші</a>
                                    </li>
                                    <li class="nav__item">
                                        <a href="../online-roulette.html" class="nav__link">Рулетка на гроші</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav__item nav__item--sub">
                                <a href="../licensed-casinos.html" class="nav__link">
                                    Ліцензійні онлайн казино
                                </a>
                                <ul class="nav__sublist">
                                    <li class="nav__item">
                                        <a href="../uah-casinos.html" class="nav__link">Казино на гривні
                                        </a>
                                    </li>
                                    <li class="nav__item">
                                        <a href="../rub-casinos.html" class="nav__link">Казино на рублі</a>
                                    </li>
                                    <li class="nav__item">
                                        <a href="../usd-casinos.html" class="nav__link">Казино на долари</a>
                                    </li>
                                    <li class="nav__item">
                                        <a href="../eur-casinos.html" class="nav__link">Казино на євро</a>
                                    </li>
                                    <li class="nav__item">
                                        <a href="../bitcoin-casinos.html" class="nav__link">Біткойн казино</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav__item nav__item--sub">
                                <span class="nav__link"> Бонуси </span>
                                <ul class="nav__sublist">

                                    <li class="nav__item">
                                        <a href="../cashback-bonus.html" class="nav__link">Кешбек бонуси
                                        </a>
                                    </li>

                                    <li class="nav__item">
                                        <a href="../freespins-bonus.html" class="nav__link">Фріспіни
                                        </a>
                                    </li>
                                    <li class="nav__item">
                                        <a href="../high-roller-bonus.html" class="nav__link">Бонуси для хайролерів
                                        </a>
                                    </li>
                                    <li class="nav__item">
                                        <a href="../match-deposits-bonus.html" class="nav__link">Бонуси на депозит
                                        </a>
                                    </li>
                                    <li class="nav__item">
                                        <a href="../no-deposits-bonus.html" class="nav__link">Бездепозитні бонуси
                                        </a>
                                    </li>

                                    <li class="nav__item">
                                        <a href="../reload-bonus.html" class="nav__link">Релоад бонуси
                                        </a>
                                    </li>
                                    <li class="nav__item">
                                        <a href="../welcome-bonus.html" class="nav__link">Привітальні бонуси
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav__item">
                                <a href="../blog.html" class="nav__link">Блог</a>
                            </li>
                        </ul>
                        <div class="languages">
                            <button type="button" class="languages__item languagesButton">
                                <picture>
                                    <source srcset="../../../img/header/languages/ua.webp" type="image/webp" />
                                    <img src="../../../img/header/languages/ua.png" alt="ua" />
                                </picture>
                            </button>
                            <div class="languages__list">
                                <a href="../../reviews/${name}.html" class="languages__item">
                                    <picture>
                                        <source srcset="../../../img/header/languages/ru.webp" type="image/webp" />
                                        <img src="../../../img/header/languages/ru.png" alt="ru" />
                                    </picture>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
        <div class="page__content">
                    <main class="review">
                        <div class="container">

                            <div class="review__inner">
                                <article class="review__main main">
                                    <div class="review__block--outer">
                                        <div class="review__block">
                                            <div class="review__head">
                                                <h3>
                                                    <img src="../../../img/icons/roulette-2.png" alt="">
                                                    Ігри
                                                </h3>
                                            </div>
                                            <ul class="review__body">
                                                ${games.join('\n')}
                                            </ul>
                                        </div>
                                        <div class="review__block">
                                            <div class="review__head">
                                                <h3>
                                                    <img src="../../../img/icons/safe.png" alt="">
                                                    Провайдери
                                                </h3>

                                                <button type="button" class="review__all showAllDetails">
                                                    ещё
                                                    <div class="review__hidden _hidden">
                                                        ${providers.slice(0, 49).join('\n')}
                                                    </div>
                                                </button>
                                            </div>
                                            <ul class="review__body">
                                                ${providers.slice(0, 10).join('\n')}
                                            </ul>
                                        </div>
                                        <div class="review__block">
                                            <div class="review__head">
                                                <h3>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path fill="#6efc6b"
                                                            d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0" />
                                                        <path fill="#6efc6b"
                                                            d="m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                                                        <path fill="#6efc6b"
                                                            d="m256 384c-8.832031 0-16-7.167969-16-16v-224c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v224c0 8.832031-7.167969 16-16 16zm0 0" />
                                                    </svg>
                                                    Плюси
                                                </h3>
                                            </div>
                                            <ul class="review__body review__body--pros review__body--fullsize">
                                                ${pros.join('\n')}
                                            </ul>
                                        </div>
                                        <div class="review__block">
                                            <div class="review__head">
                                                <h3>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path fill="#ff625b"
                                                            d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0" />
                                                        <path fill="#ff625b"
                                                            d="m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                                                    </svg>
                                                    Мінуси
                                                </h3>
                                            </div>
                                            <ul class="review__body review__body--cons review__body--fullsize">
                                                ${
                                                    cons.join('\n').length === 0
                                                        ? '<p>Минусів нема</p>'
                                                        : cons.join('\n')
                                                }
                                            </ul>                                            
                                        </div>
                                    </div>
                                    <section class="bonuses bonuses--sportsbook">
                                        <div class="container">
                                            <div class="bonuses__inner">
                                                <h2 class="bonuses__title title">Активні бонуси цього казино</h2>

                                                <div class="bonuses__bonuses"></div>
                                            </div>
                                        </div>
                                    </section>
                                    ${
                                        review.review
                                            ? `
                                    <div class="review__review">
                                        <h2 class="review__title title">
                                            ${review.title}
                                        </h2>
                                        <div class="review__desc desc _hidden">
                                            
                                            ${descriptions.join('\n')}

                                            ${
                                                review.banner
                                                    ? `<div class="review__banner">
                                                           <img src="../../../img/review/${name}/${review.banner}" alt="">
                                                       </div>`
                                                    : ''
                                            }

                                            ${
                                                review.review &&
                                                review.review['review-block'] &&
                                                review.review['review-block'].title
                                                    ? `<h2 class="review__title title">${review.review['review-block'].title}</h2>`
                                                    : ''
                                            }
                                            ${
                                                review.review &&
                                                review.review['review-block'] &&
                                                review.review['review-block'].paragraphs
                                                    ? review.review['review-block'].paragraphs
                                                          .map((p) => `<p class="desc">${p}</p>`)
                                                          .join('\n')
                                                    : ''
                                            }
                                            ${
                                                review.review &&
                                                review.review['review-block'] &&
                                                review.review['review-block'].banner
                                                    ? `<div class="review__banner">
                                                         <img src="../../../img/review/${name}/${review.review['review-block'].banner}" alt="">
                                                       </div>`
                                                    : ''
                                            }
                                            ${
                                                review.review &&
                                                review.review['review-block'] &&
                                                review.review['review-block']['paragraphs-after']
                                                    ? review.review['review-block'][
                                                          'paragraphs-after'
                                                      ]
                                                          .map((p) => `<p class="desc">${p}</p>`)
                                                          .join('\n')
                                                    : ''
                                            }
                                            ${
                                                review.review &&
                                                review.review['register-block'].title
                                                    ? `<h2 class='review__title title'>${review.review['register-block'].title}</h2>`
                                                    : ''
                                            }
                                            <div class="review__post">
                                            ${
                                                review.review &&
                                                review.review['register-block'] &&
                                                review.review['register-block']['floating-image']
                                                    ? `<img src="../../../img/review/${name}/${review.review['register-block']['floating-image']}" alt=""></img>`
                                                    : ''
                                            }
                                            ${
                                                review.review &&
                                                review.review['register-block'] &&
                                                review.review['register-block']['paragraphs-after']
                                                    ? review.review['register-block'][
                                                          'paragraphs-after'
                                                      ]
                                                          .map((p) => `<p class="desc">${p}</p>`)
                                                          .join('\n')
                                                    : ''
                                            }
                                            </div>
                                            ${
                                                review.review &&
                                                review.review['games-block'] &&
                                                review.review['games-block'].title
                                                    ? `<h2 class="review__title title">${review.review['games-block'].title}</h2>`
                                                    : ''
                                            }
                                            <div class="review__post">
                                                ${
                                                    review.review &&
                                                    review.review['games-block'] &&
                                                    review.review['games-block']['floating-image']
                                                        ? `<img src="../../../img/review/${name}/${review.review['games-block']['floating-image']}" alt="">`
                                                        : ''
                                                }
                                                ${
                                                    review.review &&
                                                    review.review['games-block'] &&
                                                    review.review['games-block']['paragraphs-after']
                                                        ? review.review['games-block'][
                                                              'paragraphs-after'
                                                          ]
                                                              .map(
                                                                  (p) => `<p class="desc">${p}</p>`,
                                                              )
                                                              .join('\n')
                                                        : ''
                                                }
                                            </div>
                                            ${
                                                review.review &&
                                                review.review['games-block'] &&
                                                review.review['games-block'].banner
                                                    ? `<div class="review__banner">
                                                            <img src="../../../img/review/${name}/${review.review['games-block'].banner}" alt="">
                                                        </div>`
                                                    : ''
                                            }
                                            ${
                                                review.review &&
                                                review.review['games-block'] &&
                                                review.review['games-block']['paragraphs-end']
                                                    ? review.review['games-block']['paragraphs-end']
                                                          .map((p) => ` <p class="desc">${p}</p>`)
                                                          .join('\n')
                                                    : ''
                                            }
                                            ${
                                                review.review &&
                                                review.review['payment-block'] &&
                                                review.review['payment-block'].title
                                                    ? `<h2 class="review__title title">${review.review['payment-block'].title}</h2>`
                                                    : ''
                                            }
                                            ${
                                                review.review &&
                                                review.review['payment-block'] &&
                                                review.review['payment-block'].paragraphs
                                                    ? review.review['payment-block'].paragraphs
                                                          .map((p) => `<p class="desc">${p}</p>`)
                                                          .join('\n')
                                                    : ''
                                            }
                                            ${
                                                review.review &&
                                                review.review['payment-block'] &&
                                                review.review['payment-block'].banner
                                                    ? `<div class="review__banner">
                                                           <img src="../../../img/review/${name}/${review.review['payment-block'].banner}" alt="">
                                                       </div>`
                                                    : ''
                                            }
                                            ${
                                                review.review &&
                                                review.review['payment-block'] &&
                                                review.review['payment-block']['paragraphs-after']
                                                    ? review.review['payment-block'][
                                                          'paragraphs-after'
                                                      ]
                                                          .map((p) => `<p class="desc">${p}</p>`)
                                                          .join('\n')
                                                    : ''
                                            }
                                            ${
                                                review.review &&
                                                review.review['payment-block'] &&
                                                review.review['payment-block']['paragraphs-after']
                                                    ? review.review['payment-block'][
                                                          'paragraphs-after'
                                                      ]
                                                          .map((p) => `<p class="desc">${p}</p>`)
                                                          .join('\n')
                                                    : ''
                                            }
                                            ${
                                                review.review &&
                                                review.review['mobile-block'] &&
                                                review.review['mobile-block'].title
                                                    ? `<h2 class="review__title title">${review.review['mobile-block'].title}</h2>`
                                                    : ''
                                            }
                                            
                                            <div class="review__post">
                                                ${
                                                    review.review &&
                                                    review.review['mobile-block'] &&
                                                    review.review['mobile-block']['floating-image']
                                                        ? `<img src="../../../img/review/${name}/${review.review['mobile-block']['floating-image']}" alt="">`
                                                        : ''
                                                }
                                                ${
                                                    review.review &&
                                                    review.review['mobile-block'] &&
                                                    review.review['mobile-block'][
                                                        'paragraphs-after'
                                                    ]
                                                        ? review.review['mobile-block'][
                                                              'paragraphs-after'
                                                          ]
                                                              .map(
                                                                  (p) => `<p class="desc">${p}</p>`,
                                                              )
                                                              .join('\n')
                                                        : ''
                                                }
                                                </div>
                                                ${
                                                    review.review &&
                                                    review.review.conclusion &&
                                                    review.review.conclusion.title
                                                        ? `<h2 class="review__title title">${review.review.conclusion.title}</h2>`
                                                        : ''
                                                }
                                                ${
                                                    review.review &&
                                                    review.review.conclusion &&
                                                    review.review.conclusion.paragraphs
                                                        ? review.review.conclusion.paragraphs
                                                              .map(
                                                                  (p) => `<p class="desc">${p}</p>`,
                                                              )
                                                              .join('\n')
                                                        : ''
                                                }
                                        </div>
                                        <button type="button" class="review__button showMore">Показати ще</button>
                                    </div>`
                                            : ''
                                    }
                                    <section class="profile">
                                        <div class="profile__inner">
                                            <div class="profile__text">
                                                <h2 class="profile__title title">Ім'я автора</h2>
                                                <div class="profile__position">Посада: арт-директор</div>
                                            </div>

                                            <div class="profile__right">
                                                <a href="#" class="profile__image">
                                                    <img src="../../../img/profile/profile.png" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </section>
                                </article>

                                <aside class="review__aside aside">
                                    <div class="review__banner">
                                        <img src="${review.imgSrc}"
                                            alt="">
                                    </div>

                                    <h3 class="review__subtitle subtitle" >
                                        ${review.title.replace('Огляд', '')}
                                    </h3>

                                    <div class="review__rating">
                                        <span>${review.rating}/10</span>
                                        <p class="review__desc desc">
                                            <img src="../../../img/icons/star-gld.svg" alt="">
                                            <img src="../../../img/icons/star-gld.svg" alt="">
                                            <img src="../../../img/icons/star-gld.svg" alt="">
                                            <img src="../../../img/icons/star-gld.svg" alt="">
                                            <img src="../../../img/icons/star-gld.svg" alt="">
                                        </p>
                                    </div>

                                    <div class="review__ukr">
                                        ${
                                            review.ukrAccepting
                                                ? `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                                version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512"
                                                style="enable-background: new 0 0 512 512" xml:space="preserve">
                                                <rect y="85.337" style="fill: #ffda44" width="512" height="341.326" />
                                                <rect y="85.337" style="fill: #338af3" width="512" height="170.663" />
                                                <g>
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="350"
                                                        y="-10" viewBox="0 0 1000 1000"
                                                        style="enable-background: new 0 0 367.805 367.805" xml:space="preserve">
                                                        <g style="width: 20px; height: 20px">
                                                            <path style="fill: #3bb54a"
                                                                d="M183.903,0.001c101.566,0,183.902,82.336,183.902,183.902s-82.336,183.902-183.902,183.902      S0.001,285.469,0.001,183.903l0,0C-0.288,82.625,81.579,0.29,182.856,0.001C183.205,0,183.554,0,183.903,0.001z"
                                                                width="10" height="10" />
                                                            <polygon style="fill: #d4e1f4"
                                                                points="285.78,133.225 155.168,263.837 82.025,191.217 111.805,161.96 155.168,204.801       255.001,103.968" />
                                                        </g>
                                                    </svg>
                                                </g>
                                            </svg>`
                                                : ''
                                        }
                                        <p>
                                            ${review.ukrAccepting}
                                        </p>
                                    </div>

                                    <a target="_blank" href="${
                                        review['ref-link'] || ''
                                    }" class="review__link button">Відвідати</a>

                                    <div class="review__payment">
                                        <div class="review__head">
                                            <h3>
                                                Способы оплаты
                                            </h3>
                                            <button type="button" class="review__all showAllDetails">
                                                ещё
                                                <div class="review__hidden _hidden">
                                                    ${paymentMethods.slice(0, 49).join('\n')}
                                                </div>
                                            </button>
                                        </div>
                                        <div class="review__payment--content">
                                            ${paymentMethods.slice(0, 6).join('\n')}
                                        </div>

                                    </div>

                                    <div class="review__licenses">
                                        <div class="review__head">
                                            <h3>
                                                ${licenses.length > 1 ? 'Лицензии' : 'Лицензия'}
                                            </h3>
                                        </div>
                                        <ul class="review__licenses--content">
                                            ${licenses.join('\n')}
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </main>
                    <section class="faq">
                        <div class="container">
                            <div class="faq__inner">
                                <div class="faq__title title">FAQ</div>

                                <div class="faq__block">
                                    ${faqs.join('\n')}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <footer class="footer">
            <div class="container">
                <div class="footer__inner">
                    <nav class="footer__nav">
                        <ul class="footer__col">
                            <li class="footer__item footer__item--title">Ігри казино</li>
                            <li class="footer__item">
                                <a href="../online-baccarat.html">Баккара</a>
                            </li>
                            <li class="footer__item">
                                <a href="../online-blackjack.html">Блекджек</a>
                            </li>
                            <li class="footer__item">
                                <a href="../online-roulette.html">Рулетка на гроші</a>
                            </li>
                        </ul>

                        <ul class="footer__col">
                            <li class="footer__item footer__item--title">Ліцензовані казино</li>
                            <li class="footer__item">
                                <a href="../uah-casinos.html">Казино на гривні</a>
                            </li>
                            <li class="footer__item">
                                <a href="../rub-casinos.html">Казино на рублі</a>
                            </li>
                            <li class="footer__item">
                                <a href="../usd-casinos.html">Казино на долари</a>
                            </li>
                            <li class="footer__item">
                                <a href="../eur-casinos.html">Казино на євро</a>
                            </li>
                            <li class="footer__item">
                                <a href="../bitcoin-casinos.html">Біткойн казино</a>
                            </li>
                        </ul>

                        <ul class="footer__col">
                            <li class="footer__item footer__item--title">Інформація</li>
                            <li class="footer__item"><a href="../../ua/">Головна</a></li>

                            <li class="footer__item">
                                <a href="../licensed-casinos.html">Ліцензовані казино</a>
                            </li>
                            <li class="footer__item"><a href="../blog.html">Блог</a></li>
                        </ul>
                    </nav>

                    <div class="footer__trusts">
                        <picture>
                            <source srcset="../../../img/footer/agelim.webp" type="image/webp" />
                            <img src="../../../img/footer/agelim.png" alt="" />
                        </picture>
                        <picture>
                            <source srcset="../../../img/footer/gpwa.webp" type="image/webp" />
                            <img src="../../../img/footer/gpwa.png" alt="" />
                        </picture>
                        <picture>
                            <source srcset="../../../img/footer/begamble.webp" type="image/webp" />
                            <img src="../../../img/footer/begamble.png" alt="" />
                        </picture>
                        <picture>
                            <source srcset="../../../img/footer/gamcare.webp" type="image/webp" />
                            <img src="../../../img/footer/gamcare.png" alt="" />
                        </picture>
                        <picture>
                            <source srcset="../../../img/footer/gt.webp" type="image/webp" />
                            <img src="../../../img/footer/gt.png" alt="" />
                        </picture>
                    </div>
                    <div class="footer__rights">
                        <div class="footer__rights--bottom">
                            <div>
                                <p>Вікове обмеження! Не молодше 18-ти років</p>
                                <br />
                                <p>
                                    ОТВЕТСТВЕННАЯ ИГРА: Casino Free Spins продвигает безопасные
                                    и ответственные методы игры, включая, помимо прочего,
                                    принудительное самоисключение и ограничения сеансов в тех
                                    случаях, когда люди считают, что они могут проводить слишком
                                    много времени за игрой. Игрокам рекомендуется подумать о
                                    своем умственном, физическом и финансовом благополучии,
                                    прежде чем использовать любой из бонусов, перечисленных на
                                    страницах Casino Free Spins.
                                </p>
                                <br />
                                <p>
                                    ОТКАЗ ОТ ОТВЕТСТВЕННОСТИ: Сайт освобождается от
                                    ответственности в случаях, когда на любой из страниц
                                    появилась неверная информация о бонусах, предложениях и
                                    акциях. Мы рекомендуем игрокам ознакомиться с положениями и
                                    условиями каждого отдельного предложения.
                                </p>
                                <br />
                                <p>
                                    <a href="#" class="link">Privacy Policy</a>
                                    &
                                    <a href="#" class="link">Cookies</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div class="cookies _hidden">
            <div class="container">
                <div class="cookies__inner">
                    <div class="cookies__desc desc">
                        <img src="../../../img/icons/cookies.svg" alt="" />
                        <p>
                            Наший веб-доданок використовує <a href="#" class="link"> cookies</a>
                        </p>
                    </div>
                    <button type="button" class="cookies__close cookiesClose">&times;</button>
                </div>
            </div>
        </div>
            </div>

            <script src="../../../js/script.min.js"></script>
        </body>

        </html>
    `

    return data
}
