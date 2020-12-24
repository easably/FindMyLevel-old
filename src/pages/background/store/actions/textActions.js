import {FETCH_PAGE_TEXT} from "../../../../constants";
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
  Mercury.parse(response.url, {html: response.html, contentType: 'text'})
    .then((parsedPage) => {
      let result = grade(parsedPage.content);
      dispatch({type: FETCH_PAGE_TEXT, payload: {meta: result.meta}});
    });
}

export const fetchPageText = (provider) => (dispatch, getState) => {
  fetchText(callback, dispatch);
};