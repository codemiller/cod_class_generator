import { Command } from 'commander';
import { ConstructorDeclaration, isConstructorTypeNode } from 'typescript';
import { perkOneList, perkTwoList, perkThreeList } from './perks';
import { allPrimaryWeaponsList, allSecondaryWeaponsList, arList, launcherList, lmgList, marksmanList, meleePriList, meleeSecList, pistolList, shotgunList, smgList, sniperList } from './weapons';
// individual lists of all primary and secondary weapons

export class Loadout {
    rndPrimary
    rndSecondary
    rndPerkOne
    rndPerkTwo
    rndPerkThree
    constructor(commandLineOptions) {
        switch (commandLineOptions.priType) {
            case 'assaultRifle':
                this.rndPrimary = this.rndARGen()
                break
            case 'smg':
                this.rndPrimary = this.rndSMGGen()
                break
            case 'lmg':
                this.rndPrimary = this.rndLMGGen()
                break
            case 'marksman':
                this.rndPrimary = this.rndMarksmanGen()
                break
            case 'sniper':
                this.rndPrimary = this.rndSniperGen()
                break
            case 'shotgun':
                this.rndPrimary = this.rndShotgunGen()
                break
            case 'melee':
                this.rndPrimary = this.rndMeleePrimaryGen()
                break
            default:
                this.rndPrimary = this.rndPrimWpGen()
                break
        }
        switch (commandLineOptions.secType) {
            case 'launcher':
                this.rndSecondary = this.rndLauncherGen()
                break
            case 'pistol':
                this.rndSecondary = this.rndPistolGen()
                break
            case 'melee':
                this.rndSecondary = this.rndMeleeSecondaryGen()
                break
            default:
                this.rndSecondary = this.rndSecWpGen()
                break
        }
        this.rndPerkOne = this.rndPerkOneGen();
        this.rndPerkTwo = this.rndPerkTwoGen();
        this.rndPerkThree = this.rndPerkThreeGen();

    }
    rndARGen() {
        return arList[Math.floor(Math.random() * arList.length)]
    }
    rndSMGGen() {
        return smgList[Math.floor(Math.random() * smgList.length)]
    }
    rndLMGGen() {
        return lmgList[Math.floor(Math.random() * lmgList.length)]
    }
    rndMarksmanGen() {
        return marksmanList[Math.floor(Math.random() * marksmanList.length)]
    }
    rndSniperGen() {
        return sniperList[Math.floor(Math.random() * sniperList.length)]
    }
    rndShotgunGen() {
        return shotgunList[Math.floor(Math.random() * shotgunList.length)]
    }
    rndMeleePrimaryGen() {
        return meleePriList[Math.floor(Math.random() * meleePriList.length)]
    }
    rndLauncherGen() {
        return launcherList[Math.floor(Math.random() * launcherList.length)]
    }
    rndPistolGen() {
        return pistolList[Math.floor(Math.random() * pistolList.length)]
    }
    rndMeleeSecondaryGen() {
        return meleeSecList[Math.floor(Math.random() * meleeSecList.length)]
    }
    rndPrimWpGen() {
        return allPrimaryWeaponsList[Math.floor(Math.random() * allPrimaryWeaponsList.length)]
    }
    rndSecWpGen() {
        return allSecondaryWeaponsList[Math.floor(Math.random() * allSecondaryWeaponsList.length)]
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


