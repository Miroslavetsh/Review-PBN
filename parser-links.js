var tress = require('tress')
var needle = require('needle')
var cheerio = require('cheerio')
var fs = require('fs')

var URL = 'https://kasinoguru-ua.com/online-casino'

var results = []

var q = tress(function (url, callback) {
    needle.get(url, function (err, res) {
        if (err) throw err

        // parsing DOM
        var $ = cheerio.load(res.body)

        //casino info
        if ($('.casino-card-heading')) {
            let bonusLinks = $('.casino-card-heading').find('a')

            bonusLinks.each((i, element) => {
                results.push({
                    link: element.attribs.href,
                })
            })
        }

        callback()
    })
}, 10) // 10 paralell streams

q.push(URL)

for (let i = 2; i < 480; i++) {
    q.drain = function () {
        fs.writeFileSync(`links-ua.json`, JSON.stringify(results, null, 4))
    }
    q.push(URL + '/' + i)
}
