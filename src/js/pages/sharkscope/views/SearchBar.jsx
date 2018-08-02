import React from 'react';
import { inject, observer } from 'mobx-react';
import shortid from 'shortid';
import SharkscopeAPI from '../services/SharkscopeAPI';

const SearchBar = inject('store')(
    observer(({ store }) => {
        let searchTimeoutID = null;

        /**
         * Formattage de la réponse concernant la liste de suggestion
         * @param {object} res
         */
        const formatSearchResponse = res => {
            if (res.Response && res.Response['@success'] !== undefined && res.Response['@success'] === 'true' && res.Response.SearchSuggestionsResponse && res.Response.SearchSuggestionsResponse.PlayerSuggestions && res.Response.SearchSuggestionsResponse.PlayerSuggestions.Player) {
                const suggestions = res.Response.SearchSuggestionsResponse.PlayerSuggestions.Player;
                if (Array.isArray(suggestions)) {
                    return suggestions;
                }
                return [suggestions];
            }
            return null;
        };

        /**
         * Réinitialise les champs de recherche et suggestion
         */
        const resetSuggestion = () => {
            const searchBar = document.querySelector('.sharkscope-content .player-search-input');
            searchBar.value = '';
            store.sharkscope.setSuggestions([]);
        };

        /**
         * Récupération des statistiques du joueur sélectionné dans la liste de suggestion
         * @param {object} s
         */
        const getStats = s => {
            const api = new SharkscopeAPI();
            const pseudo = s['@name'];
            const network = s['@network'];

            // Si le joueur est dans les favoris, on affiche les infos sauvegardées
            if (s.favorite) {
                console.log('load favorite');
                const fav = store.sharkscope.getFavorite(s['@name'], s['@network']);
                if (fav) store.sharkscope.addPlayer(fav);
                return;
            }

            // Sinon on fait une requête pour récupérer les infos du joueur
            const req = api.getStats(pseudo, network);
            const exists = store.sharkscope.getPlayer({ pseudo, network });
            if (!exists) {
                req.then(res => {
                    if (res) {
                        const stats = api.formatStatsResponse(res);
                        const chartData = api.formatChartData(res);
                        if (stats) {
                            const player = {
                                pseudo,
                                network,
                                stats,
                                chartData,
                            };

                            store.sharkscope.addPlayer(player);
                        }
                        store.sharkscope.setSuggestions([]);
                        resetSuggestion();
                    }
                });
            }
        };

        /**
         * Recherche par nom et network
         */
        const doSearch = () => {
            const searchBar = document.querySelector('.sharkscope-content .player-search-input');
            const networkID = document.querySelector('.sharkscope-content .network-select').value;
            const text = searchBar.value;
            if (text.length > 3) {
                const api = new SharkscopeAPI();
                const req = api.searchPlayer(text, networkID);
                req.then(res => {
                    if (res) {
                        const suggestions = formatSearchResponse(res);
                        store.sharkscope.setSuggestions(suggestions);
                    }
                });
            }
            searchTimeoutID = null;
        };

        /**
         * Temporisation lorsque l'utilisateur fait une recherche
         * @param {event} e
         */
        const searchHandler = e => {
            if (searchTimeoutID) {
                clearTimeout(searchTimeoutID);
                searchTimeoutID = null;
            }
            searchTimeoutID = setTimeout(doSearch, 300);
        };

        /**
         * Récupération de l'icône d'un network
         * @param {object} network
         */
        const getNetworkLogo = network => {
            const found = store.network.list.find(n => {
                return n.id === network;
            });
            if (found) return found.icon.icon32x32;
            return '';
        };

        return (
            <React.Fragment>
                <div className="control has-icons-right" id="search-bar">
                    <input onChange={searchHandler} className="input is-rounded player-search-input" type="email" placeholder="Pseudo" />
                    <span className="icon is-right">
                        <i className="material-icons">search</i>
                    </span>
                </div>
                <div className="select is-small">
                    <select onChange={searchHandler} className="network-select">
                        <option value="*">Tous les réseaux</option>
                        {store.network.list.map(n => (
                            <option value={n.id} key={shortid.generate()}>
                                {n.label}
                            </option>
                        ))}
                    </select>
                </div>
                <ul id="suggestion-list">
                    {store.sharkscope.suggestions &&
                        store.sharkscope.suggestions.map(s => (
                            <li onClick={() => getStats(s)} key={shortid.generate()}>
                                <img src={getNetworkLogo(s['@network'])} alt=" " />
                                <span>{s['@name']}</span>
                                {s.favorite ? <i className="material-icons suggestion-favorite is-pulled-right">favorite</i> : ''}
                            </li>
                        ))}
                </ul>
            </React.Fragment>
        );
    })
);

export default SearchBar;
