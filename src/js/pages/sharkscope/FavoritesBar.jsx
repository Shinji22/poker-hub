import React from 'react';
import { inject, observer } from 'mobx-react';
import shortid from 'shortid';
import SharkscopeAPI from './SharkscopeAPI';
import Storage from '../../services/storage';

@inject('store')
@observer
class FavoritesBar extends React.Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    /**
     * Affichage des stats d'un favori
     */
    onFavoriteClickhandler = (event, player) => {
        if (event.target.classList.contains('sync-favorite')) {
            console.log('synchronisation du favori');
        } else {
            this.store.sharkscope.addPlayer(player);
        }
    };

    /**
     * Mise à jour des données d'un favoris
     */
    onRefreshHandler = (event, player) => {
        event.stopPropagation();
        console.log(player);
        const api = new SharkscopeAPI();
        api.getStats(player.pseudo, player.network).then(res => {
            const stats = api.formatStatsResponse(res);
            const chartData = api.formatChartData(res);
            if (stats) {
                const p = {
                    pseudo: player.pseudo,
                    network: player.network,
                    stats,
                    chartData,
                };
                p.hash = player.hash;
                this.store.sharkscope.addPlayer(p, true);
                this.store.sharkscope.updateFavorite(p);
                Storage.save(this.store.global.filenames.favorite, JSON.stringify(this.store.sharkscope.favorites));
            }
        });
    };

    /**
     * Récupération du logo du réseau d'un favori
     */
    getNetworkLogo = network => {
        const found = this.store.network.list.find(n => {
            return n.id === network;
        });
        if (found) return found.icon;
        return '';
    };

    render() {
        return (
            <ul id="favorite-list">
                {
                    (this.items = this.store.sharkscope.favorites
                        .sort((f1, f2) => {
                            if (f1.pseudo.toLowerCase() > f2.pseudo.toLowerCase()) return 1;
                            else if (f1.pseudo.toLowerCase() < f2.pseudo.toLowerCase()) return -1;
                            return 0;
                        })
                        .map(fav => (
                            <li
                              key={shortid.generate()}
                              onClick={e => {
                                    this.onFavoriteClickhandler(e, fav);
                                }}>
                                <img src={this.getNetworkLogo(fav.network)} alt=" " />
                                <p>
                                    <span className="pseudo">{fav.pseudo}</span>
                                    <br />
                                    <span className="date">{fav.favoriteDate}</span>
                                </p>
                                <i
                                  onClick={e => {
                                        this.onRefreshHandler(e, fav);
                                    }}
                                  className="material-icons sync-favorite">
                                    sync
                                </i>
                            </li>
                        )))
                }
            </ul>
        );
    }
}

export default FavoritesBar;
