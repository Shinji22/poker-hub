export default class Icon {
    constructor(folder, type) {
        this.folder = folder;
        this.type = type;
        this.icon16x16 = require(`../../assets/icons/${type}/${folder}/16x16.png`);
        this.icon32x32 = require(`../../assets/icons/${type}/${folder}/32x32.png`);
        this.icon48x48 = require(`../../assets/icons/${type}/${folder}/48x48.png`);
        this.icon60x60 = require(`../../assets/icons/${type}/${folder}/60x60.png`);
        this.icon72x72 = require(`../../assets/icons/${type}/${folder}/72x72.png`);
        this.icon96x96 = require(`../../assets/icons/${type}/${folder}/96x96.png`);
        this.icon120x120 = require(`../../assets/icons/${type}/${folder}/120x120.png`);
        this.icon150x150 = require(`../../assets/icons/${type}/${folder}/150x150.png`);
    }
}
