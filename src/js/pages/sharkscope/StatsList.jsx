import React from 'react';
import { inject, observer } from 'mobx-react';
import shortid from 'shortid';

import StatsItem from './StatsItem.jsx';

const StatsList = inject('store')(
    observer(({ store }) => {
        let items = store.sharkscope.players;
        if (store.sharkscope.filterFavorites) {
            items = items.filter(i => i.favorite);
        }

        if (store.sharkscope.sortBy && store.sharkscope.sortBy !== 'none') {
            if (store.sharkscope.sortBy === 'pseudo') {
                items = items.sort((a, b) => {
                    if (a.pseudo.toLowerCase() < b.pseudo.toLowerCase()) {
                        if (store.sharkscope.sortOrder === 'ASC') return -1;
                        return 1;
                    }
                    if (a.pseudo.toLowerCase() > b.pseudo.toLowerCase()) {
                        if (store.sharkscope.sortOrder === 'ASC') return 1;
                        return -1;
                    }
                    return 0;
                });
            } else if (store.sharkscope.sortBy === 'ability') {
                items = items.sort((a, b) => {
                    if (Number(a.stats.Ability) < Number(b.stats.Ability)) {
                        if (store.sharkscope.sortOrder === 'ASC') return -1;
                        return 1;
                    }
                    if (Number(a.stats.Ability) > Number(b.stats.Ability)) {
                        if (store.sharkscope.sortOrder === 'ASC') return 1;
                        return -1;
                    }
                    return 0;
                });
            } else if (store.sharkscope.sortBy === 'count') {
                items = items.sort((a, b) => {
                    if (Number(a.stats.Count) < Number(b.stats.Count)) {
                        if (store.sharkscope.sortOrder === 'ASC') return -1;
                        return 1;
                    }
                    if (Number(a.stats.Count) > Number(b.stats.Count)) {
                        if (store.sharkscope.sortOrder === 'ASC') return 1;
                        return -1;
                    }
                    return 0;
                });
            }
        }
        return <React.Fragment>{items.map(p => <StatsItem key={shortid.generate()} player={p} />)}</React.Fragment>;
    })
);

export default StatsList;
