import { observable, computed, action, toJS } from 'mobx';
import SHA256 from 'crypto-js/sha256';
import shortid from 'shortid';
import SharkscopeTab from '../pages/sharkscope/models/SharkscopeTab';

export class Sharkscope {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    /**
     * View
     */
    @observable view = 'search'; // search / favorites
    @action
    setView(t) {
        this.view = t;
    }

    /**
     * Suggestions
     */
    @observable suggestions = [];

    @action
    setSuggestions(a) {
        this.suggestions = a;
    }

    /**
     * Tabs
     */

    @observable tabs = [];

    @observable currentTab;

    @action
    setTab(t) {
        this.currentTab = t;
    }

    // Ajout d'une tabulation
    @action
    addTab(name) {
        const tab = new SharkscopeTab(name);
        this.tabs.push(tab);
        this.setTab(tab);
    }

    @action
    removeTab(tab) {
        this.tabs.remove(tab);
    }

    @observable createTab = false;
    @action
    showCreateTab(val) {
        this.createTab = val;
    }

    /**
     * Players
     */
    @computed
    get players() {
        console.log('>>> refresh');
        return this.currentTab.players;
    }

    @action
    getPlayer(p) {
        return this.currentTab.players.find(player => player.pseudo === p.pseudo && player.network === p.network);
    }

    @action
    addPlayer(p, force) {
        if (force) {
            const old = this.getPlayer(p);
            this.removePlayer(old);
            this.currentTab.players.push(p);
        } else if (!this.getPlayer(p)) {
            p.hash = SHA256(p.pseudo + p.network).toString();
            this.currentTab.players.push(p);
        }
    }

    @action
    removePlayer(p) {
        const idx = this.currentTab.players.indexOf(p);
        if (idx > -1) {
            this.currentTab.players.splice(idx, 1);
        }
    }

    @action
    clearPlayers() {
        this.currentTab.players = [];
    }

    @action
    updatePlayer(p) {
        const idx = this.currentTab.players.indexOf(p);
        if (idx > -1) {
            this.currentTab.players[idx] = p;
        }
    }

    /**
     * Favorites
     */

    @observable favorites = [];
    @action
    setFavorites(f) {
        this.favorites = f;
    }

    @action
    addFavorite(p) {
        const idx = this.currentTab.players.findIndex(player => player.pseudo === p.pseudo && player.network === p.network);
        if (idx > -1) {
            this.currentTab.players[idx].favorite = true;
            const fav = Object.assign({}, this.currentTab.players[idx]);
            fav.favoriteDate = new Date().toLocaleDateString();
            this.favorites.push(fav);
        }
        // TODO: supprimer ?
        this.currentTab.players.replace(this.currentTab.players);
    }

    @action
    removeFavorite(p) {
        const idx = this.currentTab.players.findIndex(player => player.pseudo === p.pseudo && player.network === p.network);
        if (idx > -1) {
            this.currentTab.players[idx].favorite = false;
        }
        // TODO: supprimer ?
        this.currentTab.players.replace(this.currentTab.players);

        const favIdx = this.currentTab.players.findIndex(player => player.pseudo === p.pseudo && player.network === p.network);
        if (favIdx > -1) {
            this.favorites.splice(favIdx, 1);
        }
    }

    @action
    updateFavorite(p) {
        const favIdx = this.currentTab.players.findIndex(player => player.pseudo === p.pseudo && player.network === p.network);
        if (favIdx > -1) {
            p.favorite = true;
            p.favoriteDate = new Date().toLocaleDateString();
            this.favorites[favIdx] = p;
        }
    }

    /**
     * Filters / Sort types
     */
    @observable sortBy = null;
    @observable sortOrder = 'ASC';
    @observable filterFavorites = false;

    @action
    setSortBy(s) {
        this.sortBy = s;
    }

    @action
    setSortOrder(s) {
        this.sortOrder = s;
    }

    @action
    toggleFilterFavorties() {
        this.filterFavorites = !this.filterFavorites;
    }
}
