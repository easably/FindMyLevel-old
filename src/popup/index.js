import "core-js/stable";
import "regenerator-runtime/runtime";

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createUIStore} from 'redux-webext';
import App from './app';

async function initApp() {
  const store = await createUIStore();

  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root'),
  );
}

initApp();
