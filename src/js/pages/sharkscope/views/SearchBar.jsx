import React from 'react';
import { inject, observer } from 'mobx-react';
import shortid from 'shortid';
import SharkscopeAPI from '../services/SharkscopeAPI';

const SearchBar = inject('store')(
    observer(({ store }) => {
        let searchTimeoutID = null;

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

        const getStats = s => {
            const api = new SharkscopeAPI();
            const pseudo = s['@name'];
            const network = s['@network'];
            const req = api.getStats(pseudo, network);
            const searchBar = document.querySelector('.sharkscope-content .player-search-input');
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
                        searchBar.value = '';
                        store.sharkscope.setSuggestions([]);
                    }
                });
            }
        };

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

        const searchHandler = e => {
            if (searchTimeoutID) {
                clearTimeout(searchTimeoutID);
                searchTimeoutID = null;
            }
            searchTimeoutID = setTimeout(doSearch, 300);
        };

        const getNetworkLogo = network => {
            const found = store.network.list.find(n => {
                return n.id === network;
            });
            if (found) return found.icon;
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
                            <option value={n.id} key={n.id}>
                                {n.label}
                            </option>
                        ))}
                    </select>
                </div>
                <ul id="suggestion-list">
                    {store.sharkscope.suggestions &&
                        store.sharkscope.suggestions.map(s => (
                            <li onClick={() => getStats(s)} key={shortid.generate()}>
                                <img src={getNetworkLogo(s['@network'])} alt=" " /> <span>{s['@name']}</span>
                            </li>
                        ))}
                </ul>
            </React.Fragment>
        );
    })
);

export default SearchBar;
