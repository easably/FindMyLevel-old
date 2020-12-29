import {SEND_ANALYTICS_EVENT, SEND_ANALYTICS_PAGE} from "../../../../constants/constants";
import '../../analytics';

export const sendAnalyticsEvent = ({category, action, label}) => (dispatch, getState) => {
  ga('send', "event", category, action, label);
  dispatch({type: SEND_ANALYTICS_EVENT});
};

export const sendAnalyticsPage = ({ page }) => (dispatch, getState) => {
  ga('send', 'pageview', page)
  dispatch({type: SEND_ANALYTICS_PAGE});
};
