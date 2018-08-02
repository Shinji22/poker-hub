import { observable, action } from 'mobx';

export class Network {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable list = [];

    @action
    addNetwork(n) {
        this.list.push(n);
    }
}
