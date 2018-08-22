import { observable, action } from 'mobx';

export class Soft {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    // liste des logiciels
    @observable list = [];

    @action
    addSoft(s) {
        this.list.push(s);
    }
}
