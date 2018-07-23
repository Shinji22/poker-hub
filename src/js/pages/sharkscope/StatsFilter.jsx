import React from 'react';
import { inject, observer } from 'mobx-react';
import shortid from 'shortid';
import Checkbox from '../../components/Checkbox.jsx';

const StatsFilter = inject('store')(
    observer(({ store }) => {
        const sortHandler = sort => {
            store.sharkscope.setSortBy(sort);
        };

        const sortOrderHandler = order => {
            store.sharkscope.setSortOrder(order);
        };

        const toggleSortOrder = () => {
            if (store.sharkscope.sortOrder === 'ASC') {
                store.sharkscope.setSortOrder('DESC');
            } else {
                store.sharkscope.setSortOrder('ASC');
            }
        };

        const filterFavoriteHandler = () => {
            store.sharkscope.toggleFilterFavorties();
        };

        return (
            <div className="stats-filter">
                <i className="material-icons md-light like-icon" onClick={filterFavoriteHandler} title="Afficher uniquement les favoris">
                    {store.sharkscope.filterFavorites ? 'favorite' : 'favorite_border'}
                </i>

                <div className="dropdown is-hoverable">
                    <div className="dropdown-trigger">
                        <button className="button is-small" aria-haspopup="true" aria-controls="dropdown-menu4">
                            <span>Trier</span>
                            <span className="icon is-small">
                                <i className="material-icons" aria-hidden="true">
                                    expand_more
                                </i>
                            </span>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                        <div className="dropdown-content">
                            <div className="dropdown-item">
                                <a className="dropdown-item" onClick={() => sortHandler('pseudo')}>
                                    Pseudo
                                    {store.sharkscope.sortBy === 'pseudo' ? <i className="material-icons">check</i> : ''}
                                </a>
                                <a className="dropdown-item" onClick={() => sortHandler('ability')}>
                                    Compétence
                                    {store.sharkscope.sortBy === 'ability' ? <i className="material-icons">check</i> : ''}
                                </a>
                                <a className="dropdown-item" onClick={() => sortHandler('count')}>
                                    Nombre de partie
                                    {store.sharkscope.sortBy === 'count' ? <i className="material-icons">check</i> : ''}
                                </a>
                                <hr className="dropdown-divider" />
                                <a className="dropdown-item" onClick={() => sortOrderHandler('ASC')}>
                                    <i className="material-icons">expand_less</i> Croissant
                                    {store.sharkscope.sortOrder === 'ASC' ? <i className="material-icons">check</i> : ''}
                                </a>
                                <a className="dropdown-item" onClick={() => sortOrderHandler('DESC')}>
                                    <i className="material-icons">expand_more</i> Décroissant
                                    {store.sharkscope.sortOrder === 'DESC' ? <i className="material-icons">check</i> : ''}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dropdown is-hoverable">
                    <div className="dropdown-trigger">
                        <button className="button is-small" aria-haspopup="true" aria-controls="dropdown-menu4">
                            <span>Filtrer</span>
                            <span className="icon is-small">
                                <i className="material-icons" aria-hidden="true">
                                    expand_more
                                </i>
                            </span>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                        <div className="dropdown-content">
                            <div className="dropdown-item">
                                <span>Favoris</span>
                                <Checkbox name="abc" value="azc" checked={store.sharkscope.filterFavorites} onChange={filterFavoriteHandler} label="Favoris" />
                            </div>
                            <div className="dropdown-item">
                                <span>Réseau</span>
                                <Checkbox name="abc" value="azc" checked={store.sharkscope.filterFavorites} onChange={filterFavoriteHandler} label="Favoris" />
                            </div>
                            <div className="dropdown-item">
                                <span>Tags</span>
                                <Checkbox name="abc" value="azc" checked={store.sharkscope.filterFavorites} onChange={filterFavoriteHandler} label="Favoris" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    })
);

export default StatsFilter;
