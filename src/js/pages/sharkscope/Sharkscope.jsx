import React from 'react';
import { inject, observer } from 'mobx-react';
import LeftBar from './LeftBar.jsx';
import StatsList from './StatsList.jsx';
import StatsFilter from './StatsFilter.jsx';
import Storage from '../../services/storage';

const Sharkscope = inject('store')(
    observer(({ store }) => {
        const favorites = Storage.load(store.global.filenames.favorite);
        console.log(favorites);
        if (Array.isArray(favorites)) {
            store.sharkscope.setFavorites(favorites);
        } else {
            store.sharkscope.setFavorites([]);
        }
        console.log(store.sharkscope.favorites);
        return (
            <div className="sharkscope-content">
                <div className="left">
                    <LeftBar />
                </div>
                <div className="right">
                    <StatsFilter />
                    <StatsList />
                </div>
            </div>
        );
    })
);

export default Sharkscope;
