import React, { Component } from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native';

export default class  Play extends Component {


  constructor(props) {
    super(props);
    this.state = {
			getPrixLotery: 0,
      getSuperCagnote: 0,
      getTicketsLeft: 0,
      getEndGame: 0,
      getBlockStop: 0,
      getNumCagnote: 0,
      getCagnote: 0,
      getNbGagnants: 0,
      balanceOf: 0,
      getWithdrawBlock: 0,
      getSaveBlock: 0,
      getStateGame : '',
      prediction: '',
      getBlock: 0
		};
  }

  render() {

    return (

      <View>
      <Text>{this.props.text1}</Text>
      <Text>{this.props.text2}</Text>
      <Text>{this.props.text3}</Text>
      <Text>{this.props.text4}</Text>
      <Text>{this.props.text5}</Text>
      <Text>{this.props.text6}</Text>
      <Text>{this.props.text7}</Text>
      <Text>{this.props.text8}</Text>
      <Text>{this.props.text9}</Text>
      <Text>{this.props.text10}</Text>
      <Text>{this.props.text11}</Text>

      <Text>{this.state.getPrixLotery}</Text>
      <Text>{this.state.getStateGame}</Text>
      <Text>{this.state.getSuperCagnote}</Text>
      <Text>{this.state.getSaveBlock}</Text>
      <Text>{this.state.getWithdrawBlock}</Text>
      <Text>{this.state.getEndGame}</Text>
      <Text>{this.state.getBlockStop}</Text>
      <Text>{this.state.getCagnote}</Text>
      <Text>{this.state.getNbGagnants}</Text>
      <Text>{this.state.balanceOf}</Text>
      <Text>{this.state.getBlock}</Text>
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
