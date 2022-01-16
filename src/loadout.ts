import { Command } from 'commander';
import { ConstructorDeclaration, isConstructorTypeNode } from 'typescript';
import { lethalList, rndEquipment, tacticalList } from './equipment';
import { perkOneList, perkTwoList, perkThreeList, rndPerks } from './perks';
import { allPrimaryWeaponsList, allSecondaryWeaponsList, arList, launcherList, lmgList, marksmanList, meleePriList, meleeSecList, pistolList, rndSecondaryGun as rndSecondaryGun, shotgunList, smgList, sniperList } from './weapons';
// individual lists of all primary and secondary weapons
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


