import {combineReducers} from 'redux';
import textReducer from "./textReducer";
import analyticsReducer from "./analyticsReducer";

export default combineReducers({
  text: textReducer,
  analytics: analyticsReducer,
});
