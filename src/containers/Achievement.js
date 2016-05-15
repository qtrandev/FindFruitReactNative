'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import {Actions} from 'react-native-router-flux';

class Achievement extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Achievements
        </Text>
        <TouchableHighlight
            style={styles.button}
            onPress={Actions.login}
            underlayColor='#bbbbbb'>
              <Text style={styles.buttonText}>
                Login
              </Text>
        </TouchableHighlight>
        <TouchableHighlight
            style={styles.button}
            onPress={Actions.home}
            underlayColor='#bbbbbb'>
              <Text style={styles.buttonText}>
                Home
              </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#123456',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  button: {
    height: 36,
    backgroundColor: '#f7b700',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 2,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    color: '#000'
  }
});

module.exports = Achievement;