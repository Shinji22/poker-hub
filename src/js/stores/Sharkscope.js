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
    addPlayer(p, force) {
        if (force) {
            const old = this.getPlayer(p);
            this.removePlayer(old);
            this.players.push(p);
        } else if (!this.getPlayer(p)) {
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
            const fav = Object.assign({}, this.players[idx]);
            fav.favoriteDate = new Date().toLocaleDateString();
            this.favorites.push(fav);
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

        const favIdx = this.players.findIndex(player => player.pseudo === p.pseudo && player.network === p.network);
        if (favIdx > -1) {
            this.favorites.splice(favIdx, 1);
        }
    }

    @action
    updateFavorite(p) {
        const favIdx = this.players.findIndex(player => player.pseudo === p.pseudo && player.network === p.network);
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
