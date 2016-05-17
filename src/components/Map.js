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

import { Actions } from 'react-native-router-flux';
import { replaceTrees } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
const Firebase = require('firebase');

function mapStateToProps(state) {
  let markers = [];
  state.trees.forEach((tree) => {
    markers.push({
      latitude: tree.lat,
      longitude: tree.lng,
      title: tree.treetype,
      subtitle: 'Allow Pick: '+ tree.allowpick + ', ' +
        'Public Location: ' + tree.publiclocation
    });
  });
  return {
    markers
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    replaceTrees
  }, dispatch);
}

class Map extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.itemsRef = new Firebase("https://findfruit.firebaseio.com/tree");
    this.itemsRef.on('value', ((snap) => {
      var trees = [];
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
      });
      this.props.replaceTrees(trees);
    }).bind(this));
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
          annotations={this.props.markers}/>
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

Map.propTypes = {
  markers: PropTypes.arrayOf(PropTypes.object)
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
