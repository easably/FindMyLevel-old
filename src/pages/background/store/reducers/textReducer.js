import {FETCH_PAGE_TEXT} from "../../../../constants";

const initialState = {
  loading: true,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PAGE_TEXT:
      return {
        ...state,
        error: false,
      };

    default:
      return state;
  }
};