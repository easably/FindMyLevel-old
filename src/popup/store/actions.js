import {INCREMENT_UI_COUNTER, DECREMENT_UI_COUNTER, FETCH_PAGE_TEXT} from '../../constants';

export function fetchPageText() {
    return {
        type: FETCH_PAGE_TEXT,
    };
}
