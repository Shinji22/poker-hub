import { observable } from 'mobx';

const shortId = require('shortid');

export default class SharkscopeTab {
    constructor(name) {
        this.id = shortId.generate();
        this.name = name;
        this.players = observable([]);
    }
}
