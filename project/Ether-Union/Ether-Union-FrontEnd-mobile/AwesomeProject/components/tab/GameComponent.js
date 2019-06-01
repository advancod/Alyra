import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

import Play from '../game/Play';
import Withdraw from '../game/Withdraw';
import SaveWin from '../game/SaveWin';

class DummyComponent extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <Play/>
      <SaveWin/>
      <Withdraw/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 80,
    height: 80,
  },

  text: {
    color: '#242134',
    textAlign: 'center',
    fontSize: 16,
  },

  buttonContainer: {
    padding: 15,
  },
});

export default withNavigation(DummyComponent);
