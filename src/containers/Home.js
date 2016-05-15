'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import {Actions} from 'react-native-router-flux';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Find Fruit - Home
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
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
            onPress={Actions.profile}
            underlayColor='#bbbbbb'>
              <Text style={styles.buttonText}>
                Profile
              </Text>
        </TouchableHighlight>
        <TouchableHighlight
            style={styles.button}
            onPress={Actions.map}
            underlayColor='#bbbbbb'>
              <Text style={styles.buttonText}>
                Map
              </Text>
        </TouchableHighlight>
        <TouchableHighlight
            style={styles.button}
            onPress={Actions.achievement}
            underlayColor='#bbbbbb'>
              <Text style={styles.buttonText}>
                Achievements
              </Text>
        </TouchableHighlight>
        <TouchableHighlight
            style={styles.button}
            onPress={Actions.adventure}
            underlayColor='#bbbbbb'>
              <Text style={styles.buttonText}>
                Adventures
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
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
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
    color: '#fff'
  }
});

module.exports = Home;