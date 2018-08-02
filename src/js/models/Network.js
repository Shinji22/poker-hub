import Icon from './Icon';

export default class Network {
    constructor(name, id) {
        this.label = name;
        this.id = id;
        this.icon = new Icon(name.toLowerCase(), 'networks');
    }
}
