import { observable, computed, action } from 'mobx';

export class Home {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable twitterDisplay;
    @observable twitterSource;
    @computed
    get twitterURL() {
        return `https://twitter.com/${this.twitterSource}?ref_src=twsrc%5Etfw`;
    }

    @action
    setTwitterDisplay(v) {
        this.twitterDisplay = v;
    }
    @action
    setTwitterSource(v) {
        this.twitterSource = v;
    }
}
