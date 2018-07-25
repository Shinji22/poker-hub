import React from 'react';
import { inject, observer } from 'mobx-react';
import LeftBar from './views/LeftBar.jsx';
import StatsList from './views/StatsList.jsx';
import Tabs from './views/Tabs.jsx';
import CreateTab from './views/CreateTab.jsx';
import StatsFilter from './views/StatsFilter.jsx';
import Storage from '../../services/storage';

const Sharkscope = inject('store')(
    observer(({ store }) => {

        // Initialisation des favoris
        const favorites = Storage.load(store.global.filenames.favorite);
        if (Array.isArray(favorites)) {
            store.sharkscope.setFavorites(favorites);
        } else {
            store.sharkscope.setFavorites([]);
        }

        // Initialisation des tabulations
        if (store.sharkscope.tabs.length === 0) {
            store.sharkscope.addTab('Tab 1');
        }

        return (
            <div className="sharkscope-content">
                <div className="left">
                    <LeftBar />
                </div>
                <div className="right">
                    <StatsFilter />
                    <Tabs />
                    <StatsList />
                    <CreateTab />
                </div>
            </div>
        );
    })
);

export default Sharkscope;
