import React from 'react';
import { inject, observer } from 'mobx-react';
import Random from './Random.jsx';

const Header = inject('store')(
    observer(({ store }) => {
        return (
            <div className={store.global.sidebarExpanded ? 'header-title reduced' : 'header-title'}>
                {store.global.currentRoute.label}
                <Random />
            </div>
        );
    })
);

export default Header;
