export const muzzle = ['muzzle_slot_1', 'muzzle_slot_2', 'muzzle_slot_3', 'muzzle_slot_4', 'muzzle_slot_5']

export const barrel = ['barrel_slot_1', 'barrel_slot_2', 'barrel_slot_3', 'barrel_slot_4', 'barrel_slot_5']

export const underbarrel = ['underbarrel_slot_1', 'underbarrel_slot_2', 'underbarrel_slot_3', 'underbarrel_slot_4', 'underbarrel_slot_5']

export const magazine = ['magazine_slot_1', 'magazine_slot_2', 'magazine_slot_3', 'magazine_slot_4', 'magazine_slot_5']

export const optic = ['optic_slot_1', 'optic_slot_2', 'optic_slot_3', 'optic_slot_4', 'optic_slot_5']

export const rearGrip = ['rearGrip_slot_1', 'rearGrip_slot_2', 'rearGrip_slot_3', 'rearGrip_slot_4', 'rearGrip_slot_5']

export const stock = ['stock_slot_1', 'stock_slot_2', 'stock_slot_3', 'stock_slot_4', 'stock_slot_5']

export const allAttachmentsList = muzzle.concat(barrel).concat(underbarrel).concat(magazine).concat(optic).concat(rearGrip).concat(stock)

//
// - Choose a random category for each attachment [check]
// - Once a category is selected it cannot be selected again
// - After all attachments have a category then select a random attachment from that category.


export class rndAttachments {
    attachment_1
    attachment_2
    attachment_3
    attachment_4
    attachment_5
    constructor() {    
        this.attachment_1 = this.categoryGen() // - a random attachment category is selected
        this.attachment_2 = this.categoryGen() 
        this.attachment_3 = this.categoryGen()
        this.attachment_4 = this.categoryGen()
        this.attachment_5 = this.categoryGen()

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
    categoryGen() {
        let categoryList = [barrel, muzzle, underbarrel, magazine, optic, rearGrip, stock]
        return categoryList[Math.floor(Math.random() * categoryList.length)]
    }
}
console.log('new rndAttachments', new rndAttachments())