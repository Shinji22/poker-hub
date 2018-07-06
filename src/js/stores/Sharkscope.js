import { observable, action } from 'mobx';
import SHA256 from 'crypto-js/sha256';

export class Sharkscope {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    /**
     * Tabs
     */
    @observable tab = 'search'; // search / favorites
    @action
    setTab(t) {
        console.log(t);
        this.tab = t;
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
     * Players
     */
    @observable players = [];

    @action
    getPlayer(p) {
        return this.players.find(player => player.pseudo === p.pseudo && player.network === p.network);
    }

    @action
    addPlayer(p) {
        if (!this.getPlayer(p)) {
            p.hash = SHA256(p.pseudo + p.network).toString();
            this.players.push(p);
        }
    }

    @action
    removePlayer(p) {
        const idx = this.players.indexOf(p);
        if (idx > -1) {
            this.players.splice(idx, 1);
        }
    }

    @action
    updatePlayer(p) {
        const idx = this.players.indexOf(p);
        if (idx > -1) {
            this.players[idx] = p;
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
        const idx = this.players.findIndex(player => player.pseudo === p.pseudo && player.network === p.network);
        if (idx > -1) {
            this.players[idx].favorite = true;
        }
        this.players.replace(this.players);
    }

    @action
    removeFavorite(p) {
        const idx = this.players.findIndex(player => player.pseudo === p.pseudo && player.network === p.network);
        if (idx > -1) {
            this.players[idx].favorite = false;
        }
        this.players.replace(this.players);
    }

    /**
     * Filters / Sort types
     */
    @observable sortBy = null;
    @observable filterFavorites = false;

    @action
    setSortBy(s) {
        this.sortBy = s;
    }

    @action
    toggleFilterFavorties() {
        this.filterFavorites = !this.filterFavorites;
    }
}
