// create a class 'loadout' that houses 3 perks
// create a new class that does not use parameters in the constructor
// instead updates the objects via functions within the class

// consider changing the method of getting a random weapon choice to make it more random.
// currently there is an equally random chance of getting any weapon category
// possibly add weighted probability based on number of weapons in category?
// or make 1 single weapon array with all primary weapons and pull from there


// function weightedRandom(prob) {
//     let i, sum = 0, r = Math.random();
//     for (i in prob) {
//         sum += prob[i];
//         if (r <= sum) return i;
//     }
// console.log('weightedRandom function: ', weightedRandom({arList: 0.26, smgList:0.24}))

{primaryWeaponsTotal: 118}
{ar: 31} // 0.26
{smg: 28} // 0.24
{lmg: 16} // 0.14
{marksman: 15} // 0.13
{shotgun: 13} // 0.11
{sniper: 13} // 0.11
{melee: 2} // 0.01

// function rndPrimWpGen() {
//     // const rndPri_1 = getRandomInteger(0, allPrimaryWeapons.arList.length)
//     // const rndPri_2 = getRandomInteger(0, allPrimaryWeapons.smgList.length)
//     // const rndPri_3 = getRandomInteger(0, allPrimaryWeapons.lmgList.length)
//     // const rndPri_4 = getRandomInteger(0, allPrimaryWeapons.marksmanList.length)
//     // const rndPri_5 = getRandomInteger(0, allPrimaryWeapons.sniperList.length)
//     // const rndPri_6 = getRandomInteger(0, allPrimaryWeapons.shotgunList.length)
//     // const rndPri_7 = getRandomInteger(0, allPrimaryWeapons.meleeList.length)
//     // const rndPriWpOptions_1 = allPrimaryWeapons.arList[rndPri_1]
//     // const rndPriWpOptions_2 = allPrimaryWeapons.smgList[rndPri_2]
//     // const rndPriWpOptions_3 = allPrimaryWeapons.lmgList[rndPri_3]
//     // const rndPriWpOptions_4 = allPrimaryWeapons.marksmanList[rndPri_4]
//     // const rndPriWpOptions_5 = allPrimaryWeapons.sniperList[rndPri_5]
//     // const rndPriWpOptions_6 = allPrimaryWeapons.shotgunList[rndPri_6]
//     // const rndPriWpOptions_7 = allPrimaryWeapons.meleeList[rndPri_7]
//     // const rndPriOptionsList = [rndPriWpOptions_1, rndPriWpOptions_2, rndPriWpOptions_3, rndPriWpOptions_4, rndPriWpOptions_5, rndPriWpOptions_6, rndPriWpOptions_7]
//     // weightedRndPrimary({ rndPriWpOptions_1: 0.26, rndPriWpOptions_2: 0.24, rndPriWpOptions_3: 0.14, rndPriWpOptions_4: 0.13, rndPriWpOptions_5: 0.11, rndPriWpOptions_6: 0.11, rndPriWpOptions_7: 0.01 })   
//     const rndPriList = [rndPriWpOptions_1, rndPriWpOptions_2, rndPriWpOptions_3, rndPriWpOptions_4, rndPriWpOptions_5, rndPriWpOptions_6, rndPriWpOptions_7]
//     const rndPriWpSelect = rndPriList[Math.floor(Math.random() * rndPriList.length)]
//     return rndPriWpSelect
// }

// class Loadout {
//     rndPriWeapon() {
//         rndPrimWpGen();
//         this.rndPriWpGen() = rndPrimWpGen() { }
//     }
//     rndSecWeapon
//     rndPerkOne
//     rndPerkTwo
//     rndPerkThree
// }
// this.rndPriWeapon = rndPrimWpGen();
// this.rndSecWeapon = rndSecWpGen();
// this.rndPerkOne = rndPerkOneGen();
// this.rndPerkTwo = rndPerkTwoGen();
// this.rndPerkThree = rndPerkThreeGen;
// }
// const randomLoadout = new Loadout();

// const arList = ['stg44 (vg)', 'cooper carbine (vg)', 'kilo 141 (mw)', 'grau 5.56 (mw)', 'ak-47 (cw)', 'm4a1 (mw)', 'm13 (mw)', 'xm4 (cw)',
//     'bar (vg)', 'fara 83 (cw)', 'krig 6 (cw)', 'automaton (vg)', 'cr-56 amax (mw)', 'c58 (cw)', 'as44 (vg)', 'nz-41 (vg)', 'ffar 1 (cw)',
//     'ram-7 (mw)', 'em2 (cw)', 'volkssturmgewehr (vg)', 'ak-47 (mw)', 'as val (mw)', 'itra burst (vg)', 'an-94 (mw)', 'fal (mw)', 'qbz-83 (mw)',
//     'oden (mw)', 'fn scar 17 (mw)', 'grav (cw)', 'groza (cw)', 'fr 5.56 (mw)']

// const smgList = ['mp-40 (vg)', 'mac-10 (cw)', 'ots 9 (cw)', 'ppsh-1 (vg)', 'mp5 (mw)', 'bullfrog (cw)', 'mp7 (mw)', 'm1912 (vg)', 'milano 821 (cw)',
//     'ppsh-41 (cw)', 'mp5 (cw)', 'owen gun (vg)', 'type 100 (vg)', 'lc10 (cw)', 'ak-74u (cw)', 'sten (vg)', 'aug (mw)', 'p90 (mw)', 'cx-9 (mw)', 'fennec (mw)',
//     'lapa (cw)', 'pp19 bizon (mw)', 'uzi (mw)', 'ksp 45 (cw)', 'iso (mw)', 'striker 45 (mw)', 'tec-9 (cw)', 'nail gun (cw)']

// const lmgList = ['bren (vg)', 'mg42 (vg)', 'pkm (mw)', 'bruen (mw)', 'dp27 (vg)', 'type 11 (vg)', 'stoner 63 (cw)', 'rpd (cw)', 'finn lmg (mw)', 'mg 82 (cw)',
//     'm91 (mw)', 'holger-26 (mw)', 'raal lmg (mw)', 'mg34 (mw)', 'm60 (cw)', 'sa87 (mw)']

// const marksmanList = ['kar98k (mw)', 'sp-r 208 (mw)', 'm16 (cw)', 'm1 garand (vg)', 'dmr 14 (cw)', 'g-43 (cw)', 'aug (cw)', 'crossbow (mw)', 'svt-40 (vg)',
//     'ebr-14 (mw)', 'carv.2 (cw)', 'mk2 carbine (mw)', 'sks (mw)', 'type 63 (cw)', 'r1 shadowhunter (cw)']

// const sniperList = ['swiss k31 (cw)', 'kar98k (vg)', 'hdr (mw)', 'ax-50 (mw)', '3-line rifle (vg)', 'lw3 tundra (cw)', 'pelington 703 (cw)', 'gorenko anti=tank rifle (vg)',
//     'type 99 (vg)', 'm82 (cw)', 'dragunov (mw)', 'zrg 20mm (cw)', 'rytec amr (mw)']

// const shotgunList = ['double barrel (vg)', 'einhorn revolving (vg)', 'gallo sa12 (cw)', 'model 680 (mw)', 'combat shotgun (vg)', 'r9-0 shotgun (mw)',
//     'origin 12 shotgun (mw)', 'jak-12 (mw)', 'streetsweeper (cw)', '725 (mw)', 'hauer 77 (cw)', 'gracey auto (vg)', 'vlk rogue (mw)']

// const meleePriList = ['riot shield (mw)', 'combat shield (vg)']
// const launcherList = ['rpg-7 (mw)', 'pila (mw)', 'm1 bazooka (vg)', 'panzerfaust (vg)', 'cigma 2 (cw)', 'panzerschreck (vg)', 'strela-p (mw)', 'mk11 launcher (vg)',
//     'jokr (mw)', 'm79 (cw)']

// const pistolList = ['diamatti (cw)', '1911 (vg)', '1911 (mw)', 'ratt (vg)', 'sykov (mw)', 'machine pistol (vg)', 'top break (vg)', 'klauser (vg)', 'renetti (mw)',
//     'x16 (mw)', 'amp63 (cw)', '50 gs (vg)', 'm19 (mw)', '1911 (cw)', '357 (mw)', 'magnum (cw)', 'marshal (cw)']

// const meleeSecList = ['fs fighting knife (vg)', 'combat knife (mw)', 'kali sticks (mw)', 'knife (cw)', 'ballistic knife (cw)']

class Loadout {
    rndPriWeapon
    rndSecWeapon
    rndPerkOne
    rndPerkTwo
    rndPerkThree
    constructor(rndPriWeapon, rndSecWeapon, rndPerkOne, rndPerkTwo, rndPerkThree) {
        this.rndPriWeapon = rndPriWeapon;
        this.rndSecWeapon = rndSecWeapon;
        this.rndPerkOne = rndPerkOne;
        this.rndPerkTwo = rndPerkTwo;
        this.rndPerkThree = rndPerkThree;
    }
}


const allPrimaryWeaponsList = ['stg44 (vg)', 'cooper carbine (vg)', 'kilo 141 (mw)', 'grau 5.56 (mw)', 'ak-47 (cw)', 'm4a1 (mw)', 'm13 (mw)', 'xm4 (cw)',
    'bar (vg)', 'fara 83 (cw)', 'krig 6 (cw)', 'automaton (vg)', 'cr-56 amax (mw)', 'c58 (cw)', 'as44 (vg)', 'nz-41 (vg)', 'ffar 1 (cw)',
    'ram-7 (mw)', 'em2 (cw)', 'volkssturmgewehr (vg)', 'ak-47 (mw)', 'as val (mw)', 'itra burst (vg)', 'an-94 (mw)', 'fal (mw)', 'qbz-83 (mw)',
    'oden (mw)', 'fn scar 17 (mw)', 'grav (cw)', 'groza (cw)', 'fr 5.56 (mw)', 'mp-40 (vg)', 'mac-10 (cw)', 'ots 9 (cw)', 'ppsh-1 (vg)', 'mp5 (mw)', 'bullfrog (cw)', 'mp7 (mw)', 'm1912 (vg)', 'milano 821 (cw)',
    'ppsh-41 (cw)', 'mp5 (cw)', 'owen gun (vg)', 'type 100 (vg)', 'lc10 (cw)', 'ak-74u (cw)', 'sten (vg)', 'aug (mw)', 'p90 (mw)', 'cx-9 (mw)', 'fennec (mw)',
    'lapa (cw)', 'pp19 bizon (mw)', 'uzi (mw)', 'ksp 45 (cw)', 'iso (mw)', 'striker 45 (mw)', 'tec-9 (cw)', 'nail gun (cw)', 'bren (vg)', 'mg42 (vg)', 'pkm (mw)', 'bruen (mw)', 'dp27 (vg)', 'type 11 (vg)', 'stoner 63 (cw)', 'rpd (cw)', 'finn lmg (mw)', 'mg 82 (cw)',
    'm91 (mw)', 'holger-26 (mw)', 'raal lmg (mw)', 'mg34 (mw)', 'm60 (cw)', 'sa87 (mw)', 'kar98k (mw)', 'sp-r 208 (mw)', 'm16 (cw)', 'm1 garand (vg)', 'dmr 14 (cw)', 'g-43 (cw)', 'aug (cw)', 'crossbow (mw)', 'svt-40 (vg)',
    'ebr-14 (mw)', 'carv.2 (cw)', 'mk2 carbine (mw)', 'sks (mw)', 'type 63 (cw)', 'r1 shadowhunter (cw)', 'swiss k31 (cw)', 'kar98k (vg)', 'hdr (mw)', 'ax-50 (mw)', '3-line rifle (vg)', 'lw3 tundra (cw)', 'pelington 703 (cw)', 'gorenko anti-tank rifle (vg)',
    'type 99 (vg)', 'm82 (cw)', 'dragunov (mw)', 'zrg 20mm (cw)', 'rytec amr (mw)', 'double barrel (vg)', 'einhorn revolving (vg)', 'gallo sa12 (cw)', 'model 680 (mw)', 'combat shotgun (vg)', 'r9-0 shotgun (mw)',
    'origin 12 shotgun (mw)', 'jak-12 (mw)', 'streetsweeper (cw)', '725 (mw)', 'hauer 77 (cw)', 'gracey auto (vg)', 'vlk rogue (mw)', 'riot shield (mw)', 'combat shield (vg)']

const allSecondaryWeaponsList = ['rpg-7 (mw)', 'pila (mw)', 'm1 bazooka (vg)', 'panzerfaust (vg)', 'cigma 2 (cw)', 'panzerschreck (vg)', 'strela-p (mw)', 'mk11 launcher (vg)',
    'jokr (mw)', 'm79 (cw)', 'diamatti (cw)', '1911 (vg)', '1911 (mw)', 'ratt (vg)', 'sykov (mw)', 'machine pistol (vg)', 'top break (vg)', 'klauser (vg)', 'renetti (mw)',
    'x16 (mw)', 'amp63 (cw)', '50 gs (vg)', 'm19 (mw)', '1911 (cw)', '357 (mw)', 'magnum (cw)', 'marshal (cw)', 'fs fighting knife (vg)', 'combat knife (mw)', 'kali sticks (mw)', 'knife (cw)', 'ballistic knife (cw)']

const perkOneList = ['double time', 'cold blooded', 'e.o.d.', 'quick fix', 'kill chain', 'scavenger']

const perkTwoList = ['ghost', 'overkill', 'high alert', 'restock', 'tempered', 'hardline', 'pointman']

const perkThreeList = ['combat scout', 'amped', 'tracker', 'tune up', 'battle hardened', 'shrapnel', 'spotter']

function getRandomInteger(min, max): any {
    return Math.floor(Math.random() * (max - min)) + min;
}
function rndPrimWpGen() {
    return allPrimaryWeaponsList[Math.floor(Math.random() * allPrimaryWeaponsList.length)]
}
function rndSecWpGen() {
    return allSecondaryWeaponsList[Math.floor(Math.random() * allSecondaryWeaponsList.length)]
}
function rndPerkOneGen() {
    return perkOneList[Math.floor(Math.random() * perkOneList.length)]
}
function rndPerkTwoGen() {
    return perkTwoList[Math.floor(Math.random() * perkTwoList.length)]
}
function rndPerkThreeGen() {
    return perkThreeList[Math.floor(Math.random() * perkThreeList.length)]
}
function loadoutRandomizer() {
    const rndPriWeapon = rndPrimWpGen()
    const rndSecWeapon = rndSecWpGen()
    const rndPerkOne = rndPerkOneGen()
    const rndPerkTwo = rndPerkTwoGen()
    const rndPerkThree = rndPerkThreeGen()
    const loadoutKit = new Loadout(rndPriWeapon, rndSecWeapon, rndPerkOne, rndPerkTwo, rndPerkThree)
    return loadoutKit
}
console.log(loadoutRandomizer())
