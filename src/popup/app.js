import React from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions';

const App = (props) => {
  const {
    backgroundCounter,
    uiCounter,
    incrementUICounter,
    decrementUICounter
  } = props;

  return (
    <div>
      Hello there Webext-Redux
    </div>
  );
};

export default connect(state => state, actions)(App);
