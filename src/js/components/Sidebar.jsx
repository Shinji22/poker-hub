import React from 'react';
import { inject, observer } from 'mobx-react';

const Sidebar = inject('store')(
    observer(({ store }) => {
        const menuHandler = page => {
            store.global.setCurrentRoute(page);
        };

        const toggleSidebarView = e => {
            store.global.toggleSidebar();
        };

        const items = store.global.routeList.map(route => (
            <a
              key={route.id}
              onClick={e => {
                    menuHandler(route);
                }}
              href="#"
              className={store.global.currentRoute.id === route.id ? 'selected' : ''}>
                <i className="material-icons md-light">{route.icon}</i>
                <span className="item">{route.label}</span>
            </a>
        ));

        return (
            <nav className={store.global.sidebarExpanded ? 'sidebar expanded' : 'sidebar'}>
                {items}
                <a onClick={toggleSidebarView} href="#" className="toggle-sidebar-button">
                    <i className="material-icons md-light">{store.global.sidebarExpanded ? 'list' : 'more_vert'}</i>
                </a>
            </nav>
        );
    })
);

export default Sidebar;
