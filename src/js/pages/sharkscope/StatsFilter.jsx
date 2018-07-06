import React from 'react';
import { inject, observer } from 'mobx-react';
import shortid from 'shortid';

const StatsFilter = inject('store')(
    observer(({ store }) => {
        const sortHandler = () => {
            const sort = document.querySelector('#sort-stats-select').value;
            console.log(sort);
            store.sharkscope.setSortBy(sort);
        };

        const filterFavoriteHandler = () => {
            store.sharkscope.toggleFilterFavorties();
        };

        return (
            <div className="stats-filter">
                <label htmlFor="sort-stats-select">Trier par:</label>
                <div className="select is-small">
                    <select name="sort-stats" id="sort-stats-select" onChange={sortHandler}>
                        <option value="none">-</option>
                        <option value="pseudo">Pseudo</option>
                        <option value="ability">Compétence</option>
                        <option value="count">Nombre de parties</option>
                    </select>
                </div>
                <i className="material-icons md-light like-icon" onClick={filterFavoriteHandler} title="Afficher uniquement les favoris">
                    {store.sharkscope.filterFavorites ? 'favorite' : 'favorite_border'}
                </i>
            </div>
        );
    })
);

export default StatsFilter;
