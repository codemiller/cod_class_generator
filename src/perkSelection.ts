// select a perk from all 3 perk slots and console.logs them

// const perk1 = 'ghost'
// const perk2 = 'overkill'
// const perk3 = 'amped'

// function randomPerkGenerator() {
//     console.log(perk1, perk2, perk3)
// }

// randomPerkGenerator()


// let Perks = class {
//     constructor(perk1, perk2, perk3) {
//         this.perk1 = 'ghost';
//         this.perk2 = 'overkill';
//         this.perk3 = 'amped';
//     }
// }

const perk_1 = {
    option_1: 'ghost',
    option_2: 'overkill',
    option_3: 'amped',
};

function  randomPerkGenerator(perk_1) {
    var keys = Object.keys(perk_1);
    return perk_1[keys[keys.length * Math.random() << 0]];
}
console.log(randomPerkGenerator(perk_1))

// function perkGenerator() {
//     for (const property in perkSlots) {
//         console.log(`${property}: ${perkSlots[property]}`)
//     }
// }
// // expected output:
// // "perk1: ghost"
// // "perk2: overkill"
// // "perk3: amped"

// perkGenerator()
