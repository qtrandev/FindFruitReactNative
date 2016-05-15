'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import {Actions} from 'react-native-router-flux';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Quyen Tran'
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.userView}>
          <Image
            style={styles.userIcon}
            source={{uri: 'https://pbs.twimg.com/profile_images/692594933488848896/uDJQ6oFm.jpg'}}
          />
          <Text style={styles.userName}>
            {this.state.userName}
          </Text>
          <Image
          style={styles.userRating}
          source={{uri: 'http://ridesharegenius.com/wp-content/uploads/2015/03/5-stars-640x162.jpg'}}
          />
        </View>
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
    flexDirection: 'column',
    marginTop: 60,
    backgroundColor: '#123456',
  },
  userView: {
    flex: 1,
    margin: 10,
    flexDirection: 'column',
    alignItems: 'center'
  },
  userIcon: {
    width: 50,
    height: 50,
    borderWidth: 0.5,
    borderColor: 'black'
  },
  userName: {
    fontSize: 15,
    color: 'white',
    padding: 5
  },
  userRating: {
    width: 150,
    height: 30
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

module.exports = Profile;