import { observable, computed, action } from 'mobx';
import * as mobx from 'mobx';

export class Nash {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable currentTab = 'push';

    @action setTab(t) {
        console.log('setTab ' + t)
        this.currentTab = t;
    }

    @observable sliderValue = 7;

    @action setSliderValue(v) {
        this.sliderValue = v;
    }
}
