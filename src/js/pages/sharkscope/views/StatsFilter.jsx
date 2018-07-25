import React from 'react';
import { inject, observer } from 'mobx-react';
import Checkbox from '../../../components/Checkbox.jsx';

const StatsFilter = inject('store')(
    observer(({ store }) => {
        const sortHandler = sort => {
            store.sharkscope.setSortBy(sort);
        };

        const sortOrderHandler = order => {
            store.sharkscope.setSortOrder(order);
        };

        const removeAllPlayers = () => {
            store.sharkscope.clearPlayers();
        };

        const filterFavoriteHandler = () => {
            store.sharkscope.toggleFilterFavorties();
        };

        return (
            <div className="stats-filter">
                <div className="dropdown is-hoverable">
                    <div className="dropdown-trigger">
                        <a className="button is-small" aria-haspopup="true" aria-controls="dropdown-menu4">
                            <span className="icon is-small">
                                <i className="material-icons">sort</i>
                            </span>
                            <span className="dropdown-title">Trier</span>
                            <span className="icon is-small">
                                <i className="material-icons" aria-hidden="true">
                                    expand_more
                                </i>
                            </span>
                        </a>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                        <div className="dropdown-content">
                            <a className="dropdown-item" onClick={() => sortHandler('pseudo')}>
                                <div className="columns">
                                    <div className="column">Pseudo</div>
                                    <div className="column is-narrow">{store.sharkscope.sortBy === 'pseudo' ? <i className="material-icons">check</i> : <i className="material-icons is-invisible">check</i>}</div>
                                </div>
                            </a>
                            <a className="dropdown-item" onClick={() => sortHandler('ability')}>
                                <div className="columns">
                                    <div className="column">Compétence</div>
                                    <div className="column is-narrow">{store.sharkscope.sortBy === 'ability' ? <i className="material-icons">check</i> : <i className="material-icons is-invisible">check</i>}</div>
                                </div>
                            </a>
                            <a className="dropdown-item" onClick={() => sortHandler('count')}>
                                <div className="columns">
                                    <div className="column">Nombre de partie</div>
                                    <div className="column is-narrow">{store.sharkscope.sortBy === 'count' ? <i className="material-icons">check</i> : <i className="material-icons is-invisible">check</i>}</div>
                                </div>
                            </a>
                            <hr className="dropdown-divider" />
                            <a className="dropdown-item" onClick={() => sortOrderHandler('ASC')}>
                                <div className="columns">
                                    <div className="column">Croissant</div>
                                    <div className="column is-narrow">{store.sharkscope.sortOrder === 'ASC' ? <i className="material-icons">check</i> : <i className="material-icons is-invisible">check</i>}</div>
                                </div>
                            </a>
                            <a className="dropdown-item" onClick={() => sortOrderHandler('DESC')}>
                                <div className="columns">
                                    <div className="column">Décroissant</div>
                                    <div className="column is-narrow">{store.sharkscope.sortOrder === 'DESC' ? <i className="material-icons">check</i> : <i className="material-icons is-invisible">check</i>}</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="dropdown is-hoverable">
                    <div className="dropdown-trigger">
                        <a className="button is-small" aria-haspopup="true" aria-controls="dropdown-menu4">
                            <span className="icon is-small">
                                <i className="material-icons">filter_list</i>
                            </span>
                            <span className="dropdown-title">Filtrer</span>
                            <span className="icon is-small">
                                <i className="material-icons" aria-hidden="true">
                                    expand_more
                                </i>
                            </span>
                        </a>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                        <div className="dropdown-content">
                            <div className="dropdown-item">
                                <div className="columns">
                                    <div className="column">Favoris</div>
                                    <div className="column is-narrow">
                                        <Checkbox name="abc" value="azc" checked={store.sharkscope.filterFavorites} onChange={filterFavoriteHandler} label="Favoris" />
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown-item">
                                <div className="columns">
                                    <div className="column">Tags</div>
                                    <div className="column is-narrow">
                                        <Checkbox name="abc" value="azc" label="Favoris" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {store.sharkscope.players.length > 0 ? (
                    <a className="is-pulled-right remove-all" onClick={removeAllPlayers}>
                        <i className="material-icons">clear</i> Tout supprimer
                    </a>
                ) : (
                        ''
                    )}
            </div>
        );
    })
);

export default StatsFilter;
