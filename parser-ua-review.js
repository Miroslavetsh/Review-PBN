const tress = require('tress')
const needle = require('needle')
const cheerio = require('cheerio')
const fs = require('fs')

const LINKS = [
    {
        link: 'https://kasinoguru-ua.com/ohlyad-wolf-bet-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-arenabet-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Wildblaster-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Star-Casino-BE',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-XCasino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-thunderpick-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-sapphirebet-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-TTR-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-bet-sensation-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-wirwetten-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-poker-match-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-dinamobet-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-kingdom-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-trustdice-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Rox-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-RioBet-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-BitStarz-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-casinoin',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-vavada-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Zodiac-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-paradise-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-winz-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-instantpay-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-gamdom-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Sunmaker-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-LVbet-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Marathonbet-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-vegas-avtomati-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-jvspin-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-power-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Cleopatra-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Chanz-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Party-Poker-Casino-1',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-paradice-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Flint-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Yukon-Gold-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Lady-Hammer-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Maria-Casino-1',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Luxury-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Unibet-Casino-1',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Party-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Sol-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Fresh-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-OSHI-CASINO',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-jet-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-crocobet-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-betlive-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Bet365-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Slotum-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-kultakaivos-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-parimatch-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Rizk-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-NordicBet-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Kaboo-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Casilando-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-casino-winner',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-scratch2cash-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-full-tilt-casino-eu',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-spinago-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-stake-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Guts-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Tropezia-Palace-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Casino-Action',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-race-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-masked-singer-uk-games-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-PlayGrand-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-fruity-casa-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-foxy-bingo-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-lucky-days-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Slingo-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Cashmio-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-DrueckGlueck-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-21-Prive-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-bingo-com-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-EmuCasino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-playjango-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-tempobet-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-casino-770',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-roobet-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-SpinSon-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Gossip-Slots-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Betsson-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Sunnyplayer-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Novibet-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-energywin-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-HighRoller-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-EUcasino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Play-Club-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Get-Lucky-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Wishmaker-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Slotzo-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-golden-vegas-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Cherry-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Slots-Magic-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Betway-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Betsafe-Casino-1',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-William-Hill-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Euroslots-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Prime-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Tipwin-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-cheeky-bingo-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Betn1-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-leovegas-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Diamond-7-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Gday-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-AHTI-Games-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-NorgesSpill-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Mainstage-Bingo-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-bacanaplay-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-turbonino-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Everum-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-321crypto-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Interwetten-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-LuckyNiki-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Playojo-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-LunaCasino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Bitsler-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Super-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Eurolotto-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Casumo-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-bwin-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-CasinoEuro',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-spingenie-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Golden-Euro-Casino-1',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-EuroCasino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-West-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Luckland-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Roaring21-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Matchbook-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-bcasino-1',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-bspin-io-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-bets10-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Drake-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Playzee-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-leonbets-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-king-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-lucky-hit-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-vipgame-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Simba-Games-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Jackmillion-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Cashiopeia-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Hello-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Metal-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Charming-Slots-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-casinonic-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-slotnite-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-slotanza-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-spinshake-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Mega-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Mobilebet-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-LuckyLouis-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-CasinoMax',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-lucky-me-slots-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-heyspin-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-jambo-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-ice36-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-vevobahis-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-betfury-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-play-royal-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-21nova-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-ComeOn--Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-super-slots-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-jazzsports-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Prime-Slots-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-QueenVegas-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-SportsBetting-ag-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Sin-Spins-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Brango-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-cryptogamble-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-bitdice-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-duelbits-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-casinorex',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-the-hippodrome-online-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Blitz-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-666-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Championsbet-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Expekt-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-BetOnline-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-PirateSpin-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-bigmoneyscratch-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-betnow-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-spinfinity-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-777-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Casino-Extreme',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Cherry-Jackpot-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Fansbet-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Dreamz-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-winnings-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-lotoland-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Frank---Fred-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Goliath-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Cozino-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-oppa888-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-belliscasino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-estoril-sol-casino-esc',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-ace-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Casinsi-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-gopro-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-MrFavorit-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-betregal-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-top-uk-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-casino-vegas-baby',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-betdsi-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-publicwin-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-ngsbahis-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Casino-Midas',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Dream-Jackpot-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-3dice-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-MobileMillions-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Betzest-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-casigo-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Euro-Mania-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Spin-Rider-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Bitcasino-io',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Casinoland',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Jackpot247-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-SlotJar-Casino-1',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Jaak-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-tigergaming-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-liveroulette-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-playkasino-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-juega-en-linea-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-casino4u',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Casino-Mate-1',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Kaiser-Slots-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Reel-Island-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Atlantic-Spins-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Slotjerry-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-royal-slots-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-cmd368-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-native-gaming-casino-io',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Edgeless-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Spin-Samba-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-GemSlots-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Space-Lilly-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Casino-Share',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Adjarabet-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Dream-Vegas-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Casiplay-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-miami-jackpots-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-neptune-play-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-pokies2go-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-casino-nile',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-bet7-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-betbarter-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-azurcasino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-wild-card-city-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-pokerklas-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Desert-Nights-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Slots-Capital-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Fair-Go-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Jackpot-Capital-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Euro-Palace-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Sloto-Cash-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-VegasWinner-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-JackpotParadise-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Bitvest-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Miami-Dice-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-Spinland-Casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-jackpotlive-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-casino-fair',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-royal-bet-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-captain-spins-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-btb88-casino',
    },
    {
        link: 'https://kasinoguru-ua.com/ohlyad-x24bet-casino',
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
        fs.writeFileSync(`reviews-json/reviews-ua.json`, JSON.stringify(results, null, 4))
    }

    q.push(obj.link)
})
