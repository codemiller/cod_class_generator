import { parseCommandLine } from "typescript"
import { barrel, magazine, muzzle, optic, underbarrel } from "./attachments"
import { Loadout } from "./loadout"


export const arList = ['stg44 (vg)', 'cooper carbine (vg)', 'kilo 141 (mw)', 'grau 5.56 (mw)', 'ak-47 (cw)', 'm4a1 (mw)', 'm13 (mw)', 'xm4 (cw)',
    'bar (vg)', 'fara 83 (cw)', 'krig 6 (cw)', 'automaton (vg)', 'cr-56 amax (mw)', 'c58 (cw)', 'as44 (vg)', 'nz-41 (vg)', 'ffar 1 (cw)',
    'ram-7 (mw)', 'em2 (cw)', 'volkssturmgewehr (vg)', 'ak-47 (mw)', 'as val (mw)', 'itra burst (vg)', 'an-94 (mw)', 'fal (mw)', 'qbz-83 (mw)',
    'oden (mw)', 'fn scar 17 (mw)', 'grav (cw)', 'groza (cw)', 'fr 5.56 (mw)']

export const smgList = ['mp-40 (vg)', 'mac-10 (cw)', 'ots 9 (cw)', 'ppsh-1 (vg)', 'mp5 (mw)', 'bullfrog (cw)', 'mp7 (mw)', 'm1912 (vg)', 'milano 821 (cw)',
    'ppsh-41 (cw)', 'mp5 (cw)', 'owen gun (vg)', 'type 100 (vg)', 'lc10 (cw)', 'ak-74u (cw)', 'sten (vg)', 'aug (mw)', 'p90 (mw)', 'cx-9 (mw)', 'fennec (mw)',
    'lapa (cw)', 'pp19 bizon (mw)', 'uzi (mw)', 'ksp 45 (cw)', 'iso (mw)', 'striker 45 (mw)', 'tec-9 (cw)', 'nail gun (cw)']

export const lmgList = ['bren (vg)', 'mg42 (vg)', 'pkm (mw)', 'bruen (mw)', 'dp27 (vg)', 'type 11 (vg)', 'stoner 63 (cw)', 'rpd (cw)', 'finn lmg (mw)', 'mg 82 (cw)',
    'm91 (mw)', 'holger-26 (mw)', 'raal lmg (mw)', 'mg34 (mw)', 'm60 (cw)', 'sa87 (mw)']

export const marksmanList = ['kar98k (mw)', 'sp-r 208 (mw)', 'm16 (cw)', 'm1 garand (vg)', 'dmr 14 (cw)', 'g-43 (cw)', 'aug (cw)', 'crossbow (mw)', 'svt-40 (vg)',
    'ebr-14 (mw)', 'carv.2 (cw)', 'mk2 carbine (mw)', 'sks (mw)', 'type 63 (cw)', 'r1 shadowhunter (cw)']

export const sniperList = ['swiss k31 (cw)', 'kar98k (vg)', 'hdr (mw)', 'ax-50 (mw)', '3-line rifle (vg)', 'lw3 tundra (cw)', 'pelington 703 (cw)', 'gorenko anti=tank rifle (vg)',
    'type 99 (vg)', 'm82 (cw)', 'dragunov (mw)', 'zrg 20mm (cw)', 'rytec amr (mw)']

export const shotgunList = ['double barrel (vg)', 'einhorn revolving (vg)', 'gallo sa12 (cw)', 'model 680 (mw)', 'combat shotgun (vg)', 'r9-0 shotgun (mw)',
    'origin 12 shotgun (mw)', 'jak-12 (mw)', 'streetsweeper (cw)', '725 (mw)', 'hauer 77 (cw)', 'gracey auto (vg)', 'vlk rogue (mw)']

export const meleePriList = ['riot shield (mw)', 'combat shield (vg)']

export const launcherList = ['rpg-7 (mw)', 'pila (mw)', 'm1 bazooka (vg)', 'panzerfaust (vg)', 'cigma 2 (cw)', 'panzerschreck (vg)', 'strela-p (mw)', 'mk11 launcher (vg)',
    'jokr (mw)', 'm79 (cw)']

export const pistolList = ['diamatti (cw)', '1911 (vg)', '1911 (mw)', 'ratt (vg)', 'sykov (mw)', 'machine pistol (vg)', 'top break (vg)', 'klauser (vg)', 'renetti (mw)',
    'x16 (mw)', 'amp63 (cw)', '50 gs (vg)', 'm19 (mw)', '1911 (cw)', '357 (mw)', 'magnum (cw)', 'marshal (cw)']

export const meleeSecList = ['fs fighting knife (vg)', 'combat knife (mw)', 'kali sticks (mw)', 'knife (cw)', 'ballistic knife (cw)']

export const allPrimaryWeaponsList = arList.concat(smgList).concat(lmgList).concat(marksmanList).concat(sniperList).concat(shotgunList).concat(meleePriList)

export const allSecondaryWeaponsList = pistolList.concat(launcherList).concat(meleeSecList)


export class rndPrimaryGun {
    weapon: string
    attachment1: string
    attachment2: string
    attachment3: string
    attachment4: string
    attachment5: string
    constructor(input1) {
        switch (input1.priType) {
            case 'assaultRifle':
                this.weapon = this.rndARGen()
                break
            case 'smg':
                this.weapon = this.rndSMGGen()
                break
            case 'lmg':
                this.weapon = this.rndLMGGen()
                break
            case 'marksman':
                this.weapon = this.rndMarksmanGen()
                break
            case 'sniper':
                this.weapon = this.rndSniperGen()
                break
            case 'shotgun':
                this.weapon = this.rndShotgunGen()
                break
            case 'melee':
                this.weapon = this.rndMeleePrimaryGen()
                break
            default:
                this.weapon = this.rndPrimWpGen()
                break
        }
        this.attachment1 = this.rndAttachment1()
        this.attachment2 = this.rndAttachment2()
        this.attachment3 = this.rndAttachment3()
        this.attachment4 = this.rndAttachment4()
        this.attachment5 = this.rndAttachment5()
    }
    rndAttachment1() {
        return barrel[Math.floor(Math.random() * barrel.length)]
    }
    rndAttachment2() {
        return muzzle[Math.floor(Math.random() * muzzle.length)]
    }
    rndAttachment3() {
        return underbarrel[Math.floor(Math.random() * underbarrel.length)]
    }
    rndAttachment4() {
        return magazine[Math.floor(Math.random() * magazine.length)]
    }
    rndAttachment5() {
        return optic[Math.floor(Math.random() * optic.length)]
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
    rndPrimWpGen() {
        return allPrimaryWeaponsList[Math.floor(Math.random() * allPrimaryWeaponsList.length)]
    }
}

export class rndSecondaryGun {
    weapon: string
    attachment1: string
    attachment2: string
    attachment3: string
    attachment4: string
    attachment5: string
    constructor(input) {
        switch (input.secType) {
            case 'launcher':
                this.weapon = this.rndLauncherGen()
                break
            case 'pistol':
                this.weapon = this.rndPistolGen()
                break
            case 'melee':
                this.weapon = this.rndMeleeSecondaryGen()
                break
            default:
                this.weapon = this.rndSecWpGen()
                break
        }
        this.attachment1 = this.rndAttachment1()
        this.attachment2 = this.rndAttachment2()
        this.attachment3 = this.rndAttachment3()
        this.attachment4 = this.rndAttachment4()
        this.attachment5 = this.rndAttachment5()
    }
    rndAttachment1() {
        return barrel[Math.floor(Math.random() * barrel.length)]
    }
    rndAttachment2() {
        return muzzle[Math.floor(Math.random() * muzzle.length)]
    }
    rndAttachment3() {
        return underbarrel[Math.floor(Math.random() * underbarrel.length)]
    }
    rndAttachment4() {
        return magazine[Math.floor(Math.random() * magazine.length)]
    }
    rndAttachment5() {
        return optic[Math.floor(Math.random() * optic.length)]
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
    rndSecWpGen() {
        return allSecondaryWeaponsList[Math.floor(Math.random() * allSecondaryWeaponsList.length)]
    }
}