import {applyMiddleware, createStore} from 'redux';
import {createBackgroundStore} from 'redux-webext';
import {FETCH_PAGE_TEXT} from '../../../constants';
import reducer from './reducers';
import {fetchPageText} from "./actions/textActions";
import thunkMiddleware from 'redux-thunk';

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware)
);

export default createBackgroundStore({
    store,
    actions: {
        FETCH_PAGE_TEXT: fetchPageText,
    }
});
