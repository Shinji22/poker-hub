import React from 'react';
import { inject, observer } from 'mobx-react';

import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import Home from './pages/home/Home.jsx';
import Sharkscope from './pages/sharkscope/Sharkscope.jsx';
import Settings from './pages/settings/Settings.jsx';
import Nash from './pages/nash/Nash.jsx';

const App = inject('store')(observer(({ store }) => {

    const page = store.route.current;
    return (
    <div>
        <Sidebar />
        <Header />
        <div className={store.route.sidebarExpanded ? 'content reduced' : 'content'}>
            { page.id === 'home' && <Home /> }
            {page.id === 'settings' && <Settings /> }
            {page.id === 'sharkscope' && <Sharkscope /> }
            {page.id === 'nash' && <Nash />}
        </div>
    </div>
    );
}));

export default App;
