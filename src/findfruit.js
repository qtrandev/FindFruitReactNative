'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';

import {Actions, Scene, Router} from 'react-native-router-flux';
import Home from './containers/Home';
import Login from './containers/Login';
import Profile from './containers/Profile';
import ViewMap from './containers/ViewMap';
import Achievement from './containers/Achievement';
import Adventure from './containers/Adventure';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class FindFruit extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(rootReducer)}>
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home"/>
          <Scene key="login" component={Login} title="Login"/>
          <Scene key="profile" component={Profile} title="Profile"/>
          <Scene key="map" component={ViewMap} title="Map"/>
          <Scene key="achievement" component={Achievement} title="Achievements"/>
          <Scene key="adventure" component={Adventure} title="Adventures"/>
        </Scene>
      </Router>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('FindFruit', () => FindFruit);