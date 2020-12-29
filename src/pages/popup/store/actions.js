import {FETCH_PAGE_TEXT, SEND_ANALYTICS_EVENT, SEND_ANALYTICS_PAGE,} from '../../../constants/constants';

export function fetchPageText() {
  return {
    type: FETCH_PAGE_TEXT,
  };
}

export function sendAnalyticsEvent(category, action, label) {
  return {
    type: SEND_ANALYTICS_EVENT,
    category,
    action,
    label
  };
}

export function sendAnalyticsPage(page) {
  return {
    type: SEND_ANALYTICS_PAGE,
    page
  };
}

