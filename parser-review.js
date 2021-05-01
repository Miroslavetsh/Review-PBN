const tress = require('tress')
const needle = require('needle')
const cheerio = require('cheerio')
const fs = require('fs')

const LINKS = [
    {
        link: 'https://kasinoazov.org/obzor-surf-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-casoo-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Reel-Emperor-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-FavBet-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-bitcoincasino-io-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-wolf-bet-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Wildblaster-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Star-Casino-BE',
    },
    {
        link: 'https://kasinoazov.org/obzor-XCasino',
    },
    {
        link: 'https://kasinoazov.org/obzor-thunderpick-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-sapphirebet-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-bc-game-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-NetGame-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-5plusbet-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Chanz-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Party-Poker-Casino-1',
    },
    {
        link: 'https://kasinoazov.org/obzor-paradice-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Flint-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-TTR-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-bet-sensation-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-wirwetten-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Yukon-Gold-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Lady-Hammer-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Maria-Casino-1',
    },
    {
        link: 'https://kasinoazov.org/obzor-Luxury-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Unibet-Casino-1',
    },
    {
        link: 'https://kasinoazov.org/obzor-Party-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Sol-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-melbet-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-leaderbet-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-casino-z',
    },
    {
        link: 'https://kasinoazov.org/obzor-slotman-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-jvspin-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-power-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Cleopatra-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Rizk-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-NordicBet-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Kaboo-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Casilando-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-casino-winner',
    },
    {
        link: 'https://kasinoazov.org/obzor-scratch2cash-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-full-tilt-casino-eu',
    },
    {
        link: 'https://kasinoazov.org/obzor-PlayGrand-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-fruity-casa-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-21-Prive-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-foxy-bingo-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-lucky-days-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Slingo-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Prime-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-spinago-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-stake-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Guts-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Tropezia-Palace-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Casino-Action',
    },
    {
        link: 'https://kasinoazov.org/obzor-race-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-masked-singer-uk-games-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Tipwin-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-cheeky-bingo-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Betn1-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-LeoVegas-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Diamond-7-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Gday-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Cashmio-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-DrueckGlueck-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-bingo-com-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-EmuCasino',
    },
    {
        link: 'https://kasinoazov.org/obzor-playjango-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-tempobet-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-golden-vegas-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Cherry-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Mainstage-Bingo-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-bacanaplay-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-turbonino-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Everum-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-321crypto-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-HighRoller-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-EUcasino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Playojo-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-LunaCasino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Bitsler-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Super-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Eurolotto-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-AHTI-Games-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-NorgesSpill-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Slots-Magic-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Betway-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Betsafe-Casino-1',
    },
    {
        link: 'https://kasinoazov.org/obzor-William-Hill-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Euroslots-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Interwetten-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-LuckyNiki-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Play-Club-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Get-Lucky-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Wishmaker-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Slotzo-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-casino-770',
    },
    {
        link: 'https://kasinoazov.org/obzor-roobet-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-SpinSon-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-bcasino-1',
    },
    {
        link: 'https://kasinoazov.org/obzor-bspin-io-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-bets10-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Drake-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Casumo-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-bwin-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-CasinoEuro',
    },
    {
        link: 'https://kasinoazov.org/obzor-Casino-Extreme',
    },
    {
        link: 'https://kasinoazov.org/obzor-Cherry-Jackpot-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Expekt-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Fansbet-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Dreamz-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-winnings-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-lotoland-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-ice36-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-vevobahis-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-betfury-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-play-royal-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-21nova-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-ComeOn--Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-777-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-lucky-hit-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Simba-Games-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-JackpotParadise-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Jackmillion-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Cashiopeia-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Casino-Midas',
    },
    {
        link: 'https://kasinoazov.org/obzor-Hello-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-spingenie-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Golden-Euro-Casino-1',
    },
    {
        link: 'https://kasinoazov.org/obzor-EuroCasino',
    },
    {
        link: 'https://kasinoazov.org/obzor-West-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Playzee-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-leonbets-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-king-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Mega-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Mobilebet-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-LuckyLouis-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-CasinoMax',
    },
    {
        link: 'https://kasinoazov.org/obzor-lucky-me-slots-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-heyspin-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-jambo-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Metal-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Gate-777-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Charming-Slots-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-casinonic-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-slotnite-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-slotanza-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-spinshake-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-cryptogamble-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-bitdice-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-tsars-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-duelbits-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-casinorex',
    },
    {
        link: 'https://kasinoazov.org/obzor-the-hippodrome-online-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Blitz-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-666-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Championsbet-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-BetOnline-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-PirateSpin-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-bigmoneyscratch-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-betnow-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-spinfinity-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Rox-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-RioBet-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-BitStarz-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-casinoin',
    },
    {
        link: 'https://kasinoazov.org/obzor-vavada-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Zodiac-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-paradise-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-liveroulette-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-playkasino-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-juega-en-linea-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-casino4u',
    },
    {
        link: 'https://kasinoazov.org/obzor-Casino-Mate-1',
    },
    {
        link: 'https://kasinoazov.org/obzor-Edgeless-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Spin-Samba-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Fresh-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-OSHI-CASINO',
    },
    {
        link: 'https://kasinoazov.org/obzor-jet-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-crocobet-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-betlive-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Bet365-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Slotum-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-super-slots-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-jazzsports-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Prime-Slots-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-QueenVegas-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-SportsBetting-ag-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Sin-Spins-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Brango-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Spin-Rider-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Bitcasino-io',
    },
    {
        link: 'https://kasinoazov.org/obzor-Casinoland',
    },
    {
        link: 'https://kasinoazov.org/obzor-Jackpot247-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-SlotJar-Casino-1',
    },
    {
        link: 'https://kasinoazov.org/obzor-Jaak-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-tigergaming-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Frank---Fred-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Goliath-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Cozino-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-oppa888-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-belliscasino',
    },
    {
        link: 'https://kasinoazov.org/obzor-estoril-sol-casino-esc',
    },
    {
        link: 'https://kasinoazov.org/obzor-ace-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-gopro-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-MrFavorit-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-betregal-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-top-uk-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-casino-vegas-baby',
    },
    {
        link: 'https://kasinoazov.org/obzor-betdsi-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Euro-Mania-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-ngsbahis-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Dream-Jackpot-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-3dice-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-MobileMillions-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Betzest-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Casinsi-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Betclic-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-GemSlots-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Space-Lilly-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Casino-Share',
    },
    {
        link: 'https://kasinoazov.org/obzor-Adjarabet-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Dream-Vegas-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Casiplay-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-miami-jackpots-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-btb88-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-x24bet-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-casigo-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Desert-Nights-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Slots-Capital-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Fair-Go-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Jackpot-Capital-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-jackpotlive-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-casino-fair',
    },
    {
        link: 'https://kasinoazov.org/obzor-royal-bet-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-Slotjerry-Casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-royal-slots-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-cmd368-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-native-gaming-casino-io',
    },
    {
        link: 'https://kasinoazov.org/obzor-azurcasino',
    },
    {
        link: 'https://kasinoazov.org/obzor-wild-card-city-casino',
    },
    {
        link: 'https://kasinoazov.org/obzor-pokerklas-casino',
    },
]

let results = []

const q = tress(function (url, callback) {
    needle.get(url, function (err, res) {
        if (err) throw err

        // parsing DOM
        const $ = cheerio.load(res.body)

        //casino info
        if ($('.casino-detail-cols-wrapper')) {
            const mainContainer = $('.casino-detail-cols-wrapper')

            // get casino info
            let logos = mainContainer.find('.casino-logo')
            let raitings = mainContainer.find('.rating span b')
            let titles = mainContainer.find('.neo-fs-28')
            let ukrAcceptings = mainContainer.find('.middle')
            let paymentMethodsImage = mainContainer.find('.casino-detail-logos-item img')
            let paymentMethodsTitle = mainContainer.find('.casino-detail-logos-item a')
            let licenses = mainContainer.find('li.items-center')
            let descriptions = mainContainer.find('.casino-detail-description p')
            let games = mainContainer.find('.casino-open-icons-item')
            let providersImage = mainContainer.find(
                '.casino-detail-box-game-providers .casino-detail-logos-item a img',
            )
            let providersTitle = mainContainer.find(
                '.casino-detail-box-game-providers .casino-detail-logos-item a',
            )
            let pros = mainContainer.find('.bullet.bullet-md.green')
            let cons = mainContainer.find('.bullet.bullet-md.red')

            for (let i = 0; i < logos.length; i++) {
                // payments
                let paymentMethodsObj = {}
                let licensesObj = {}
                let descriptionsObj = {}
                let gamesObj = {}
                let providersObj = {}
                let prosObj = {}
                let consObj = {}

                // Payment
                paymentMethodsImage.map((i, elem) => {
                    paymentMethodsObj[`images`] = {
                        ...paymentMethodsObj['images'],
                        [`image-${i}`]: elem.attribs['data-src'],
                    }
                })

                paymentMethodsTitle.map((i, elem) => {
                    paymentMethodsObj[`titles`] = {
                        ...paymentMethodsObj['titles'],
                        [`title-${i}`]: elem.attribs['title'],
                    }
                })

                licenses.map((i, elem) => {
                    licensesObj[`license-${i + 1}`] = $(elem).text()
                })

                descriptions.map((i, elem) => {
                    descriptionsObj[`desc-${i + 1}`] = $(elem).text()
                })

                games.map((i, elem) => {
                    gamesObj[`game-${i + 1}`] = $(elem).text()
                })

                // Providers
                providersImage.map((i, elem) => {
                    providersObj[`images`] = {
                        ...providersObj[`images`],
                        [`image-${i}`]: elem.attribs['data-src'],
                    }
                })

                providersTitle.map((i, elem) => {
                    providersObj[`titles`] = {
                        ...providersObj[`titles`],
                        [`title-${i}`]: elem.attribs['title'],
                    }
                })

                pros.map((i, elem) => {
                    prosObj[`pros-${i + 1}`] = $(elem).next().text()
                })

                cons.map((i, elem) => {
                    consObj[`cons-${i + 1}`] = $(elem).next().text()
                })

                results.push({
                    imgSrc: logos[i].attribs.src,
                    rating: $(raitings[i]).text(),
                    title: $(titles[i]).text(),
                    ukrAccepting: $(ukrAcceptings[i]).text(),
                    paymentMethods: paymentMethodsObj,
                    licenses: licensesObj,
                    descriptions: descriptionsObj,
                    games: gamesObj,
                    providers: providersObj,
                    pros: prosObj,
                    cons: consObj,
                })
            }
        }

        callback()
    })
}, 10) // 10 paralell streams

LINKS.forEach((obj) => {
    q.drain = function () {
        fs.writeFileSync(`reviews-json/reviews.json`, JSON.stringify(results, null, 4))
    }

    q.push(obj.link)
})
