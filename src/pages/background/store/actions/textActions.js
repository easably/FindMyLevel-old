import {FETCH_PAGE_TEXT_FAIL, FETCH_PAGE_TEXT_START, FETCH_PAGE_TEXT_SUCCESS} from "../../../../constants";
import Mercury from '@postlight/mercury-parser';
import grade from 'vocabulary-level-grader';

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
  if(response.url === undefined) {
    dispatch({type: FETCH_PAGE_TEXT_FAIL, payload: {error: 'failed to fetch page'}})
  }

  Mercury.parse(response.url, {html: response.html, contentType: 'text'})
    .then((parsedPage) => {
      let result = grade(parsedPage.content);
      dispatch({type: FETCH_PAGE_TEXT_SUCCESS, payload: {meta: result.meta}});
    });
}

export const fetchPageText = (provider) => (dispatch, getState) => {
  dispatch({type: FETCH_PAGE_TEXT_START, payload: {}});
  fetchText(callback, dispatch);
};