'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  MapView,
  PropTypes,
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import {Actions} from 'react-native-router-flux';
const Firebase = require('firebase');

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trees: [],
      markers: []
    };
    this.itemsRef = new Firebase("https://findfruit.firebaseio.com/tree");
    this.itemsRef.on('value', (snap) => {
      var trees = [];
      var markers = [];
      snap.forEach((child) => {
        trees.push({
          treetype: child.val().treetype,
          fulltype: child.val().fulltype,
          verified: child.val().verified,
          publiclocation: child.val().publiclocation,
          allowpick: child.val().allowpick,
          season: child.val().season,
          source: child.val().source,
          marker: child.val().marker,
          lat: child.val().lat,
          lng: child.val().lng
        });
        markers.push({
          latitude: child.val().lat,
          longitude: child.val().lng,
          title: child.val().treetype,
          subtitle: 'Allow Pick: '+ child.val().allowpick + ', ' +
            'Public Location: ' + child.val().publiclocation
        });
      });

      this.setState({
        trees: trees,
        markers: markers,
      });
    });
  }
  render() {
    return (
      <View style={styles.container}>
          <MapView
          style={styles.map}
          region={{
            latitude: 25.786017,
            longitude: -80.135296,
            latitudeDelta: 5,
            longitudeDelta: 5
          }}
          annotations={this.state.markers}/>
          <TouchableHighlight
            style={styles.button}
            onPress={() => Actions.pop()}
            underlayColor='#bbbbbb'>
              <Text style={styles.buttonText}>
                Back
              </Text>
          </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  },
  button: {
    height: 36,
    backgroundColor: '#123456',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 2,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    color: '#fff'
  },
});

module.exports = Map;
