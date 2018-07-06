import idb from 'idb';
import * as mobx from 'mobx';

export default class SharkscopeDB {
    constructor() {
        this.DB_NAME = 'sharkscope_db';
        this.DB_VERSION = 1;
        this.DB_STORE_STATS = 'stats';
    }

    /**
     * Create the database if not exists
     */
    init() {
        idb.open(this.DB_NAME, this.DB_VERSION, (upgradeDB) => {
            if (!upgradeDB.objectStoreNames.contains(this.DB_STORE_STATS)) {
                console.log(`create or update ${this.DB_STORE_STATS}`);
                const statsStore = upgradeDB.createObjectStore(this.DB_STORE_STATS, { keyPath: 'hash' });
                statsStore.createIndex('playersPseudoIndex', 'pseudo');
                statsStore.createIndex('playersNetworkIndex', 'network');
                statsStore.createIndex('playerStats', 'stats', { unique: false, multiEntry: true });
            }
        });
    }

    /**
     * Return all favorites
     */
    getAllFavorties() {
        const statsStore = this.DB_STORE_STATS;
        return idb.open(this.DB_NAME, this.DB_VERSION)
            .then((db) => {
                const tx = db.transaction(statsStore, 'readonly');
                const store = tx.objectStore(statsStore);
                return store.getAll();
            });
    }

    /**
     * Return favorite via id
     * @param {int} id
     */
    getFavorite(id) {
        const statsStore = this.DB_STORE_STATS;
        return idb.open(this.DB_NAME, this.DB_VERSION)
            .then((db) => {
                const tx = db.transaction(statsStore, 'readonly');
                const store = tx.objectStore(statsStore);
                return store.get(id);
            });
    }

    /**
     * Update favorite via id
     * @param {int} id
     */
    deleteFavorite(hash) {
        const statsStore = this.DB_STORE_STATS;
        return idb.open(this.DB_NAME, this.DB_VERSION)
            .then((db) => {
                const tx = db.transaction(statsStore, 'readwrite');
                const store = tx.objectStore(statsStore);
                return store.delete(hash);
            });
    }

    /**
     * Update favorite
     * @param {object} player
     */
    updateFavorite(player) {
        const statsStore = this.DB_STORE_STATS;
        player.favoriteDate = new Date();
        return idb.open(this.DB_NAME, this.DB_VERSION)
            .then((db) => {
                const tx = db.transaction(statsStore, 'readwrite');
                const store = tx.objectStore(statsStore);
                return store.put(mobx.toJS(player));
            });
    }

    /**
     * Add new favorite
     * @param {object} player
     */
    addFavorite(player) {
        const statsStore = this.DB_STORE_STATS;
        player.favoriteDate = new Date();
        return idb.open(this.DB_NAME, this.DB_VERSION)
            .then((db) => {
                const tx = db.transaction(statsStore, 'readwrite');
                const store = tx.objectStore(statsStore);
                return store.add(mobx.toJS(player));
            });
    }
}
