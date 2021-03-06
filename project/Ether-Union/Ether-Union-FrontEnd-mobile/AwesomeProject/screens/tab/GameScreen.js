import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import GameComponent from '../../components/tab/GameComponent';

class GameScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <GameComponent/>
      </View>
    );
  }
}

GameScreen.navigationOptions = {
  tabBarLabel: 'game',
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

export default GameScreen;
