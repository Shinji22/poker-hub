import { observable } from 'mobx';

const shortId = require('shortid');

export default class SharkscopeTab {
    constructor(name, icon) {
        this.id = observable(shortId.generate());
        this.name = name;
        this.players = observable([]);
        this.icon = icon;
    }
}
