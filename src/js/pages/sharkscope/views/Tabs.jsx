import React from 'react';
import { inject, observer } from 'mobx-react';
import shortid from 'shortid';
import SharkscopeTab from '../models/SharkscopeTab';

const Tabs = inject('store')(
    observer(({ store }) => {
        /**
         * Sélection d'un onglet
         * @param {event} event
         * @param {SharkscopeTab} tab
         */
        const selectTab = (event, tab) => {
            if (event.target.nodeName.toLowerCase() !== 'button') {
                store.sharkscope.setTab(tab);
            }
        };

        /**
         * Edition d'un onglet
         * @param {event} event
         * @param {SharkscopeTab} tab
         */
        const editTab = (event, tab) => {
            event.preventDefault();
            store.sharkscope.setEditedTab(tab);
            store.sharkscope.showEditTab(true);
        };

        /**
         * Ajout d'un onglet
         */
        const addTab = () => {
            store.sharkscope.setEditedTab(new SharkscopeTab(shortid.generate(), '', null));
            store.sharkscope.showCreateTab(true);
        };

        /**
         * Suppression d'un onglet
         * @param {SharkscopeTab} tab
         */
        const removeTab = tab => {
            store.sharkscope.removeTab(tab);
        };

        return (
            <div className="tabs is-small is-boxed">
                <ul>
                    {store.sharkscope.tabs.map(tab => (
                        <li className={tab.id === store.sharkscope.currentTab.id ? 'is-active' : ''}
key={shortid.generate()}>
                            <a
                              onClick={e => {
                                    selectTab(e, tab);
                                }}
                              onContextMenu={e => {
                                    editTab(e, tab);
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
