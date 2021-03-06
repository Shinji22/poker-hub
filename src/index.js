import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'mobx-react';
import * as mobx from 'mobx';
import App from './js/App.jsx';
import RootStore from './js/stores/RootStore';
import config from './js/services/config';

require('./styles/main.scss');

const store = new RootStore();
// Initialisation du store
config.initStore(store);

mobx.useStrict(true);

const renderApp = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <App />
            </Provider>
        </AppContainer>,
        document.querySelector('#root')
    );
};

renderApp();
if (module.hot) {
    module.hot.accept('./js/App.jsx', renderApp);
}
