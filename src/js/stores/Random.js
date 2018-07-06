import { observable, computed, action } from 'mobx';
import * as mobx from 'mobx';

export class Random {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable value = 0;
    @action setValue(v) {
        this.value = v;
    }
}
