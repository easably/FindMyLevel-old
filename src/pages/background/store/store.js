import {createStore} from 'redux';
import {createBackgroundStore} from 'redux-webext';
import {FETCH_PAGE_TEXT} from '../../../constants';
import reducer from './reducers';
import {fetchPageText} from "./actions/textActions";

const store = createStore(reducer);

export default createBackgroundStore({
    store,
    actions: {
        FETCH_PAGE_TEXT: fetchPageText,
    }
});
