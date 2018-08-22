import React from 'react';
import { inject, observer } from 'mobx-react';
import shortid from 'shortid';
import LeftBar from './views/LeftBar.jsx';
import StatsList from './views/StatsList.jsx';
import Tabs from './views/Tabs.jsx';
import CreateTab from './views/CreateTab.jsx';
import StatsFilter from './views/StatsFilter.jsx';
import Storage from '../../services/storage';
import SharkscopeTab from './models/SharkscopeTab';

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
            store.sharkscope.setEditedTab(new SharkscopeTab(shortid.generate(), 'Tab 1', null));
            store.sharkscope.addTab();
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
                    {store.sharkscope.createTab || store.sharkscope.editTab ? <CreateTab /> : ''}
                </div>
            </div>
        );
    })
);

export default Sharkscope;
