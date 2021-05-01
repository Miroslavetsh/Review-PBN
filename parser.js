var tress = require('tress')
var needle = require('needle')
var cheerio = require('cheerio')
var fs = require('fs')

var URL = 'https://bonusesfinder.com.ua/uk-ua/type/sportsbook-sites/'
var results = []

var q = tress(function (url, callback) {
    needle.get(url, function (err, res) {
        if (err) throw err

        // parsing DOM
        var $ = cheerio.load(res.body)

        //casino info
        if ($('.casinos-table')) {
            // get table
            let casinos = $('.casinos-table')

            // create empty structure for casinos
            let casinosList = []

            // get casino
            casinos.find('.casino').each((i, elem) => {
                casinosList.push($(elem))
            })

            // get casino info
            casinosList.forEach((elem) => {
                // create structure for items
                let itemsObj = {}
                let nodeListOfItems = $(elem)
                    .find('.bonus-item__title')
                    .each((i, elem) => $(elem).text())

                nodeListOfItems.map((i) => {
                    itemsObj[`item-${i + 1}`] = $(nodeListOfItems[i]).text()
                })

                // create structure for list
                let listObj = {}
                let markedList = $(elem)
                    .find('.marked-list')
                    .find('li')
                    .each((i, elem) => $(elem).text())

                markedList.map((i) => {
                    listObj[`option-${i + 1}`] = $(markedList[i]).text()
                })

                // pushing in result array
                results.push({
                    elem: {
                        imgSrc: `https://bonusesfinder.com.ua${$(elem)
                            .find('img')[0]
                            .attribs.src.replace('..', '')}`,
                        bonusType: $(elem).find('.casino__bonus-type').text(),
                        casinoName: $(elem).find('.casino__name').html(),
                        // casinoBonus: $(elem).find('.casino__bonus-type > strong').html(),
                        casinoExclusive: $(elem).find('.exclusive__item').html() || '',
                        casinoItems: itemsObj,
                        additional: listObj,
                    },
                })
            })
        }

        callback()
    })
}, 10) // 10 paralell streams

q.push(URL)

// get info from another page
for (let i = 1; i < 25; i++) {
    URL = `https://bonusesfinder.com.ua/uk-ua/type/sportsbook-sites/${i}`

    q.drain = function () {
        fs.writeFileSync(`./ua/data/data-sportsbook.json`, JSON.stringify(results, null, 4))
    }

    q.push(URL)
}
