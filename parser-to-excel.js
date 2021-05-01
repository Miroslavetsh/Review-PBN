const xlsx = require('xlsx')

const dataCashback = require('./data/data-cashback.json')
const dataFreespins = require('./data/data-freespins.json')
const dataHighRoller = require('./data/data-high-roller.json')
const dataMatchDeposits = require('./data/data-match-deposit.json')
const dataNoDeposits = require('./data/data-no-deposits.json')
const dataReload = require('./data/data-reload.json')
const dataWelcome = require('./data/data-welcome.json')

const data = [
    dataCashback,
    dataFreespins,
    dataHighRoller,
    dataMatchDeposits,
    dataNoDeposits,
    dataReload,
    dataWelcome,
]

let result = []

data.forEach((dataElem) => {
    dataElem.forEach((data) => {
        let nameArr = []
        nameArr.push(data.elem.casinoName)
        result.push(nameArr)
    })
})

const workbook = xlsx.readFile('./exports/names.xlsx')
const ws = workbook.Sheets['Sheet1']

const newWB = xlsx.utils.book_new()
const newWS = xlsx.utils.aoa_to_sheet(result)
xlsx.utils.book_append_sheet(newWB, newWS, 'Names')

xlsx.writeFile(newWB, './exports/data.xlsx')
