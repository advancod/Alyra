import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

import GetInfoDemand from '../Demand/getInfoDemand';
import PayDemand from '../Demand/payDemand';
import SoldeDemand from '../Demand/soldeDemand';

class DummyComponent extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <GetInfoDemand/>
      <PayDemand/>
      <SoldeDemand/>
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
