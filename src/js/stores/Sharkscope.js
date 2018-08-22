import { observable, computed, action, toJS } from 'mobx';
import SHA256 from 'crypto-js/sha256';
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
        a.forEach(s => {
            if (this.suggestionIsfavorite(s)) {
                console.log('> favorite', s);
                s.favorite = true;
            } else {
                console.log('> not favorite', s);
            }
        });
        this.suggestions = a;
    }

    @action
    suggestionIsfavorite(s) {
        const idx = this.favorites.findIndex(f => f.pseudo === s['@name'] && f.network === s['@network']);
        return idx > -1;
    }

    /**
     * Tabs
     */

    @observable tabs = [];

    @observable currentTab;

    @observable editedTab;

    @action
    setTab(t) {
        this.currentTab = t;
    }

    // Ajout d'une tabulation
    @action
    addTab() {
        const tab = this.editedTab;
        this.tabs.push(tab);
        this.setTab(tab);
    }

    // mise à jour d'une tabulation
    @action
    updateTab() {
        const tab = this.editedTab;
        this.tabs.forEach((t, i) => {
            if (t.id === tab.id) {
                this.tabs.splice(i, 1, tab);
            }
        });
        this.setTab(tab);
    }

    @action
    removeTab(tab) {
        const isCurrentTab = tab === this.currentTab;
        this.tabs.remove(tab);
        if (isCurrentTab && this.tabs.length > 0) {
            this.setTab(this.tabs[this.tabs.length - 1]);
        }
    }

    @observable createTab = false;
    @action
    showCreateTab(val) {
        this.createTab = val;
    }

    @observable editTab = false;
    @action
    showEditTab(val) {
        this.editTab = val;
    }

    @action
    setEditedTab(tab) {
        this.editedTab = tab;
    }
    /**
     * Players
     */
    @computed
    get players() {
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
        this.currentTab.players.replace(this.currentTab.players);
    }

    @action
    getFavorite(pseudo, network) {
        const idx = this.favorites.findIndex(f => f.pseudo === pseudo && f.network === network);
        if (idx > -1) return this.favorites[idx];
        return null;
    }

    @action
    isFavorite(p) {
        const idx = this.favorites.findIndex(f => f.pseudo === p.pseudo && f.network === p.network);
        return idx > -1;
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
