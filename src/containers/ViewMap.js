'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import Map from '../components/Map';

class ViewMap extends Component {
  render() {
    return (
      <Map style={styles.container}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = ViewMap;