export const tacticalList = ['stun grenade', 'heartbeat sensor', 'stim', 'flash grenade', 'smoke grenade', 'gas grenade', 'snapshot grenade', 'decoy grenade']

export const lethalList = ['throwing knife', 'semtex', 'frag grenade', 'thermite', 'c4', 'molotov cocktail', 'proximity mine', 'claymore']

export class rndEquipment {
    tactical: string
    lethal: string
    constructor() {
        this.tactical = this.rndTacticalGen()
        this.lethal = this.rndLethalGen()
    }
    rndTacticalGen() {
        return tacticalList[Math.floor(Math.random() * tacticalList.length)]
    }
    rndLethalGen() {
        return lethalList[Math.floor(Math.random() * lethalList.length)]
    }
}

