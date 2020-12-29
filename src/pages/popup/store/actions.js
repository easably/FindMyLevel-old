import {FETCH_PAGE_TEXT, SEND_ANALYTICS_EVENT,} from '../../../constants';

export function fetchPageText() {
  return {
    type: FETCH_PAGE_TEXT,
  };
}

export function sendAnalyticsEvent(category, action) {
  return {
    type: SEND_ANALYTICS_EVENT,
    category,
    action
  };
}

export function sendAnalyticsPage(page) {
  return {
    type: SEND_ANALYTICS_EVENT,
    page
  };
}

