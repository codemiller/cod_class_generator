export const perkOneList = ['double time', 'cold blooded', 'e.o.d.', 'quick fix', 'kill chain', 'scavenger']

export const perkTwoList = ['ghost', 'overkill', 'high alert', 'restock', 'tempered', 'hardline', 'pointman']

export const perkThreeList = ['combat scout', 'amped', 'tracker', 'tune up', 'battle hardened', 'shrapnel', 'spotter']

export class rndPerks {
    perkOne: string
    perkTwo: string
    perkThree: string
    constructor() {
        this.perkOne = this.rndPerkOneGen()
        this.perkTwo = this.rndPerkTwoGen()
        this.perkThree = this.rndPerkThreeGen()
    }
    rndPerkOneGen() {
        return perkOneList[Math.floor(Math.random() * perkOneList.length)]
    }
    rndPerkTwoGen() {
        return perkTwoList[Math.floor(Math.random() * perkTwoList.length)]
    }
    rndPerkThreeGen() {
        return perkThreeList[Math.floor(Math.random() * perkThreeList.length)]
    }
}
