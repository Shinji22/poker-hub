import Room from '../models/Room';
import Tracker from '../models/Tracker';
import Network from '../models/Network';
import { toJS } from 'mobx';

const config = (() => {
    /**
     * Initialisation de la liste des networks
     */
    const initRooms = store => {
        // TODO: charger depuis un fichier de config
        const wina = new Room('Winamax');
        wina.defaultPath = 'C:\\Users\\tanaka\\Winamax\\Winamax Poker\\Winamax Poker.exe';
        store.home.addSoft(wina);

        const ps = new Room('PokerStars');
        ps.defaultPath = 'C:\\Program Files (x86)\\PokerStars.FR\\PokerStarsUpdate.exe';
        store.home.addSoft(ps);

        const pp = new Room('PartyPoker');
        pp.defaultPath = 'C:\\Programs\\PartyFrance\\PartyFrance.exe';
        pp.args = [' -P=PartyPokerFr'];
        store.home.addSoft(pp);

        const unibet = new Room('Unibet');
        unibet.defaultPath = 'C:\\Program Files (x86)\\Unibet.fr\\casino.exe';
        store.home.addSoft(unibet);

        const pmu = new Room('PMU');
        pmu.defaultPath = 'C:\\Users\\tanaka\\pmu\\pmu.exe';
        store.home.addSoft(pmu);

        const betclic = new Room('Betclic');
        betclic.defaultPath = 'C:\\Users\\tanaka\\betclic\\betclic.exe';
        store.home.addSoft(betclic);

        const bwin = new Room('Bwin');
        bwin.defaultPath = 'C:\\Users\\tanaka\\bwin\\bwin.exe';
        store.home.addSoft(bwin);

        const xeester = new Tracker('Xeester');
        xeester.defaultPath = 'C:\\Program Files (x86)\\Xeester\\xeester-update.exe';
        store.home.addSoft(xeester);

        const hm = new Tracker('Holdem Manager');
        hm.defaultPath = 'C:\\Program Files (x86)\\Holdem Manager\\hmanager.exe';
        store.home.addSoft(hm);

        const pt = new Tracker('Poker Tracker');
        pt.defaultPath = 'C:\\Program Files (x86)\\poker tracker\\ptracker.exe';
        store.home.addSoft(pt);
    };

    /**
     * Initialisation de la liste des networks
     */
    const initNetworks = store => {
        // TODO: charger depuis un fichier de config
        const wina = new Network('Winamax', 'Winamax.fr');
        store.network.addNetwork(wina);

        const ps = new Network('PokerStars', 'PokerStars(FR-ES-PT)');
        store.network.addNetwork(ps);

        const pp = new Network('PartyPoker', 'PartyPoker(FR-ES)');
        store.network.addNetwork(pp);

        const iPoker = new Network('iPoker', 'iPoker.fr');
        store.network.addNetwork(iPoker);

        const ongame = new Network('Ongame', 'Ongame');
        store.network.addNetwork(ongame);
    };

    /**
     * Initialisation des stores
     */
    const initStore = store => {
        console.log('initNetworks');
        // Initialisation de la liste des rooms
        initRooms(store);

        // Initialisation de la liste des networks
        initNetworks(store);
    };
    return {
        initStore,
    };
})();

export default config;
