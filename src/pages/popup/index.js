import "core-js/stable";
import "regenerator-runtime/runtime";

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createUIStore} from 'redux-webext';
import App from './app';
import '../background/analytics';

let query = { active: true, currentWindow: true };
function callback(tabs) {
  let currentTab = tabs[0];
  console.log("send analytics");

  ga('send', "event", "Main PopUp", "Logo click", currentTab.url);
}
chrome.tabs.query(query, callback);

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
