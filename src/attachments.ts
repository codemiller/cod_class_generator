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
        this.categoryGen()
    }
    categoryGen() {
        const categoryList = [barrel, muzzle, underbarrel, magazine, optic, rearGrip, stock]
        let wepGuy = []
        for (let i = 0; i < 5; i++) {
            const randomNumber = Math.floor(Math.random() * categoryList.length)
            const theRemovedList = categoryList.splice(randomNumber, 1).flat()
            wepGuy[i] = theRemovedList[Math.floor(Math.random() * theRemovedList.length)]
        }
        this.attachment_1 = wepGuy[0]
        this.attachment_2 = wepGuy[1]
        this.attachment_3 = wepGuy[2]
        this.attachment_4 = wepGuy[3]
        this.attachment_5 = wepGuy[4]
    }
}