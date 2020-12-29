import React from 'react';
import {connect} from 'react-redux';
import * as actions from './store/actions';
import Main from './components/main/main';
import Advertisement from './components/advertisement/advertisement';
import {useEffect} from "react";

const App = (props) => {
  const {
    fetchPageText,
    sendAnalyticsPage,
  } = props;

  useEffect(() => {
    fetchPageText();
    sendAnalyticsPage("/");
  }, []);

  return (
    <div className="w-96 bg-gray-900">
      <Main/>
      <Advertisement/>
    </div>
  );
};

export default connect(state => state, actions)(App);
