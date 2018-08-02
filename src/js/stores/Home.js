import { observable, computed, action } from 'mobx';

export class Home {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    // liste des logiciels
    @observable soft = [];

    @action
    addSoft(s) {
        this.soft.push(s);
    }

    @observable twitterDisplay = true;
    @observable twitterSource = 'PokerNewsFrance';
    @computed
    get twitterURL() {
        return `https://twitter.com/${this.twitterSource}?ref_src=twsrc%5Etfw`;
    }
}
