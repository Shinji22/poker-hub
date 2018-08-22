import { observable } from 'mobx';

export default class SharkscopeTab {
    @observable id;
    @observable name;
    @observable players;
    @observable icon;

    constructor(id, name, icon) {
        this.id = id;
        this.name = name;
        this.players = [];
        this.icon = icon;
    }
}
