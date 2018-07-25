import React from 'react';
import { inject, observer } from 'mobx-react';

import SearchBar from './SearchBar.jsx';
import FavoritesBar from './FavoritesBar.jsx';

const LeftBar = inject('store')(
    observer(({ store }) => {
        const showView = t => {
            store.sharkscope.setView(t);
        };

        return (
            <div>
                <div className="buttons has-addons left-bar-tabs">
                    <button
                        className={store.sharkscope.view === 'search' ? 'button is-small is-rounded selected' : 'button is-small is-rounded '}
                        onClick={() => {
                            showView('search');
                        }}>
                        Search
                    </button>
                    <button
                        className={store.sharkscope.view === 'favorites' ? 'button is-small is-rounded selected' : 'button is-small is-rounded '}
                        onClick={() => {
                            showView('favorites');
                        }}>
                        Favorites
                    </button>
                </div>
                {store.sharkscope.view === 'search' ? <SearchBar /> : <FavoritesBar />}
            </div>
        );
    })
);

export default LeftBar;
