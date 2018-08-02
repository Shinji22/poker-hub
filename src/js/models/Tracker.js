import Icon from './Icon';

export default class Tracker {
    constructor(name) {
        this.name = name;
        this.icon = new Icon(name.toLowerCase(), 'trackers'); // nom du répertoire contenant les icônes
        this.type = 'tracker'; // pour Home
        this.defaultPath = '';
        this.path = '';
        this.args = ''; // argument optionnels pour lancer l'executable
        this.enabled = false; // pour Home
    }
}
