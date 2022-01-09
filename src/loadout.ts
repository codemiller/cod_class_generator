// create a class 'loadout' that houses 3 perks

class Loadout {
    perkOne
    perkTwo
    perkThree

    constructor(perkOne, perkTwo, perkThree) {
        this.perkOne = perkOne;
        this.perkTwo = perkTwo;
        this.perkThree = perkThree;
    }

}


const perkOneList = ['double time', 'cold blooded', 'e.o.d.', 'quick fix', 'kill chain', 'scavenger']
const perkTwoList = ['ghost', 'overkill', 'high alert', 'restock', 'tempered', 'hardline', 'pointman']
const perkThreeList = ['combat scout', 'amped', 'tracker', 'tune up', 'battle hardened', 'shrapnel', 'spotter']

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomPerkGenerator() {
    const randomInt1 = getRandomInteger(0, perkOneList.length)
    const randomInt2 = getRandomInteger(0, perkTwoList.length)
    const randomInt3 = getRandomInteger(0, perkThreeList.length)
    const randomPerkSelection = new Loadout(perkOneList[randomInt1], perkTwoList[randomInt2], perkThreeList[randomInt3])
    return randomPerkSelection
}
console.log(randomPerkGenerator())

