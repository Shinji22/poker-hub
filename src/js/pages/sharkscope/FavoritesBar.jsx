import React from 'react';
import { inject, observer } from 'mobx-react';
import shortid from 'shortid';
import * as mobx from 'mobx';
import SHA256 from 'crypto-js/sha256';

import SharkscopeDB from './SharkscopeDB';
import SharkscopeAPI from './SharkscopeAPI';

@inject('store')
@observer
class FavoritesBar extends React.Component {

    constructor(props){
        super(props);
        this.store = this.props.store;
        this.loadFavorites();
    }

    loadFavorites = () => {
        const db = new SharkscopeDB();
        db.getAllFavorties().then((res) => {
            this.store.sharkscope.setFavorites(res);
        });
    }

    onFavoriteClickhandler = (player) => {
        this.store.sharkscope.addPlayer(player);
    }

    onRefreshHandler = (event, player) => {
        event.stopPropagation();
        const db = new SharkscopeDB();
        const api = new SharkscopeAPI();
        api.getStats(player.pseudo, player.network)
            .then((res) => {
                const stats = api.formatStatsResponse(res);
                const chartData = api.formatChartData(res);
                if (stats) {
                    const p = {
                        pseudo: player.pseudo,
                        network: player.network,
                        stats,
                        chartData
                    };
                    p.hash = player.hash;
                    this.store.sharkscope.addPlayer(p);
                    db.updateFavorite(p)
                        .then(() => {
                            this.loadFavorites();
                        });
                }
                
            });
    }

    render() {
        return (
            <ul id="favorite-list">
                {
                    this.items = this.store.sharkscope.favorites
                        .sort((f1, f2) => {
                            if (f1.pseudo.toLowerCase() > f2.pseudo.toLowerCase()) return 1;
                            else if (f1.pseudo.toLowerCase() < f2.pseudo.toLowerCase()) return -1;
                            return 0;
                        })
                        .map(fav =>
                            <li key={shortid.generate()} onClick={()=> {this.onFavoriteClickhandler(fav)}}>
                                <p className="favorite-player">
                                    {fav.pseudo} ({fav.network})
                                <i className="material-icons update-icon" onClick={(e) => { this.onRefreshHandler(e, fav) }}>refresh</i>
                                </p>
                                <p className="favorite-date">
                                    <i className="material-icons">event</i> <span>{fav.favoriteDate.toLocaleString()}</span>
                                </p>
                            </li>)
                }
            </ul>
        );
    }
};


export default FavoritesBar;
