import React from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions';
import Main from './components/main/main';
import Advertisement from './components/advertisement/advertisement';

const App = (props) => {
  const {
    backgroundCounter,
    uiCounter,
    incrementUICounter,
    decrementUICounter
  } = props;

  return (
    <div className="w-96 bg-gray-900">
      <Main/>
      <Advertisement/>
    </div>
  );
};

export default connect(state => state, actions)(App);
