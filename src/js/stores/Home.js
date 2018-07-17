import { observable, computed } from 'mobx';

import winamaxLogo from '../../assets/icons/rooms/winamax/48x48.png';
import unibetLogo from '../../assets/icons/rooms/unibet/48x48.png';
import pokerstarsLogo from '../../assets/icons/rooms/pokerstars/48x48.png';
import partypokerLogo from '../../assets/icons/rooms/partypoker/48x48.png';
import betclicLogo from '../../assets/icons/rooms/betclic/48x48.png';
import bwinLogo from '../../assets/icons/rooms/bwin/48x48.png';
import pmuLogo from '../../assets/icons/rooms/pmu/48x48.png';
import xeesterLogo from '../../assets/icons/trackers/xeester/48x48.png';

export class Home {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    // liste des logiciels
    @observable
    soft = [
        {
            name: 'PartyPoker',
            defaultPath: 'C:\\Programs\\PartyFrance\\PartyFrance.exe',
            args: [' -P=PartyPokerFr'],
            path: '',
            icon: partypokerLogo,
            type: 'game',
            enabled: false,
        },
        {
            name: 'PokerStars',
            defaultPath: 'C:\\Program Files (x86)\\PokerStars.FR\\PokerStarsUpdate.exe',
            args: [],
            path: '',
            icon: pokerstarsLogo,
            type: 'game',
            enabled: false,
        },
        {
            name: 'Winamax',
            defaultPath: 'C:\\Users\\tanaka\\Winamax\\Winamax Poker\\Winamax Poker.exe',
            args: [],
            path: '',
            icon: winamaxLogo,
            type: 'game',
            enabled: false,
        },
        {
            name: 'Unibet',
            defaultPath: 'C:\\Users\\tanaka\\Unibet\\unibet.exe',
            args: [],
            path: '',
            icon: unibetLogo,
            type: 'game',
            enabled: false,
        },
        {
            name: 'PMU',
            defaultPath: 'C:\\Users\\tanaka\\pmu\\pmu.exe',
            args: [],
            path: '',
            icon: pmuLogo,
            type: 'game',
            enabled: false,
        },
        {
            name: 'Betclic',
            defaultPath: 'C:\\Users\\tanaka\\betclic\\betclic.exe',
            args: [],
            path: '',
            icon: betclicLogo,
            type: 'game',
            enabled: false,
        },

        {
            name: 'Bwin',
            defaultPath: 'C:\\Users\\tanaka\\bwin\\bwin.exe',
            args: [],
            path: '',
            icon: bwinLogo,
            type: 'game',
            enabled: false,
        },
        {
            name: 'Xeester',
            defaultPath: 'C:\\Program Files (x86)\\Xeester\\xeester-update.exe',
            args: [],
            path: '',
            icon: xeesterLogo,
            type: 'tracker',
            enabled: false,
        },
    ];

    @observable twitterDisplay = true;
    @observable twitterSource = 'PokerNewsFrance'; // 'Shinj22970';
    @computed
    get twitterURL() {
        return `https://twitter.com/${this.twitterSource}?ref_src=twsrc%5Etfw`;
    }
}
