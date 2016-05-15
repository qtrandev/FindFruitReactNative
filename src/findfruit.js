'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Actions, Scene, Router} from 'react-native-router-flux';
import Home from './containers/Home';
import Login from './containers/Login';
import Profile from './containers/Profile';
import ViewMap from './containers/ViewMap';
import Achievement from './containers/Achievement';
import Adventure from './containers/Adventure';

class FindFruit extends Component {
  render() {
    return (
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
    );
  }
}

AppRegistry.registerComponent('FindFruit', () => FindFruit);