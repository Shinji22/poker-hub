import Icon from './Icon';

export default class Room {
    constructor(name) {
        this.name = name;
        this.icon = new Icon(name.toLowerCase(), 'rooms'); // nom du répertoire contenant les icônes
        this.type = 'game'; // pour Home
        this.defaultPath = '';
        this.path = '';
        this.args = ''; // argument optionnels pour lancer l'executable
        this.enabled = false; // pour Home
    }
}
