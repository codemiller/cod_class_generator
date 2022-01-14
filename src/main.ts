import { Command } from "commander";
import { Loadout } from "./loadout";

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
console.log(commandLineOptions)
console.log(new Loadout(commandLineOptions))
