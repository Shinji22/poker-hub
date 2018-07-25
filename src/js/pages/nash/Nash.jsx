import React from 'react';
import { inject, observer } from 'mobx-react';
import Push from './Push.jsx';
import Call from './Call.jsx';

const Nash = inject('store')(
    observer(({ store }) => {
        const setTab = t => {
            store.nash.setTab(t);
        };

        return (
            <div className="nash-content">
                <div className="nash-nav buttons has-addons">
                    <span
                        onClick={() => {
                            setTab('push');
                        }}
                        className={`button is-dark is-rounded ${store.nash.currentTab === 'push' && 'is-selected'}`}>
                        Push
                    </span>
                    <span
                        onClick={() => {
                            setTab('call');
                        }}
                        className={`button is-dark is-rounded ${store.nash.currentTab === 'call' && 'is-selected'}`}>
                        Call
                    </span>
                </div>

                <div className="nash-tabs">{store.nash.currentTab === 'push' ? <Push /> : <Call />}</div>
            </div>
        );
    })
);

export default Nash;
