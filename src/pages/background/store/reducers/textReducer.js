import {FETCH_PAGE_TEXT} from "../../../../constants";

const initialState = {
  loading: true,
  meta: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PAGE_TEXT:
      return {
        ...state,
        meta: payload.meta,
      };

    default:
      return state;
  }
};