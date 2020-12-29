import {applyMiddleware, createStore} from 'redux';
import {createBackgroundStore} from 'redux-webext';
import {FETCH_PAGE_TEXT, SEND_ANALYTICS_EVENT, SEND_ANALYTICS_PAGE} from '../../../constants';
import reducer from './reducers';
import {fetchPageText} from "./actions/textActions";
import thunkMiddleware from 'redux-thunk';
import {sendAnalyticsEvent, sendAnalyticsPage} from "./actions/analyticsActions";

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware)
);

export default createBackgroundStore({
  store,
  actions: {
    [FETCH_PAGE_TEXT]: fetchPageText,
    [SEND_ANALYTICS_EVENT]: sendAnalyticsEvent,
    [SEND_ANALYTICS_PAGE]: sendAnalyticsPage,
  }
});
