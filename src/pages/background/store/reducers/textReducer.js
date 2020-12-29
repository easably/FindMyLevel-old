import {
  FETCH_PAGE_TEXT_FAIL,
  FETCH_PAGE_TEXT_START,
  FETCH_PAGE_TEXT_SUCCESS
} from "../../../../constants";

const initialState = {
  loading: true,
  error: false,
  meta: {levels: [], grade: 'A1', words: 0}
};

export default (state = initialState, action) => {
  const {type, payload} = action;


  switch (type) {
    case FETCH_PAGE_TEXT_START:
      return {
        ...state,
        error: false,
        loading: true,
      };

    case FETCH_PAGE_TEXT_SUCCESS:
      return {
        ...state,
        meta: payload.meta,
        error: false,
        loading: false,
      };

    case FETCH_PAGE_TEXT_FAIL:
      return {
        ...state,
        error: true,
        loading: false,
      };

    default:
      return state;
  }
};