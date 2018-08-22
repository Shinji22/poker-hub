import Room from '../models/Room';
import Tracker from '../models/Tracker';
import Network from '../models/Network';

const DEFAULT_CONFIG = require('../../resources/config.json');

const config = (() => {
    /**
     * Initialisation de la liste des networks
     */
    const initSoft = store => {
        // liste des rooms
        DEFAULT_CONFIG.soft.rooms.list.forEach(r => {
            const room = new Room(r.name);
            room.defaultPath = r.defaultPath;
            room.args = r.args;
            store.soft.addSoft(room);
        });

        // liste des trackers
        DEFAULT_CONFIG.soft.trackers.list.forEach(t => {
            const tracker = new Tracker(t.name);
            tracker.defaultPath = t.defaultPath;
            tracker.args = t.args;
            store.soft.addSoft(tracker);
        });
    };

    /**
     * Initialisation de la liste des networks
     */
    const initNetworks = store => {
        DEFAULT_CONFIG.networks.list.forEach(n => {
            store.network.addNetwork(new Network(n.name, n.id));
        });
    };

    /**
     * Initialisation de la vue Home
     * @param {object} store
     */
    const initHome = store => {
        store.home.setTwitterDisplay(DEFAULT_CONFIG.home.twitterDisplay);
        store.home.setTwitterSource(DEFAULT_CONFIG.home.twitterSource);
    };

    const initGlobal = store => {
        store.global.setSidebarExpanded(DEFAULT_CONFIG.global.sidebarExpanded);
    };

    /**
     * Initialisation des stores
     */
    const initStore = store => {
        console.log('initStore');
        // Initialisation de l'application
        initGlobal(store);

        // Initialisation de la liste des rooms et trackers
        initSoft(store);

        // Initialisation de la liste des networks
        initNetworks(store);

        // Initialisation de la vue Home
        initHome(store);
    };
    return {
        initStore,
    };
})();

export default config;
