import React from 'react';
import { inject, observer } from 'mobx-react';
import LeftBar from './LeftBar.jsx';
import StatsList from './StatsList.jsx';
import StatsFilter from './StatsFilter.jsx';
import SharkscopeDB from './SharkscopeDB';

const Sharkscope = inject('store')(observer(({ store }) => {

    new SharkscopeDB().init();
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
}));

export default Sharkscope;
