import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import DemandComponent from '../../components/tab/DemandComponent';

class DemandScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DemandComponent/>
      </View>
    );
  }
}

DemandScreen.navigationOptions = {
  tabBarLabel: 'demand',
  tabBarIcon: () => (
    <Image source={require('../../assets/images/icon.png')} />
  ),
  gesturesEnabled: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 255, 0, 0.4)',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
});

export default DemandScreen;
