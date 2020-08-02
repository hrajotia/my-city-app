import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faPencilAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

import '../../styles/styles.scss';

import configureStore, { history } from './store/configureStore';
import Root from './containers/Root';

library.add([faTrashAlt, faPencilAlt, faSearch]);
require('../../images/favicon.ico');

const store = configureStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Root />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const { AppContainer } = require('react-hot-loader')
    const NewRoot = require('./containers/Root').default;

    render(
      <Provider store={store}>
        <AppContainer>
          <ConnectedRouter history={history}>
            <NewRoot store={store} history={history} />
          </ConnectedRouter>
        </AppContainer>
      </Provider>,
      document.getElementById('app')
    );
  });
}
