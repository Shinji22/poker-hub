import { observable, action } from 'mobx';

export class Nash {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable currentTab = 'push';

    @action
    setTab(t) {
        this.currentTab = t;
    }

    @observable sliderValue = 7;

    @action
    setSliderValue(v) {
        this.sliderValue = v;
    }
}
