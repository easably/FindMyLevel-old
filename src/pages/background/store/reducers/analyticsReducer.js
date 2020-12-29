import {SEND_ANALYTICS_EVENT, SEND_ANALYTICS_PAGE} from "../../../../constants";

const initialState = {};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SEND_ANALYTICS_EVENT:
      return {
        ...state,
      };

    case SEND_ANALYTICS_PAGE:
      return {
        ...state,
      };

    default:
      return state;
  }
};
