export const muzzle = ['muzzle_slot_1', 'muzzle_slot_2', 'muzzle_slot_3', 'muzzle_slot_4', 'muzzle_slot_5']

export const barrel = ['barrel_slot_1', 'barrel_slot_2', 'barrel_slot_3', 'barrel_slot_4', 'barrel_slot_5']

export const underbarrel = ['underbarrel_slot_1', 'underbarrel_slot_2', 'underbarrel_slot_3', 'underbarrel_slot_4', 'underbarrel_slot_5']

export const magazine = ['magazine_slot_1', 'magazine_slot_2', 'magazine_slot_3', 'magazine_slot_4', 'magazine_slot_5']

export const optic = ['optic_slot_1', 'optic_slot_2', 'optic_slot_3', 'optic_slot_4', 'optic_slot_5']

export const rearGrip = ['rearGrip_slot_1', 'rearGrip_slot_2', 'rearGrip_slot_3', 'rearGrip_slot_4', 'rearGrip_slot_5']

export const stock = ['stock_slot_1', 'stock_slot_2', 'stock_slot_3', 'stock_slot_4', 'stock_slot_5']

export const allAttachmentsList = muzzle.concat(barrel).concat(underbarrel).concat(magazine).concat(optic).concat(rearGrip).concat(stock)


export class rndAttachments {
    attachment_1
    attachment_2
    attachment_3
    attachment_4
    attachment_5
    constructor() {
        this.attachment_1 = this.rndAllAttachments()
        this.attachment_2 = this.rndAllAttachments()
        this.attachment_3 = this.rndAllAttachments()
        this.attachment_4 = this.rndAllAttachments()
        this.attachment_5 = this.rndAllAttachments()

        // switch (.indexOf() != -1)) {
        //     case this.attachment_1 == this.attachment_2:
        //         this.rndAllAttachments()
        //         break
        //     case this.attachment_1 == this.attachment_3:
        //         break
        //     case this.attachment_1 == this.attachment_4:
        //         this.rndAllAttachments()
        //         break
        //     case this.attachment_1 == this.attachment_5:
        //         this.rndAllAttachments()
        //         break
        //     default:
        //         this.attachment_1 = this.rndAllAttachments()
        //         break
        // }
        // switch (this.attachment_2) {
        //     case this.attachment_2 == this.attachment_1:
        //         this.rndAllAttachments()
        //         break
        //     case this.attachment_2 == this.attachment_3:
        //         break
        //     case this.attachment_2 == this.attachment_4:
        //         this.rndAllAttachments()
        //         break
        //     case this.attachment_2 == this.attachment_5:
        //         this.rndAllAttachments()
        //         break
        //     default:
        //         this.attachment_2 = this.rndAllAttachments()
        //         break
        // }
        // switch (this.attachment_3) {
        //     case this.attachment_3 == this.attachment_2:
        //         this.rndAllAttachments()
        //         break
        //     case this.attachment_3 == this.attachment_1:
        //         break
        //     case this.attachment_3 == this.attachment_4:
        //         this.rndAllAttachments()
        //         break
        //     case this.attachment_3 == this.attachment_5:
        //         this.rndAllAttachments()
        //         break
        //     default:
        //         this.attachment_3 = this.rndAllAttachments()
        //         break
        // }
        // switch (this.attachment_4) {
        //     case this.attachment_4 == this.attachment_2:
        //         this.rndAllAttachments()
        //         break
        //     case this.attachment_4 == this.attachment_3:
        //         break
        //     case this.attachment_4 == this.attachment_1:
        //         this.rndAllAttachments()
        //         break
        //     case this.attachment_4 == this.attachment_5:
        //         this.rndAllAttachments()
        //         break
        //     default:
        //         this.attachment_4 = this.rndAllAttachments()
        //         break
        // }
        // switch (this.attachment_5) {
        //     case this.attachment_5 == this.attachment_2:
        //         this.rndAllAttachments()
        //         break
        //     case this.attachment_5 == this.attachment_3:
        //         break
        //     case this.attachment_5 == this.attachment_4:
        //         this.rndAllAttachments()
        //         break
        //     case this.attachment_5 == this.attachment_1:
        //         this.rndAllAttachments()
        //         break
        //     default:
        //         this.attachment_5 = this.rndAllAttachments()
        //         break
        // }
        // //   while(this.attachment_1 !== this.attachment_2 && this.attachment_3 && this.attachment_4 && this.attachment_5) {
        // // this.attachment_1 = this.rndAllAttachments()

        // // // while (this.attachment_2 !== this.attachment_1 && this.attachment_2 && this.attachment_3 && this.attachment_4 && this.attachment_5) {
        // // this.attachment_2 = this.rndAllAttachments()
        // // // }
        // // // while (this.attachment_3 !== this.attachment_1 && this.attachment_2 && this.attachment_4 && this.attachment_5) {
        // // this.attachment_3 = this.rndAllAttachments()
        // // // }
        // // // while (this.attachment_4 !== this.attachment_1 && this.attachment_2 && this.attachment_3 && this.attachment_5) {
        // // this.attachment_4 = this.rndAllAttachments()
        // // // }
        // // // while (this.attachment_5 !== this.attachment_1 && this.attachment_2 && this.attachment_3 && this.attachment_4) {
        // // this.attachment_5 = this.rndAllAttachments()
        // // }
        // //     case 'shotgun':
        // //         this.weapon = this.rndShotgunGen()
        // //         break
        // //     case 'melee':
        // //         this.weapon = this.rndMeleePrimaryGen()
        // //         break
        // //     default:
        // //         this.weapon = this.rndPrimWpGen()
        // //         break
        // // }
        // // this.attachment_1 = this.rndBarrel()
        // // this.attachment_2 = this.compareKeys(this.attachment_2)
        // // this.attachment_3 = this.compareKeys(this.attachment_3)
        // // this.attachment_4 = this.compareKeys(this.attachment_4)
        // // this.attachment_5 = this.compareKeys(this.attachment_5)


    }
    rndBarrel() {
        return ['barrel', barrel[Math.floor(Math.random() * barrel.length)]]
    }
    rndMuzzle() {
        return ['muzzle', muzzle[Math.floor(Math.random() * muzzle.length)]]
    }
    rndUnderbarrel() {
        return ['underbarrel', underbarrel[Math.floor(Math.random() * underbarrel.length)]]
    }
    rndMagazine() {
        return ['magazine', magazine[Math.floor(Math.random() * magazine.length)]]
    }
    rndOptic() {
        return ['optic', optic[Math.floor(Math.random() * optic.length)]]
    }
    rndRearGrip() {
        return ['rearGrip', rearGrip[Math.floor(Math.random() * rearGrip.length)]]
    }
    rndStock() {
        return ['stock', stock[Math.floor(Math.random() * stock.length)]]
    }
    rndAllAttachments() {
        return allAttachmentsList[Math.floor(Math.random() * allAttachmentsList.length)]
    }
attachGen() {
    this.attachment_1 = this.rndAllAttachments()
    this.attachment_2 = this.rndAllAttachments()
    this.attachment_3 = this.rndAllAttachments()
    this.attachment_4 = this.rndAllAttachments()
    this.attachment_5 = this.rndAllAttachments()
}
}
// compareAttachments(input) {
//     const rndAllAttachmentsVar = allAttachmentsList
//     const attachmentChoice = this.attachGen()
//     if(attachmentChoice !== attachmentChoice) {
//         return attachmentChoice
// }

// const rndAllAttachmentsVar = allAttachmentsList[Math.floor(Math.random() * allAttachmentsList.length)]
// }
// function rndAllAttachments() {
//     return allAttachmentsList[Math.floor(Math.random() * allAttachmentsList.length)]
     
// }
console.log('new rndAttachments', new rndAttachments())
