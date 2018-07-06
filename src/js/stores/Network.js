import { observable } from 'mobx';

import winamaxIcon from '../../assets/icons/networks/winamax/32x32.png';
import partypokerIcon from '../../assets/icons/networks/partypoker/32x32.png';
import pokerstarsIcon from '../../assets/icons/networks/pokerstars/32x32.png';

export class Network {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable list = [{ id: 'PokerStars(FR-ES-PT)', label: 'PokerStars', icon: pokerstarsIcon }, { id: 'Winamax.fr', label: 'Winamax', icon: winamaxIcon }, { id: 'PartyPoker(FR-ES)', label: 'PartyPoker', icon: partypokerIcon }, { id: 'iPoker.fr', label: 'iPoker', icon: pokerstarsIcon }];
}
