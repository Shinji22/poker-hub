import React from 'react';
import { inject, observer } from 'mobx-react';
import shortid from 'shortid';

const Tabs = inject('store')(
    observer(({ store }) => {
        const selectTab = (event, tab) => {
            if (event.target.nodeName.toLowerCase() !== 'button') {
                store.sharkscope.setTab(tab);
            }
        };

        const addTab = () => {
            store.sharkscope.showCreateTab(true);
        };

        const removeTab = tab => {
            store.sharkscope.removeTab(tab);
        };

        return (
            <div className="tabs is-small is-boxed">
                <ul>
                    {store.sharkscope.tabs.map(tab => (
                        <li
className={tab.id === store.sharkscope.currentTab.id ? 'is-active' : ''} key={shortid.generate()}>
                            <a
                              onClick={e => {
                                    selectTab(e, tab);
                                }}>
                                {tab.icon ? <img src={tab.icon} className="tabIcon" alt="" /> : ''}

                                <span>{tab.name}</span>
                                <button
                                  className={store.sharkscope.tabs.length > 1 ? 'delete is-small' : 'delete is-small is-invisible'}
                                  aria-label="delete"
                                  onClick={() => {
                                        removeTab(tab);
                                    }}
                                />
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                          className="add-tab"
                          onClick={() => {
                                addTab();
                            }}>
                            <i className="material-icons">add</i>
                        </a>
                    </li>
                </ul>
            </div>
        );
    })
);

export default Tabs;
