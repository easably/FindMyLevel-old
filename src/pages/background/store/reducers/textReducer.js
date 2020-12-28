import {FETCH_PAGE_TEXT} from "../../../../constants";

const initialState = {
  loading: true,
  error: false,
  meta: {levels: [], grade: 'A1', words: 0}
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case FETCH_PAGE_TEXT:
      return {
        ...state,
        meta: payload.meta,
        error: false,
        loading: false,
      };

    default:
      return state;
  }
};