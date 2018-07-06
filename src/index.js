import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'mobx-react';
import * as mobx from 'mobx';
import App from './js/App.jsx';
import RootStore from './js/stores/RootStore';

import Storage from './js/services/storage';

require('./styles/main.scss');

// ReactDOM.render(<App />, document.querySelector('#root'));

const store = new RootStore();

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

Storage.load();

renderApp();
if (module.hot) {
    module.hot.accept('./js/App.jsx', renderApp);
}
