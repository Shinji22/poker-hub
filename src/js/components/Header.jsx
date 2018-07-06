import React from 'react';
import { inject, observer } from 'mobx-react';
import Random from './Random.jsx';

const Header = inject('store')(observer(({ store }) => {
    return (
        <div className={store.route.sidebarExpanded ? 'header-title reduced' : 'header-title'}>
            {store.route.current.label}
            <Random />
        </div>
    );
}));

export default Header;
