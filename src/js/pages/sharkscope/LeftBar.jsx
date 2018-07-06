import React from 'react';
import { inject, observer } from 'mobx-react';
import shortid from 'shortid';

import SearchBar from './SearchBar.jsx';
import FavoritesBar from './FavoritesBar.jsx';

const LeftBar = inject('store')(
    observer(({ store }) => {
        const showTab = t => {
            store.sharkscope.setTab(t);
        };

        return (
            <div>
                <div className="buttons has-addons left-bar-tabs">
                    <button
                      className={store.sharkscope.tab === 'search' ? 'button is-small is-rounded selected' : 'button is-small is-rounded '}
                      onClick={() => {
                            showTab('search');
                        }}>
                        Search
                    </button>
                    <button
                      className={store.sharkscope.tab === 'favorites' ? 'button is-small is-rounded selected' : 'button is-small is-rounded '}
                      onClick={() => {
                            showTab('favorites');
                        }}>
                        Favorites
                    </button>
                </div>
                {store.sharkscope.tab === 'search' ? <SearchBar /> : <FavoritesBar />}
            </div>
        );
    })
);

export default LeftBar;
