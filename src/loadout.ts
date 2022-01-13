import { Command } from 'commander';
import { ConstructorDeclaration, isConstructorTypeNode } from 'typescript';
// individual lists of all primary and secondary weapons
const arList = ['stg44 (vg)', 'cooper carbine (vg)', 'kilo 141 (mw)', 'grau 5.56 (mw)', 'ak-47 (cw)', 'm4a1 (mw)', 'm13 (mw)', 'xm4 (cw)',
    'bar (vg)', 'fara 83 (cw)', 'krig 6 (cw)', 'automaton (vg)', 'cr-56 amax (mw)', 'c58 (cw)', 'as44 (vg)', 'nz-41 (vg)', 'ffar 1 (cw)',
    'ram-7 (mw)', 'em2 (cw)', 'volkssturmgewehr (vg)', 'ak-47 (mw)', 'as val (mw)', 'itra burst (vg)', 'an-94 (mw)', 'fal (mw)', 'qbz-83 (mw)',
    'oden (mw)', 'fn scar 17 (mw)', 'grav (cw)', 'groza (cw)', 'fr 5.56 (mw)']

const smgList = ['mp-40 (vg)', 'mac-10 (cw)', 'ots 9 (cw)', 'ppsh-1 (vg)', 'mp5 (mw)', 'bullfrog (cw)', 'mp7 (mw)', 'm1912 (vg)', 'milano 821 (cw)',
    'ppsh-41 (cw)', 'mp5 (cw)', 'owen gun (vg)', 'type 100 (vg)', 'lc10 (cw)', 'ak-74u (cw)', 'sten (vg)', 'aug (mw)', 'p90 (mw)', 'cx-9 (mw)', 'fennec (mw)',
    'lapa (cw)', 'pp19 bizon (mw)', 'uzi (mw)', 'ksp 45 (cw)', 'iso (mw)', 'striker 45 (mw)', 'tec-9 (cw)', 'nail gun (cw)']

const lmgList = ['bren (vg)', 'mg42 (vg)', 'pkm (mw)', 'bruen (mw)', 'dp27 (vg)', 'type 11 (vg)', 'stoner 63 (cw)', 'rpd (cw)', 'finn lmg (mw)', 'mg 82 (cw)',
    'm91 (mw)', 'holger-26 (mw)', 'raal lmg (mw)', 'mg34 (mw)', 'm60 (cw)', 'sa87 (mw)']

const marksmanList = ['kar98k (mw)', 'sp-r 208 (mw)', 'm16 (cw)', 'm1 garand (vg)', 'dmr 14 (cw)', 'g-43 (cw)', 'aug (cw)', 'crossbow (mw)', 'svt-40 (vg)',
    'ebr-14 (mw)', 'carv.2 (cw)', 'mk2 carbine (mw)', 'sks (mw)', 'type 63 (cw)', 'r1 shadowhunter (cw)']

const sniperList = ['swiss k31 (cw)', 'kar98k (vg)', 'hdr (mw)', 'ax-50 (mw)', '3-line rifle (vg)', 'lw3 tundra (cw)', 'pelington 703 (cw)', 'gorenko anti=tank rifle (vg)',
    'type 99 (vg)', 'm82 (cw)', 'dragunov (mw)', 'zrg 20mm (cw)', 'rytec amr (mw)']

const shotgunList = ['double barrel (vg)', 'einhorn revolving (vg)', 'gallo sa12 (cw)', 'model 680 (mw)', 'combat shotgun (vg)', 'r9-0 shotgun (mw)',
    'origin 12 shotgun (mw)', 'jak-12 (mw)', 'streetsweeper (cw)', '725 (mw)', 'hauer 77 (cw)', 'gracey auto (vg)', 'vlk rogue (mw)']

const meleePriList = ['riot shield (mw)', 'combat shield (vg)']

const launcherList = ['rpg-7 (mw)', 'pila (mw)', 'm1 bazooka (vg)', 'panzerfaust (vg)', 'cigma 2 (cw)', 'panzerschreck (vg)', 'strela-p (mw)', 'mk11 launcher (vg)',
    'jokr (mw)', 'm79 (cw)']

const pistolList = ['diamatti (cw)', '1911 (vg)', '1911 (mw)', 'ratt (vg)', 'sykov (mw)', 'machine pistol (vg)', 'top break (vg)', 'klauser (vg)', 'renetti (mw)',
    'x16 (mw)', 'amp63 (cw)', '50 gs (vg)', 'm19 (mw)', '1911 (cw)', '357 (mw)', 'magnum (cw)', 'marshal (cw)']

const meleeSecList = ['fs fighting knife (vg)', 'combat knife (mw)', 'kali sticks (mw)', 'knife (cw)', 'ballistic knife (cw)']

const perkOneList = ['double time', 'cold blooded', 'e.o.d.', 'quick fix', 'kill chain', 'scavenger']

const perkTwoList = ['ghost', 'overkill', 'high alert', 'restock', 'tempered', 'hardline', 'pointman']

const perkThreeList = ['combat scout', 'amped', 'tracker', 'tune up', 'battle hardened', 'shrapnel', 'spotter']

const allPrimaryWeaponsList = arList.concat(smgList).concat(lmgList).concat(marksmanList).concat(sniperList).concat(shotgunList).concat(meleePriList)

const allSecondaryWeaponsList = pistolList.concat(launcherList).concat(meleeSecList)

const program = new Command();

function errorColorRed(str) {
    return `\x1b[31m${str}\x1b[0m`
}
program
    .option('--priType <type>', 'input a specific primary weapon type for your loadout')
    .option('--secType <type>', 'input a specific secondary weapon type for your loadout')
    .addHelpText('after', `Command List:

            --priType assaultRifle
            --priype smg
            --priType lmg
            --priType marksman
            --priType sniper
            --priType shotgun
            --priType melee

            --secType launcher
            --secType pistol
            --secType melee
            `)
    .configureOutput({
        writeOut: (str) => process.stdout.write(`[OUT] ${str}`),
        writeErr: (str) => process.stdout.write(`[ERR] ${str} --help for a list of all options`),
        outputError: (str, write) => write(errorColorRed(str))
    })

program.parse(process.argv);

const commandLineOptions = program.opts()
console.log('\x1b[36m%s\x1b[0m ', 'Selection', commandLineOptions)
class Loadout {
    rndPrimary
    rndSecondary
    rndPerkOne
    rndPerkTwo
    rndPerkThree
    constructor() {
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
                this.rndSecondary = this.rndSecWpGen()
            default:
                this.rndSecondary = this.rndSecWpGen()
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
    meleeSecondaryGen() {
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
function loadoutRandomizer() {
    return new Loadout()
}
console.log(loadoutRandomizer())

