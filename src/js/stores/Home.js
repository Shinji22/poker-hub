import { observable, computed } from 'mobx';

import winamaxLogo from '../../assets/icons/rooms/winamax/48x48.png';
import pokerstarsLogo from '../../assets/icons/rooms/pokerstars/48x48.png';
import partypokerLogo from '../../assets/icons/rooms/partypoker/48x48.png';
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
            active: false,
        },
        {
            name: 'PokerStars',
            defaultPath: 'C:\\Program Files (x86)\\PokerStars.FR\\PokerStarsUpdate.exe',
            args: [],
            path: '',
            icon: pokerstarsLogo,
            type: 'game',
            enabled: false,
            active: false,
        }, // C:\Users\tanaka\Winamax\wlauncher.exe --mode unattended --unattendedmodeui none --cmdlaunch poker
        {
            name: 'Winamax',
            defaultPath: 'C:\\Users\\tanaka\\Winamax\\Winamax Poker\\Winamax Poker.exe',
            args: [],
            path: '',
            icon: winamaxLogo,
            type: 'game',
            enabled: false,
            active: false,
        },
        {
            name: 'Xeester',
            defaultPath: 'C:\\Program Files (x86)\\Xeester\\xeester-update.exe',
            args: [],
            path: '',
            icon: xeesterLogo,
            type: 'tracker',
            enabled: false,
            active: false,
        },
    ];

    @observable twitterDisplay = true;
    @observable twitterSource = 'PokerNewsFrance'; // 'Shinj22970';
    @computed
    get twitterURL() {
        return `https://twitter.com/${this.twitterSource}?ref_src=twsrc%5Etfw`;
    }
}
