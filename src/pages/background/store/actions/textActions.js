import {FETCH_PAGE_TEXT_FAIL, FETCH_PAGE_TEXT_START, FETCH_PAGE_TEXT_SUCCESS} from "../../../../constants/constants";
import Mercury from '@postlight/mercury-parser';
import grade from 'vocabulary-level-grader';
import {sendAnalyticsEvent} from "./analyticsActions";

// Send message to content page
const fetchText = (callback, dispatch) => {
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    let currentTab = tabs[0];
    chrome.tabs.sendMessage(currentTab.id, {type: "getPage"}, {}, function (response) {
      callback(response, dispatch);
    })
  });
}

const callback = (response, dispatch) => {
  if (response.url === undefined) {
    dispatch({type: FETCH_PAGE_TEXT_FAIL, payload: {error: 'failed to fetch page'}})
  }

  Mercury.parse(response.url, {html: response.html, contentType: 'text'})
    .then((parsedPage) => {
      let result = grade(parsedPage.content);
      let timestampNow = new Date();
      let timeForFetching = timestampNow - timeStampStart;
      dispatch(sendAnalyticsEvent({
        category: 'Productivity',
        action: 'Time to process the texts',
        label: timeForFetching
      }));
      dispatch({type: FETCH_PAGE_TEXT_SUCCESS, payload: {meta: result.meta}});
    });
}

let timeStampStart;
export const fetchPageText = (provider) => (dispatch, getState) => {
  timeStampStart = new Date();
  dispatch({type: FETCH_PAGE_TEXT_START, payload: {}});
  fetchText(callback, dispatch);
};