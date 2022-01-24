
import { rndEquipment } from './equipment';
import { rndPerks } from './perks';
import { rndSecondaryGun as rndSecondaryGun } from './weapons';
import { rndPrimaryGun as rndPrimaryGun } from './weapons';
export class Loadout {
    Primary: rndPrimaryGun
    Secondary: rndSecondaryGun
    Perks: rndPerks
    Equipment: rndEquipment
    constructor(commandLineOptions) {
        this.Primary = new rndPrimaryGun(commandLineOptions)
        this.Secondary = new rndSecondaryGun(commandLineOptions)
        this.Perks = new rndPerks()
        this.Equipment = new rndEquipment()
    }
}


