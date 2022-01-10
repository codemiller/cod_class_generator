// create a class 'loadout' that houses 3 perks
// create a new class that passes in the Objects with functions
class Loadout {
    rndPriWeapon
    rndSecWeapon
    rndThreePerks

    constructor(rndPriWeapon, rndSecWeapon, rndThreePerks) {
        this.rndPriWeapon = rndPriWeapon;
        this.rndSecWeapon = rndSecWeapon
        this.rndThreePerks = rndThreePerks;
    }

}
const allPrimaryWeapons = {
    arList: ['stg44 (vg)', 'cooper carbine (vg)', 'kilo 141 (mw)', 'grau 5.56 (mw)', 'ak-47 (cw)', 'm4a1 (mw)', 'm13 (mw)', 'xm4 (cw)',
        'bar (vg)', 'fara 83 (cw)', 'krig 6 (cw)', 'automaton (vg)', 'cr-56 amax (mw)', 'c58 (cw)', 'as44 (vg)', 'nz-41 (vg)', 'ffar 1 (cw)',
        'ram-7 (mw)', 'em2 (cw)', 'volkssturmgewehr (vg)', 'ak-47 (mw)', 'as val (mw)', 'itra burst (vg)', 'an-94 (mw)', 'fal (mw)', 'qbz-83 (mw)',
        'oden (mw)', 'fn scar 17 (mw)', 'grav (cw)', 'groza (cw)', 'fr 5.56 (mw)'],

    lmgList: ['bren (vg)', 'mg42 (vg)', 'pkm (mw)', 'bruen (mw)', 'dp27 (vg)', 'type 11 (vg)', 'stoner 63 (cw)', 'rpd (cw)', 'finn lmg (mw)', 'mg 82 (cw)',
        'm91 (mw)', 'holger-26 (mw)', 'raal lmg (mw)', 'mg34 (mw)', 'm60 (cw)', 'sa87 (mw)'],

    marksmanList: ['kar98k (mw)', 'sp-r 208 (mw)', 'm16 (cw)', 'm1 garand (vg)', 'dmr 14 (cw)', 'g-43 (cw)', 'aug (cw)', 'crossbow (mw)', 'svt-40 (vg)',
        'ebr-14 (mw)', 'carv.2 (cw)', 'mk2 carbine (mw)', 'sks (mw)', 'type 63 (cw)', 'r1 shadowhunter (cw)'],

    sniperList: ['swiss k31 (cw)', 'kar98k (vg)', 'hdr (mw)', 'ax-50 (mw)', '3-line rifle (vg)', 'lw3 tundra (cw)', 'pelington 703 (cw)', 'gorenko anti=tank rifle (vg)',
        'type 99 (vg)', 'm82 (cw)', 'dragunov (mw)', 'zrg 20mm (cw)', 'rytec amr (mw)'],

    meleeList: ['riot shield (mw)', 'combat shield (vg)']
}
const allSecondaryWeapons = {
    smgList: ['mp-40 (vg)', 'mac-10 (cw)', 'ots 9 (cw)', 'ppsh-1 (vg)', 'mp5 (mw)', 'bullfrog (cw)', 'mp7 (mw)', 'm1912 (vg)', 'milano 821 (cw)',
        'ppsh-41 (cw)', 'mp5 (cw)', 'owen gun (vg)', 'type 100 (vg)', 'lc10 (cw)', 'ak-74u (cw)', 'sten (vg)', 'aug (mw)', 'p90 (mw)', 'cx-9 (mw)', 'fennec (mw)',
        'lapa (cw)', 'pp19 bizon (mw)', 'uzi (mw)', 'ksp 45 (cw)', 'iso (mw)', 'striker 45 (mw)', 'tec-9 (cw)', 'nail gun (cw)'],

    shotgunList: ['double barrel (vg)', 'einhorn revolving (vg)', 'gallo sa12 (cw)', 'model 680 (mw)', 'combat shotgun (vg)', 'r9-0 shotgun (mw)',
        'origin 12 shotgun (mw)', 'jak-12 (mw)', 'streetsweeper (cw)', '725 (mw)', 'hauer 77 (cw)', 'gracey auto (vg)', 'vlk rogue (mw)'],

    launcherList: ['rpg-7 (mw)', 'pila (mw)', 'm1 bazooka (vg)', 'panzerfaust (vg)', 'cigma 2 (cw)', 'panzerschreck (vg)', 'strela-p (mw)', 'mk11 launcher (vg)',
        'jokr (mw)', 'm79 (cw)'],

    pistolList: ['diamatti (cw)', '1911 (vg)', '1911 (mw)', 'ratt (vg)', 'sykov (mw)', 'machine pistol (vg)', 'top break (vg)', 'klauser (vg)', 'renetti (mw)',
        'x16 (mw)', 'amp63 (cw)', '50 gs (vg)', 'm19 (mw)', '1911 (cw)', '357 (mw)', 'magnum (cw)', 'marshal (cw)'],

    meleeList: ['fs fighting knife (vg)', 'combat knife (mw)', 'kali sticks (mw)', 'knife (cw)', 'ballistic knife (cw)']
}


const allPerks = {
    perkOneList: ['double time', 'cold blooded', 'e.o.d.', 'quick fix', 'kill chain', 'scavenger'],
    perkTwoList: ['ghost', 'overkill', 'high alert', 'restock', 'tempered', 'hardline', 'pointman'],
    perkThreeList: ['combat scout', 'amped', 'tracker', 'tune up', 'battle hardened', 'shrapnel', 'spotter']
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function rndPrimWpGen() {
    const rndPri_1 = getRandomInteger(0, allPrimaryWeapons.arList.length)
    const rndPri_2 = getRandomInteger(0, allPrimaryWeapons.lmgList.length)
    const rndPri_3 = getRandomInteger(0, allPrimaryWeapons.marksmanList.length)
    const rndPri_4 = getRandomInteger(0, allPrimaryWeapons.sniperList.length)
    const rndPri_5 = getRandomInteger(0, allPrimaryWeapons.meleeList.length)
    const rndPriWpOptions = [allPrimaryWeapons.arList[rndPri_1], allPrimaryWeapons.lmgList[rndPri_2], allPrimaryWeapons.marksmanList[rndPri_3], allPrimaryWeapons.sniperList[rndPri_4], allPrimaryWeapons.meleeList[rndPri_5]]
    const rndPriWpSelect = rndPriWpOptions[Math.floor(Math.random() * rndPriWpOptions.length)]
    return rndPriWpSelect
}

function rndSecWpGen() {
    const rndSec_1 = getRandomInteger(0, allSecondaryWeapons.smgList.length)
    const rndSec_2 = getRandomInteger(0, allSecondaryWeapons.shotgunList.length)
    const rndSec_3 = getRandomInteger(0, allSecondaryWeapons.launcherList.length)
    const rndSec_4 = getRandomInteger(0, allSecondaryWeapons.pistolList.length)
    const rndSec_5 = getRandomInteger(0, allSecondaryWeapons.meleeList.length)
    const rndSecWpOptions = [allSecondaryWeapons.smgList[rndSec_1], allSecondaryWeapons.shotgunList[rndSec_2], allSecondaryWeapons.launcherList[rndSec_3], allSecondaryWeapons.pistolList[rndSec_4], allSecondaryWeapons.meleeList[rndSec_5]]
    const rndSecWpSelect = rndSecWpOptions[Math.floor(Math.random() * rndSecWpOptions.length)]
    return rndSecWpSelect
}

function randomPerkGenerator() {
    const rndPerk1 = getRandomInteger(0, allPerks.perkOneList.length)
    const rndPerk2 = getRandomInteger(0, allPerks.perkTwoList.length)
    const rndPerk3 = getRandomInteger(0, allPerks.perkThreeList.length)
    const randomPerkSelection = [allPerks.perkOneList[rndPerk1], allPerks.perkTwoList[rndPerk2], allPerks.perkThreeList[rndPerk3]]
    return randomPerkSelection
}






function loadoutRandomizer() {
    const rndPriWeapon = rndPrimWpGen()
    const rndSecWeapon = rndSecWpGen()
    const rndThreePerks = randomPerkGenerator()
    const loadoutKit = new Loadout(rndPriWeapon, rndSecWeapon, rndThreePerks)
    return loadoutKit
}

console.log(loadoutRandomizer())
