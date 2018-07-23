import React from 'react';
import { inject, observer } from 'mobx-react';
import shortid from 'shortid';
import fs from 'fs';

import logoLight from '../../../assets/poker_hub_logo_light.png';

const { execFile } = require('child_process');

const Home = inject('store')(
    observer(({ store }) => {
        /**
         * lancement d'une application
         * @param {object} soft
         */
        const launch = soft => {
            execFile(soft.defaultPath, soft.args, (err, data) => {
                if (err) {
                    console.log(err);
                    console.log(data.toString());
                }
            });
        };

        const addScript = document.createElement('script');
        addScript.setAttribute('src', 'https://platform.twitter.com/widgets.js');
        document.body.appendChild(addScript);

        store.home.soft.forEach(s => {
            if (fs.existsSync(s.defaultPath)) s.enabled = true;
        });

        return (
            <div className="home-page">
                <div className="home-launcher">
                    <h4>Logiciels Poker</h4>
                    <div className="item-list">
                        {store.home.soft.map(soft => {
                            if (soft.type === 'game')
                                return (
                                    <div key={shortid.generate()} className="soft-item">
                                        {soft.enabled ? (
                                            <a
                                                onClick={() => {
                                                    launch(soft);
                                                }}
                                            >
                                                <img src={soft.icon} alt="icon" className="soft-icon" />
                                            </a>
                                        ) : (
                                                <img src={soft.icon} alt="icon" className="soft-icon disabled" />
                                            )}
                                    </div>
                                );
                            return null;
                        })}
                    </div>
                    <h4>Trackers</h4>
                    <div className="item-list">
                        {store.home.soft.map(soft => {
                            if (soft.type === 'tracker')
                                return (
                                    <div key={shortid.generate()} className="soft-item">
                                        {soft.enabled ? (
                                            <a
                                                onClick={() => {
                                                    launch(soft);
                                                }}
                                            >
                                                <img src={soft.icon} alt="icon" className="soft-icon" />
                                            </a>
                                        ) : (
                                                <img src={soft.icon} alt="icon" className="soft-icon disabled" />
                                            )}
                                    </div>
                                );
                            return null;
                        })}
                    </div>
                </div>
                {store.home.twitterDisplay === true ? (
                    <div className="home-twitter">
                        <a className="twitter-timeline" data-lang="fr" data-width="320" data-height="460" data-theme="dark" href={store.home.twitterURL}>
                            Tweets by {store.home.twitterSource}
                        </a>{' '}
                    </div>
                ) : (
                        ''
                    )}

                <img src={logoLight} id="home-logo" alt="" />
            </div>
        );
    })
);

export default Home;
